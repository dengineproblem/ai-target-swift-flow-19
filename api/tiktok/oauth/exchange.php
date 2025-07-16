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
$code = $input['code'] ?? null;

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

if ($curlError) {
    error_log("TikTok OAuth CURL Error: " . $curlError);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка соединения с TikTok API']);
    exit;
}

if ($httpCode !== 200) {
    error_log("TikTok OAuth HTTP Error: " . $httpCode . " Response: " . $response);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка API TikTok (HTTP ' . $httpCode . ')']);
    exit;
}

$responseData = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("TikTok OAuth JSON Error: " . json_last_error_msg());
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
    
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка TikTok API: ' . $errorMessage
    ]);
}
?> 