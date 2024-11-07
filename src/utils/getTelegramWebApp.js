// src/utils/getTelegramWebApp.js
export const getTelegramWebApp = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      return window.Telegram.WebApp;
    } else {
      // Имитация объекта для локальной разработки
      return {
        initData: '',
        initDataUnsafe: {},
        ready: () => {},
        // Добавьте другие методы или свойства, если необходимо
      };
    }
  };
  