import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { sr } from "./sr";

const resources = {
  en,
  sr,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sr",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
