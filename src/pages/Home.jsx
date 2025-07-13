import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>{t('home.hero.title')}</h1>
          <h2 className="hero-subtitle">{t('home.hero.subtitle')}</h2>
          <p>{t('home.hero.description')}</p>
          <Link to="/reservations" className="cta-button">
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('home.about.title')}</h2>
          <p className="section-description">{t('home.about.description')}</p>
          <div className="card-grid">
            <div className="card">
              <h3>🎮 {t('home.about.kidsRoom.title')}</h3>
              <p>{t('home.about.kidsRoom.description')}</p>
            </div>
            <div className="card">
              <h3>🎯 {t('home.about.adultRoom.title')}</h3>
              <p>{t('home.about.adultRoom.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('home.features.title')}</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>{t('home.features.safety.title')}</h3>
              <p>{t('home.features.safety.description')}</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⏰</div>
              <h3>{t('home.features.flexible.title')}</h3>
              <p>{t('home.features.flexible.description')}</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>{t('home.features.affordable.title')}</h3>
              <p>{t('home.features.affordable.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('home.testimonials.title')}</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"{t('home.testimonials.testimonial1.text')}"</p>
              <div className="testimonial-author">- {t('home.testimonials.testimonial1.author')}</div>
            </div>
            <div className="testimonial">
              <p>"{t('home.testimonials.testimonial2.text')}"</p>
              <div className="testimonial-author">- {t('home.testimonials.testimonial2.author')}</div>
            </div>
            <div className="testimonial">
              <p>"{t('home.testimonials.testimonial3.text')}"</p>
              <div className="testimonial-author">- {t('home.testimonials.testimonial3.author')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta">
        <div className="container">
          <h2>{t('home.hero.cta')}</h2>
          <p>{t('home.hero.description')}</p>
          <div className="cta-buttons">
            <Link to="/reservations" className="cta-button">
              {t('nav.reservations')}
            </Link>
            <Link to="/pricing" className="cta-button cta-button--secondary">
              {t('nav.pricing')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
