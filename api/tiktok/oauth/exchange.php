<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://performanteaiagency.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка preflight запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$code = $input['code'] ?? ($input['auth_code'] ?? null);
$state = $input['state'] ?? null;

if (!$code) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Код не предоставлен']);
    exit;
}

// Данные для TikTok API
$data = [
    'app_id' => '7527489318093668353',
    'secret' => 'e5fd337267bd6059119741d52fca5064e967d830',
    'auth_code' => $code
];

// Отправляем запрос к TikTok API
$ch = curl_init('https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Подготовим данные для n8n
$n8nUrl = getenv('N8N_TIKTOK_WEBHOOK_URL');
if (!$n8nUrl || !filter_var($n8nUrl, FILTER_VALIDATE_URL)) {
    // продовый вебхук
    $n8nUrl = 'https://n8n.performanteaiagency.com/webhook/tiktok-oauth-callback';
}

$forwardToN8n = function(array $payload) use ($n8nUrl) {
    if (!$n8nUrl) return;
    try {
        $h = curl_init($n8nUrl);
        curl_setopt($h, CURLOPT_POST, true);
        curl_setopt($h, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($h, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($h, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($h, CURLOPT_TIMEOUT, 10);
        $res = curl_exec($h);
        $err = curl_error($h);
        curl_close($h);
        if ($err) {
            error_log('n8n forward error: ' . $err);
        } else {
            error_log('n8n forward ok: ' . substr((string)$res, 0, 200));
        }
    } catch (Throwable $e) {
        error_log('n8n forward exception: ' . $e->getMessage());
    }
};

if ($curlError) {
    error_log("TikTok OAuth CURL Error: " . $curlError);
    $forwardToN8n([
        'success' => false,
        'stage' => 'curl_error',
        'message' => $curlError,
        'state' => $state,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка соединения с TikTok API']);
    exit;
}

if ($httpCode !== 200) {
    error_log("TikTok OAuth HTTP Error: " . $httpCode . " Response: " . $response);
    $forwardToN8n([
        'success' => false,
        'stage' => 'http_error',
        'http_code' => $httpCode,
        'response' => $response,
        'state' => $state,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка API TikTok (HTTP ' . $httpCode . ')']);
    exit;
}

$responseData = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("TikTok OAuth JSON Error: " . json_last_error_msg());
    $forwardToN8n([
        'success' => false,
        'stage' => 'json_parse_error',
        'raw' => $response,
        'state' => $state,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка парсинга ответа TikTok']);
    exit;
}

// Проверяем успешность ответа от TikTok
if (isset($responseData['code']) && $responseData['code'] === 0) {
    // Успешный ответ
    $accessToken = $responseData['data']['access_token'] ?? null;
    $advertiserIds = $responseData['data']['advertiser_ids'] ?? [];
    
    // Логируем успешную авторизацию
    error_log("TikTok OAuth Success: Token obtained for " . count($advertiserIds) . " advertisers");

    $forwardToN8n([
        'success' => true,
        'stage' => 'exchanged',
        'access_token' => $accessToken,
        'advertiser_ids' => $advertiserIds,
        'state' => $state,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
    
    echo json_encode([
        'success' => true,
        'access_token' => $accessToken,
        'advertiser_ids' => $advertiserIds,
        'message' => 'Токен успешно получен'
    ]);
} else {
    // Ошибка от TikTok API
    $errorMessage = $responseData['message'] ?? 'Неизвестная ошибка TikTok API';
    error_log("TikTok OAuth API Error: " . $errorMessage);

    $forwardToN8n([
        'success' => false,
        'stage' => 'api_error',
        'message' => $errorMessage,
        'tiktok_response' => $responseData,
        'state' => $state,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);
    
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка TikTok API: ' . $errorMessage
    ]);
}
?> 