import React, { createContext, useState, useContext, ReactNode } from 'react';
import i18n from '../i18n';

export type LanguageContextType = {
  locale: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');

  const toggleLanguage = () => {
    const next = locale === 'en' ? 'ja' : 'en';
    i18n.locale = next;
    setLocale(next);
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
