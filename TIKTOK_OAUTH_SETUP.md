# Настройка TikTok OAuth для AI-агентства Performante

## Что было создано

Мы создали полнофункциональную систему обработки TikTok OAuth callback для вашего сайта:

### 1. Новые файлы:
- `src/pages/TikTokCallback.tsx` - компонент для обработки OAuth (клиентская версия)
- `src/pages/TikTokCallbackServer.tsx` - компонент для серверной обработки
- `server-examples/express-oauth-handler.js` - пример Express.js сервера
- `server-examples/n8n-tiktok-oauth-workflow.json` - пример n8n workflow

### 2. Обновленные файлы:
- `src/App.tsx` - добавлен новый маршрут `/oauth/callback`

## Пошаговая настройка

### Шаг 1: Получите данные из TikTok Developer Portal

1. Зайдите в [TikTok Developer Portal](https://ads.tiktok.com/marketing_api/homepage)
2. Перейдите в **My Apps** → выберите ваше приложение → **Settings**
3. Найдите и скопируйте:
   - **App ID**
   - **App Secret**
4. В разделе **Redirect URI** добавьте:
   ```
   https://performanteaiagency.com/oauth/callback
   ```

### Шаг 2: Выберите метод обработки

#### Вариант A: Клиентская обработка (простой)

1. Откройте файл `src/pages/TikTokCallback.tsx`
2. Замените строки 57-58:
   ```typescript
   const APP_ID = 'ВАШ_APP_ID'; // Вставьте ваш App ID
   const APP_SECRET = 'ВАШ_APP_SECRET'; // Вставьте ваш App Secret
   ```

**⚠️ Внимание:** Этот метод может не работать из-за CORS политики TikTok API.

#### Вариант B: Серверная обработка (рекомендуется)

1. **Настройте Express.js сервер:**
   
   ```bash
   # Создайте новую папку для сервера
   mkdir tiktok-oauth-server
   cd tiktok-oauth-server
   
   # Инициализируйте проект
   npm init -y
   
   # Установите зависимости
   npm install express cors node-fetch dotenv
   ```

2. **Скопируйте код из `server-examples/express-oauth-handler.js`**

3. **Создайте файл `.env`:**
   ```env
   TIKTOK_APP_ID=ваш_app_id
   TIKTOK_APP_SECRET=ваш_app_secret
   PORT=3001
   ```

4. **Запустите сервер:**
   ```bash
   node express-oauth-handler.js
   ```

5. **Обновите компонент для использования сервера:**
   - В `src/App.tsx` замените маршрут:
     ```typescript
     <Route path="/oauth/callback" element={<TikTokCallbackServer />} />
     ```
   - Импортируйте новый компонент:
     ```typescript
     import TikTokCallbackServer from "./pages/TikTokCallbackServer";
     ```

#### Вариант C: Через n8n

1. Импортируйте workflow из `server-examples/n8n-tiktok-oauth-workflow.json`
2. Замените в workflow:
   - `ВАШ_APP_ID` на ваш App ID
   - `ВАШ_APP_SECRET` на ваш App Secret
3. Настройте MongoDB credentials для сохранения токенов
4. Активируйте workflow
5. Скопируйте webhook URL и используйте его в `TikTokCallbackServer.tsx`

### Шаг 3: Сгенерируйте ссылку авторизации

Создайте ссылку для авторизации пользователей:

```
https://business-api.tiktok.com/open_api/v1.3/oauth2/authorize/?app_id=ВАШ_APP_ID&response_type=code&scope=advertiser.manage,creative.manage,reporting.read&redirect_uri=https://performanteaiagency.com/oauth/callback&state=unique_string
```

**Замените:**
- `ВАШ_APP_ID` - на ваш реальный App ID
- `unique_string` - на любую уникальную строку для защиты

### Шаг 4: Тестирование

1. **Запустите ваше приложение:**
   ```bash
   npm run dev
   ```

2. **Откройте ссылку авторизации в браузере**

3. **Дайте разрешения TikTok**

4. **Проверьте, что вас перенаправило на:**
   ```
   https://performanteaiagency.com/oauth/callback?code=...&state=...
   ```

5. **Убедитесь, что токен получен и сохранен**

### Шаг 5: Использование токена

После успешной авторизации токен будет:

- **Клиентская версия:** сохранен в `localStorage`
- **Серверная версия:** должен быть сохранен в базе данных

Теперь вы можете использовать этот токен для:
- Создания рекламных кампаний
- Загрузки креативов
- Получения статистики

## Примеры использования токена

### Создание кампании:

```javascript
const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/campaign/create/', {
  method: 'POST',
  headers: {
    'Access-Token': 'ваш_access_token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    advertiser_id: 'ваш_advertiser_id',
    campaign_name: 'Моя кампания',
    objective_type: 'TRAFFIC'
  })
});
```

### Загрузка видео:

```javascript
const formData = new FormData();
formData.append('advertiser_id', 'ваш_advertiser_id');
formData.append('upload_type', 'UPLOAD_BY_FILE');
formData.append('video_file', file);

const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/file/video/ad/upload/', {
  method: 'POST',
  headers: {
    'Access-Token': 'ваш_access_token'
  },
  body: formData
});
```

## Безопасность

1. **Никогда не храните App Secret в клиентском коде**
2. **Используйте HTTPS для всех запросов**
3. **Регулярно обновляйте токены**
4. **Используйте параметр `state` для защиты от CSRF**

## Решение проблем

### Ошибка CORS
Если получаете ошибку CORS при клиентском запросе к TikTok API, используйте серверную обработку.

### Неверный redirect_uri
Убедитесь, что URL в TikTok Developer Portal точно совпадает с используемым в коде.

### Токен не работает
Проверьте:
- Правильность App ID и App Secret
- Scope разрешений
- Срок действия токена

## Дополнительные возможности

После настройки OAuth вы можете добавить:

1. **Автоматическое обновление токенов**
2. **Интеграцию с вашей CRM**
3. **Автоматический запуск кампаний**
4. **Отчеты по эффективности**

## Поддержка

Если возникли проблемы:
1. Проверьте логи в консоли браузера
2. Убедитесь, что все URL настроены правильно
3. Проверьте статус вашего приложения в TikTok Developer Portal 