import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          🌈 {t('home.hero.title')}
        </Link>
        <div className="nav-content">
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              >
                {t('nav.gallery')}
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
              >
                {t('nav.pricing')}
              </Link>
            </li>
            <li>
              <Link 
                to="/reservations" 
                className={`nav-link ${location.pathname === '/reservations' ? 'active' : ''}`}
              >
                {t('nav.reservations')}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
