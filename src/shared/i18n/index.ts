import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { DEFAULT_LANGUAGE, ISO_CODES } from '../constants/i18n/constants';
import { en } from './copies/en';
import { fr } from './copies/fr';
import { de } from './copies/de';
import { sp } from './copies/sp';

const resources = {
  [ISO_CODES.EN]: {
    translation: en,
  },
  [ISO_CODES.FR]: {
    translation: fr,
  },
  [ISO_CODES.DE]: {
    translation: de,
  },
  [ISO_CODES.SP]: {
    translation: sp,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
