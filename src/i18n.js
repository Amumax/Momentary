import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем файлы перевода
import translationEN from './i18n/en.json';
import translationRU from './i18n/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Установите язык по умолчанию
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
