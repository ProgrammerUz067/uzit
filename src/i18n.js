import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from '../public/locals/en/translations.json'
import translationRU from '../public/locals/ru/translations.json'
import translationUZ from '../public/locals/uz/translations.json'

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'ru',
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n