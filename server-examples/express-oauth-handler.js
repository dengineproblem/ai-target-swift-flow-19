// Пример Express.js сервера для обработки TikTok OAuth
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // или import fetch для ES modules

const app = express();
const PORT = process.env.PORT || 3001;

// Настройки CORS для вашего фронтенда
app.use(cors({
  origin: ['https://performanteaiagency.com', 'http://localhost:5173'], // добавьте ваши домены
  credentials: true
}));

app.use(express.json());

// ВАЖНО: Замените на ваши реальные значения из TikTok Developer Portal
const TIKTOK_APP_ID = process.env.TIKTOK_APP_ID || 'ВАШ_APP_ID';
const TIKTOK_APP_SECRET = process.env.TIKTOK_APP_SECRET || 'ВАШ_APP_SECRET';

// Endpoint для обмена кода на токен
app.post('/api/tiktok/oauth/exchange', async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: 'Код авторизации не предоставлен'
      });
    }

    console.log('Обмениваем код на токен:', code);

    // Запрос к TikTok API для обмена кода на токен
    const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_id: TIKTOK_APP_ID,
        secret: TIKTOK_APP_SECRET,
        auth_code: code,
      }),
    });

    const data = await response.json();
    
    console.log('Ответ TikTok API:', data);

    if (data.code === 0) {
      // Успешный ответ
      const { access_token, advertiser_ids } = data.data;
      
      // ВАЖНО: Здесь вы можете сохранить токен в базе данных
      // Например:
      // await saveTokenToDatabase(access_token, advertiser_ids);
      
      console.log('Токен успешно получен:', access_token);
      console.log('ID рекламодателей:', advertiser_ids);

      res.json({
        success: true,
        access_token,
        advertiser_ids,
        message: 'Токен успешно получен'
      });
    } else {
      // Ошибка от TikTok API
      console.error('Ошибка TikTok API:', data);
      res.status(400).json({
        success: false,
        message: data.message || 'Ошибка при получении токена'
      });
    }

  } catch (error) {
    console.error('Ошибка при обработке OAuth:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
});

// Дополнительный endpoint для проверки статуса токена
app.get('/api/tiktok/oauth/status', async (req, res) => {
  try {
    // Здесь вы можете проверить, есть ли действующий токен в базе данных
    // const token = await getTokenFromDatabase();
    
    res.json({
      success: true,
      hasToken: false, // измените на true, если токен есть
      message: 'Статус проверен'
    });
  } catch (error) {
    console.error('Ошибка при проверке статуса:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при проверке статуса'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`OAuth endpoint: http://localhost:${PORT}/api/tiktok/oauth/exchange`);
});

// Пример функции для сохранения токена в базу данных
async function saveTokenToDatabase(accessToken, advertiserIds) {
  // Здесь реализуйте сохранение в вашу базу данных
  // Например, MongoDB, PostgreSQL, MySQL и т.д.
  console.log('Сохраняем токен в БД:', { accessToken, advertiserIds });
}

// Пример функции для получения токена из базы данных
async function getTokenFromDatabase() {
  // Здесь реализуйте получение токена из базы данных
  console.log('Получаем токен из БД');
  return null; // вернуть реальный токен
}

module.exports = app; 