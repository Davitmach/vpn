'use client';
import { useEffect } from "react";
export const Check = ()=> {
      useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Пример использования Telegram WebApp API
      window.Telegram.WebApp.ready();


      // Например, изменим текст на кнопке
      window.Telegram.WebApp.MainButton.setText('Hello from WebApp!');
    } else {
      // Если WebApp не доступен, перенаправляем на обычный бот
      const botUrl = 'tg://resolve?domain=your_bot_username'; // Замените на имя вашего бота
      window.location.href = botUrl;

      // Альтернативно, можно отправить пользователя в веб-версию
      setTimeout(() => {
        window.location.href = 'https://t.me/your_bot_username'; // Веб-ссылка на бота
      }, 1000);
    }
  }, []);
    return(
        <>
        </>
    )
}