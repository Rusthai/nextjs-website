"use client"
import React from 'react'
import { languages, getLanguageByCode, defaultLanguage, Language } from '@/utils/i18n';

const LanguageContext = React.createContext({
    language: defaultLanguage,
    setLanguage: (lang: Language) => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = React.useState(defaultLanguage);
    React.useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        const lang = getLanguageByCode(storedLanguage || navigator.language.split('-')[0]);
        if (storedLanguage && languages.some(lang => lang.code === storedLanguage))
            setLanguage(lang);
    }, []);
    React.useEffect(() => {
        localStorage.setItem('language', language.code);
        document.documentElement.lang = language.code;
    }, [language]);
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}