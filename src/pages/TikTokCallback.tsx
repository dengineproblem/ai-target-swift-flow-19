import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const TikTokCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('Обработка авторизации...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Получаем код из URL параметров
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');

        console.log('TikTok OAuth Callback:', { code, state, error });

        if (error) {
          setStatus('error');
          setMessage(`Ошибка авторизации: ${error}`);
          return;
        }

        if (!code) {
          setStatus('error');
          setMessage('Код авторизации не получен');
          return;
        }

        // Обмениваем код на access_token
        const response = await exchangeCodeForToken(code);
        
        if (response.success) {
          setStatus('success');
          setMessage('Авторизация успешно завершена!');
          
          // Сохраняем токен (можете изменить способ сохранения)
          localStorage.setItem('tiktok_access_token', response.access_token);
          localStorage.setItem('tiktok_advertiser_ids', JSON.stringify(response.advertiser_ids));
          
          // Переходим на главную страницу через 3 секунды
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(`Ошибка при получении токена: ${response.message}`);
        }

      } catch (error) {
        console.error('Error in TikTok callback:', error);
        setStatus('error');
        setMessage('Произошла ошибка при обработке авторизации');
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  // Функция для обмена кода на токен
  const exchangeCodeForToken = async (authCode: string) => {
    try {
      // Реальные данные для TikTok API
      const APP_ID = '7527489318093668353';
      const APP_SECRET = 'e5fd337267bd6059119741d52fca5064e967d830';

      const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_id: APP_ID,
          secret: APP_SECRET,
          auth_code: authCode,
        }),
      });

      const data = await response.json();
      
      console.log('TikTok API Response:', data);

      if (data.code === 0) {
        return {
          success: true,
          access_token: data.data.access_token,
          advertiser_ids: data.data.advertiser_ids,
        };
      } else {
        return {
          success: false,
          message: data.message || 'Неизвестная ошибка',
        };
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      return {
        success: false,
        message: 'Ошибка сети',
      };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-black/50 border border-white/10 rounded-xl p-8">
          <h1 className="text-2xl font-bold mb-6">
            TikTok OAuth
          </h1>
          
          {status === 'loading' && (
            <div className="mb-6">
              <div className="animate-spin h-8 w-8 border-2 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white/80">{message}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="mb-6">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-400 font-semibold">{message}</p>
              <p className="text-white/60 text-sm mt-2">
                Перенаправляем на главную страницу...
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6">
              <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-400 font-semibold">{message}</p>
              <button 
                onClick={() => navigate('/')}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Вернуться на главную
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TikTokCallback; 