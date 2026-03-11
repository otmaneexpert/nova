import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import arTranslation from './locales/ar/translation.json';
import frTranslation from './locales/fr/translation.json';
import { i18nConfig } from './config';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    lng: localStorage.getItem("language") || "ar", // العربية افتراضية
    fallbackLng: 'ar',
    resources: {
      ar: {
        translation: arTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;