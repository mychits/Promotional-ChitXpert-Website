import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        features: "Features",
        translate: "Translate",
        login: "Login"
      }
    },
    kn: {
      translation: {
        home: "ಮುಖಪುಟ",
        Features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
        translate: "ಭಾಷೆ",
        login: "ಲಾಗಿನ್",
        AboutUs : "ನಮ್ಮ ಬಗ್ಗೆ",
        Contact : "ಸಂಪರ್ಕಿಸಿ",
        MobileApps :"ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು",

      }
    }
  },
 lng: localStorage.getItem("lang") || "en",          // ✅ default English
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});



export default i18n;
