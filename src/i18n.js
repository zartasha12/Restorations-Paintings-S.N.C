import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  
  .use(Backend)
  
  .use(LanguageDetector)
  
  .use(initReactI18next)
  
  .init({
    fallbackLng: 'it',
    debug: true,

    interpolation: {
      escapeValue: false, 
    },
    backend: {
      // Define the paths to your JSON files for different languages
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Specify the namespaces and the corresponding JSON files
    ns: ['translation', 'aboutus', 'contactus'], // Namespaces
    defaultNS: 'translation', // Default namespace
    nsSeparator: false, // No namespace separator
    keySeparator: false, // No key separator
  

  });


export default i18n;