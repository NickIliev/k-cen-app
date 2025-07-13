// contexts/LanguageContext.jsx - Translation context for managing language state

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or default to Bulgarian
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'bg'; // Default to Bulgarian
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  // Function to switch language
  const switchLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  // Function to get translated text by key path
  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let value = translations[currentLanguage];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to English if translation is missing
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation missing for key: ${keyPath} in language: ${currentLanguage}`);
            return keyPath; // Return the key path if translation is completely missing
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : keyPath;
  };

  // Function to get current language info
  const getCurrentLanguageInfo = () => {
    const languageInfo = {
      en: { code: 'en', name: 'English', flag: '🇺🇸' },
      bg: { code: 'bg', name: 'Български', flag: '🇧🇬' }
    };
    return languageInfo[currentLanguage] || languageInfo.bg;
  };

  // Function to get available languages
  const getAvailableLanguages = () => {
    return [
      { code: 'bg', name: 'Български', flag: '🇧🇬' },
      { code: 'en', name: 'English', flag: '🇺🇸' }
    ];
  };

  const contextValue = {
    currentLanguage,
    switchLanguage,
    t,
    getCurrentLanguageInfo,
    getAvailableLanguages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
