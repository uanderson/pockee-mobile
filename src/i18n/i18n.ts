import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation }
    },
    fallbackLng: 'en',
    debug: import.meta.env.DEV
  });

export default i18n;
