import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from './locales/en.json';
import translationPt from './locales/pt.json';

const resources = {
    en: {
        translation: translationEn
    },
    pt: {
        translation: translationPt
    }
}

i18n
    .use(initReactI18next)
    .init({
        interpolation: {escapeValue: false},
        resources,
        lng: navigator.language.split('-')[0],
        fallbackLng: 'en'
    })

export default i18n;