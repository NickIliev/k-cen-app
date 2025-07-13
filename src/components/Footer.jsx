import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/gallery">{t('nav.gallery')}</Link>
          <Link to="/pricing">{t('nav.pricing')}</Link>
          <Link to="/reservations">{t('nav.reservations')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>
        <p>&copy; 2025 {t('home.hero.title')}. {t('footer.rights')}</p>
        <p>📍 {t('footer.address')} | 📞 {t('footer.phone')} | ✉️ {t('footer.email')}</p>
      </div>
    </footer>
  )
}

export default Footer
