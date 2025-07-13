// components/LanguageSwitcher.jsx - Language switcher component

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage, getCurrentLanguageInfo, getAvailableLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangInfo = getCurrentLanguageInfo();
  const availableLanguages = getAvailableLanguages();

  const handleLanguageChange = (langCode) => {
    switchLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('nav.language')}
        aria-expanded={isOpen}
      >
        <span className="language-switcher__flag">{currentLangInfo.flag}</span>
        <span className="language-switcher__text">{currentLangInfo.name}</span>
        <span className={`language-switcher__arrow ${isOpen ? 'language-switcher__arrow--open' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${
                currentLanguage === lang.code ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-switcher__option-flag">{lang.flag}</span>
              <span className="language-switcher__option-text">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
