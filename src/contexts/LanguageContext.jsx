import { createContext, useState, useContext, useEffect } from 'react';
import { languages } from '../translations/translations';

// Languages that use RTL (Right-to-Left) text direction
const rtlLanguages = ['ar'];

// Get user's browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return languages[browserLang] ? browserLang : 'en';
};

// Get language from localStorage or browser settings
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  return savedLang && languages[savedLang] ? savedLang : getBrowserLanguage();
};


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage());
  const [isRTL, setIsRTL] = useState(rtlLanguages.includes(getInitialLanguage()));

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsRTL(rtlLanguages.includes(lang));
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, translations: languages[currentLanguage], isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};