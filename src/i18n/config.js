import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

export const SUPPORTED_LOCALES = ['en', 'fr', 'ar'];
export const RTL_LOCALES = ['ar'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_META = {
  en: { label: 'EN', name: 'English', dir: 'ltr' },
  fr: { label: 'FR', name: 'Français', dir: 'ltr' },
  ar: { label: 'عربي', name: 'العربية', dir: 'rtl' },
};

/** Applies <html lang>/<html dir> and the Arabic font-family switch for the given locale. */
export function applyDocumentDirection(locale) {
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
  document.documentElement.classList.toggle('font-arabic', locale === 'ar');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    interpolation: { escapeValue: false },
    detection: {
      // Checks localStorage first, then <html lang>, then browser language.
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'comcom_locale',
    },
  });

// Keep <html lang>/<html dir> in sync with i18next on init and on every language change.
applyDocumentDirection(i18n.resolvedLanguage || DEFAULT_LOCALE);
i18n.on('languageChanged', (locale) => {
  applyDocumentDirection(locale);
});

export default i18n;
