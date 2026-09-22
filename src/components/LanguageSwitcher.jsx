import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { SUPPORTED_LOCALES, LOCALE_META } from '../i18n/config';

/**
 * Minimalist segmented/dropdown language switcher.
 * - Desktop: compact pill dropdown showing the active locale's short label (EN / FR / عربي).
 * - Persists the choice via i18next-browser-languagedetector's localStorage cache
 *   (key: comcom_locale, configured in src/i18n/config.js) — no page reload needed.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const activeLocale = i18n.resolvedLanguage || 'en';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const changeLocale = (locale) => {
    i18n.changeLanguage(locale);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm"
      >
        <span className={activeLocale === 'ar' ? 'font-arabic' : ''}>
          {LOCALE_META[activeLocale]?.label ?? activeLocale.toUpperCase()}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full mt-2 end-0 min-w-[9rem] rounded-2xl bg-void/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden z-50 py-1"
        >
          {SUPPORTED_LOCALES.map((locale) => (
            <li key={locale} role="option" aria-selected={activeLocale === locale}>
              <button
                type="button"
                onClick={() => changeLocale(locale)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                  activeLocale === locale
                    ? 'text-white bg-white/[0.08]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                } ${locale === 'ar' ? 'font-arabic' : ''}`}
              >
                <span>{LOCALE_META[locale].name}</span>
                <span className="text-[11px] font-mono text-zinc-500">{LOCALE_META[locale].label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
