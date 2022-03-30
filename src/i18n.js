import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { i18nextPlugin } from 'translation-check';

const backendOptions = {
  // loadPath: '/translations/{{lng}}/{{ns}}.json',
  loadPath: 'https://raw.githubusercontent.com/cvallin/payplug-http-backend/master/public/translations/{{lng}}/{{ns}}.json',
}

i18n
 .use(Backend)
   // pass the i18n instance to react-i18next.
 .use(initReactI18next)
 .use(i18nextPlugin)
 .init({
  translationStats: {
    queryStringParam: 'showtranslations',
    sourceLng: 'fr',
    targetLngs: ['es', 'it', 'en', 'arab'],
    preserveEmptyStrings: false
    },
  debug: true,
  fallbackLng: 'fr',
  saveMissing: false,
  backend: backendOptions,
  react: {
    bindI18n: 'languageChanged editorSaved'
  },
});
 

export default i18n;
