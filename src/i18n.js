import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

 const isProduction = false;

const backendOptions = {
  // loadPath: '/translations/{{lng}}/{{ns}}.json',
  loadPath: 'https://raw.githubusercontent.com/cvallin/payplug-locize/master/public/translations/{{lng}}/{{ns}}.json',
}

i18n
 .use(Backend)
   // pass the i18n instance to react-i18next.
 .use(initReactI18next)
 .init({
  debug: true,
  fallbackLng: 'fr',
  saveMissing: !isProduction,
  backend: backendOptions,
  react: {
    bindI18n: 'languageChanged editorSaved'
  }
});
 
 export default i18n;
