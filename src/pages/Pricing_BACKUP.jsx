import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Pricing = () => {
  const { t } = useLanguage()

  // Simple, working pricing structure
  const pricingOptions = [
    {
      title: t('pricing.kidsRoom.title'),
      price: '€240-380',
      duration: '3-6 hours',
      description: t('pricing.kidsRoom.description'),
      popular: true
    },
    {
      title: t('pricing.adultRoom.title'),
      price: '€3',
      duration: 'per adult/hour',
      description: t('pricing.adultRoom.description'),
      popular: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', marginTop: '0'}}>
        <div className="container" style={{textAlign: 'center', padding: '4rem 2rem'}}>
          <h1 className="section-title" style={{color: 'white', fontSize: '3rem'}}>
            💰 {t('pricing.title')}
          </h1>
          <p className="section-subtitle" style={{color: 'white', fontSize: '1.3rem'}}>
            {t('pricing.subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <div className="pricing-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
            {pricingOptions.map((option, index) => (
              <div key={index} className="pricing-card" style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                border: option.popular ? '3px solid #ffe66d' : '1px solid #eee'
              }}>
                {option.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#ffe66d',
                    color: '#333',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {t('pricing.mostPopular')}
                  </div>
                )}
                <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333'}}>{option.title}</h3>
                <p style={{fontSize: '1rem', marginBottom: '1rem', opacity: '0.8'}}>{option.description}</p>
                <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#ff6b6b', marginBottom: '0.5rem'}}>
                  {option.price}
                </div>
                <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>
                  {option.duration}
                </div>
                <Link 
                  to="/reservations" 
                  className="btn" 
                  style={{
                    background: option.popular ? '#ffe66d' : '#4ecdc4',
                    color: option.popular ? '#333' : 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {t('pricing.bookNow')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#ff6b6b', marginBottom: '1rem'}}>🎮 {t('pricing.kidsRoom.title')}</h3>
              <ul style={{listStyle: 'none', padding: '0'}}>
                {t('pricing.kidsRoom.features').map((feature, index) => (
                  <li key={index} style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#4ecdc4', marginBottom: '1rem'}}>🎯 {t('pricing.adultRoom.title')}</h3>
              <ul style={{listStyle: 'none', padding: '0'}}>
                {t('pricing.adultRoom.features').map((feature, index) => (
                  <li key={index} style={{padding: '0.5rem 0', borderBottom: '1px solid #eee'}}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{color: 'white', marginBottom: '1rem'}}>{t('home.hero.cta')}</h2>
          <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>{t('pricing.subtitle')}</p>
          <Link to="/reservations" className="btn" style={{background: 'white', color: '#333', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
            {t('pricing.bookNow')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing
