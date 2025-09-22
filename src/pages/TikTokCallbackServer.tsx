import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const TikTokCallbackServer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('Обработка авторизации...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Получаем код из URL параметров (варианты: code или auth_code)
        const code = searchParams.get('code') || searchParams.get('auth_code');
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

        // Отправляем код на ваш сервер для обработки
        const response = await sendCodeToServer(code, state ?? undefined);
        
        if (response.success) {
          setStatus('success');
          setMessage('Авторизация успешно завершена!');
          
          // Сохраняем информацию о том, что авторизация прошла успешно
          localStorage.setItem('tiktok_oauth_success', 'true');
          localStorage.setItem('tiktok_oauth_timestamp', Date.now().toString());
          
          // Переходим на главную страницу через 3 секунды
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(`Ошибка при обработке авторизации: ${response.message}`);
        }

      } catch (error) {
        console.error('Error in TikTok callback:', error);
        setStatus('error');
        setMessage('Произошла ошибка при обработке авторизации');
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  // Функция для отправки кода на ваш сервер
  const sendCodeToServer = async (authCode: string, state?: string) => {
    try {
      // Правильный URL к PHP endpoint
      const SERVER_ENDPOINT = 'https://performanteaiagency.com/api/tiktok/oauth/exchange.php';
      
      const response = await fetch(SERVER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: authCode,
          state,
        }),
      });

      const data = await response.json();
      
      console.log('Server Response:', data);

      if (data.success) {
        return {
          success: true,
          access_token: data.access_token,
          advertiser_ids: data.advertiser_ids,
        };
      } else {
        return {
          success: false,
          message: data.message || 'Неизвестная ошибка',
        };
      }
    } catch (error) {
      console.error('Error sending code to server:', error);
      return {
        success: false,
        message: 'Ошибка сети при обращении к серверу',
      };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-black/50 border border-white/10 rounded-xl p-8">
          <h1 className="text-2xl font-bold mb-6">
            TikTok OAuth (Server)
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

export default TikTokCallbackServer; 