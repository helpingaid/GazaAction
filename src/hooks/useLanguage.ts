import { useState, useEffect } from 'react';
import { translations, Translations } from '../types/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>('en');
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      const supportedLanguages = Object.keys(translations);
      const detectedLang = supportedLanguages.includes(browserLang) ? browserLang : 'en';
      setLanguage(detectedLang);
      setT(translations[detectedLang]);
      document.documentElement.lang = detectedLang;
    };

    detectLanguage();
  }, []);

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      document.documentElement.lang = lang;
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  return { language, t, changeLanguage };
};
