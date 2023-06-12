import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import az from './az.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    az: az,
    en: en,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;