import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LANGUAGES } from "../constants/i18n/constants";

const resources = {
  en: {
    translation: {
      "Select Language": "What is your preferred language?"
    }
  },
  fr: {
    translation: {
      "Select Language": "Quelle est votre langue préférée?"
    }
  },
  de: {
    translation: {
      "Select Language": "Was ist Ihre bevorzugte Sprache?"
    }
  },
  sp: {
    translation: {
      "Select Language": "¿Cuál es su idioma preferido?"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LANGUAGES.EN,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;