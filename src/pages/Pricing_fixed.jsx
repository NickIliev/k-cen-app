import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Pricing = () => {
  const { t } = useLanguage()

  // Helper function to safely get features array
  const getFeatures = (key) => {
    const features = t(key)
    return Array.isArray(features) ? features : []
  }
  
  const pricingPlans = [
    {
      title: t('pricing.kidsRoom.title'),
      price: '€240-380',
      duration: '3-6 ' + t('pricing.hours'),
      description: t('pricing.kidsRoom.description'),
      features: getFeatures('pricing.kidsRoom.features'),
      popular: true
    },
    {
      title: t('pricing.perPerson.title'),
      price: '€6',
      duration: t('pricing.perPersonHour'),
      description: t('pricing.perPerson.description'),
      features: getFeatures('pricing.perPerson.features'),
      popular: false
    },
    {
      title: t('pricing.adultRoom.title'),
      price: '€3',
      duration: t('pricing.perPersonHour'),
      description: t('pricing.adultRoom.description'),
      features: getFeatures('pricing.adultRoom.features'),
      popular: false
    }
  ]

  const additionalServices = [
    { service: t('pricing.additionalServices.decorations'), price: '€50 ' + t('pricing.additionalServices.perParty') },
    { service: t('pricing.additionalServices.cake'), price: '€30 ' + t('pricing.additionalServices.perCake') },
    { service: t('pricing.additionalServices.favors'), price: '€40 ' + t('pricing.additionalServices.perParty') },
    { service: t('pricing.additionalServices.catering'), price: '€60 ' + t('pricing.additionalServices.perParty') },
    { service: t('pricing.additionalServices.facePainting'), price: '€80 ' + t('pricing.additionalServices.perParty') },
    { service: t('pricing.additionalServices.entertainment'), price: '€100 ' + t('pricing.additionalServices.perParty') },
    { service: t('pricing.additionalServices.extendedHours'), price: '€65 ' + t('pricing.additionalServices.perHour') }
  ]

  const ageGroups = [
    {
      group: t('pricing.spaces.kidsPlayroom'),
      ratio: t('pricing.spaces.kidsSpace'),
      focus: t('pricing.spaces.kidsFocus')
    },
    {
      group: t('pricing.spaces.adultRoom'),
      ratio: t('pricing.spaces.adultSpace'),
      focus: t('pricing.spaces.adultFocus')
    },
    {
      group: t('pricing.spaces.combinedVenue'),
      ratio: t('pricing.spaces.combinedCapacity'),
      focus: t('pricing.spaces.combinedFocus')
    }
  ]

  // Helper function to safely get payment list
  const getPaymentList = () => {
    const paymentList = t('pricing.bookingInfo.paymentList')
    return Array.isArray(paymentList) ? paymentList : []
  }

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

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.subtitle')}
          </p>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && (
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
                <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{plan.title}</h3>
                <p style={{fontSize: '1rem', marginBottom: '1rem', opacity: '0.8'}}>{plan.description}</p>
                <div className="price">
                  {plan.price}
                  <span style={{fontSize: '0.4em', display: 'block'}}>{plan.duration}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Link 
                  to="/reservations" 
                  className="btn" 
                  style={{
                    background: plan.popular ? '#ffe66d' : '#4ecdc4',
                    color: plan.popular ? '#333' : 'white',
                    marginTop: '1rem'
                  }}
                >
                  {t('pricing.bookNow')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="section" style={{backgroundColor: '#ffe66d'}}>
        <div className="container">
          <h2 className="section-title" style={{color: '#333'}}>💰 {t('pricing.title')}</h2>
          <p className="section-subtitle" style={{color: '#333'}}>
            {t('pricing.subtitle')}
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
            
            {/* Venue Rental Details */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#ff6b6b', marginBottom: '1.5rem', textAlign: 'center'}}>🏠 {t('pricing.venueRental.title')}</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>{t('pricing.venueRental.hourlyPricing')}</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>3 {t('pricing.hours')}: <strong>€240 total (€80/{t('pricing.hours').slice(0, -1)})</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>4 {t('pricing.hours')}: <strong>€300 total (€75/{t('pricing.hours').slice(0, -1)})</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>5 {t('pricing.hours')}: <strong>€350 total (€70/{t('pricing.hours').slice(0, -1)})</strong></li>
                  <li style={{padding: '0.3rem 0'}}>6 {t('pricing.hours')}: <strong>€380 total (€65/{t('pricing.hours').slice(0, -1)})</strong></li>
                </ul>
                <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
                  <strong>{t('pricing.venueRental.includes')}</strong> {t('pricing.venueRental.includesDesc')}
                </p>
              </div>
            </div>

            {/* Per Person Details */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#4ecdc4', marginBottom: '1.5rem', textAlign: 'center'}}>👨‍👩‍👧‍👦 {t('pricing.perPersonPricing.title')}</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>{t('pricing.perPersonPricing.standardRates')}</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>{t('pricing.perPersonPricing.oneKidParent')} <strong>€6/{t('pricing.hours').slice(0, -1)}</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>{t('pricing.perPersonPricing.additionalPerson')} <strong>+€3/{t('pricing.hours').slice(0, -1)}</strong></li>
                </ul>
                <h4 style={{color: '#333', marginBottom: '0.5rem', marginTop: '1rem'}}>{t('pricing.perPersonPricing.discountTitle')}</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>{t('pricing.perPersonPricing.oneKidParent')} <strong>€5/{t('pricing.hours').slice(0, -1)}</strong></li>
                  <li style={{padding: '0.3rem 0'}}>{t('pricing.perPersonPricing.additionalPerson')} <strong>+€2/{t('pricing.hours').slice(0, -1)}</strong></li>
                </ul>
              </div>
            </div>

            {/* Adults Only Details */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#667eea', marginBottom: '1.5rem', textAlign: 'center'}}>👨‍💼 {t('pricing.adultsOnlyPricing.title')}</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>{t('pricing.adultsOnlyPricing.roomOnly')}</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>{t('pricing.adultsOnlyPricing.standard')} <strong>€3/{t('pricing.hours').slice(0, -1)} {t('pricing.perPerson')}</strong></li>
                  <li style={{padding: '0.3rem 0'}}>{t('pricing.adultsOnlyPricing.discountHours')} <strong>€2/{t('pricing.hours').slice(0, -1)} {t('pricing.perPerson')}</strong></li>
                </ul>
                <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
                  <strong>{t('pricing.venueRental.includes')}</strong> {t('pricing.adultsOnlyPricing.includesDesc')}
                </p>
              </div>
            </div>

          </div>

          <div style={{textAlign: 'center', marginTop: '3rem', padding: '2.5rem', background: 'rgba(255,255,255,0.9)', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)'}}>
            <h3 style={{color: '#333', marginBottom: '1.5rem', fontSize: '1.8rem'}}>🕒 {t('pricing.operatingHours.title')}</h3>
            <div style={{marginBottom: '2rem'}}>
              <p style={{margin: '0.5rem 0', color: '#333', fontSize: '1.2rem', fontWeight: 'bold'}}>
                <strong>{t('pricing.operatingHours.daily')}</strong> {t('pricing.operatingHours.timeRange')}
              </p>
              <div style={{
                marginTop: '1.5rem', 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px',
                border: '1px solid #dee2e6',
                fontSize: '0.95rem', 
                color: '#666',
                lineHeight: '1.5'
              }}>
                <p style={{margin: '0 0 0.5rem 0'}}>
                  ⚠️ {t('pricing.operatingHours.lastBooking')}
                </p>
                <p style={{margin: '0', fontSize: '0.9rem'}}>
                  {t('pricing.operatingHours.compliance')}
                </p>
              </div>
            </div>
            <Link 
              to="/reservations" 
              className="btn" 
              style={{
                background: '#ff6b6b', 
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                textDecoration: 'none',
                borderRadius: '25px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(255,107,107,0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)'
              }}
            >
              🎉 {t('pricing.bookNow')}
            </Link>
          </div>
        </div>
      </section>

      {/* Age Groups & Ratios */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">{t('pricing.spaces.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.spaces.subtitle')}
          </p>
          <div className="card-grid">
            {ageGroups.map((group, index) => (
              <div key={index} className="card">
                <h3>{group.group}</h3>
                <p style={{color: '#ff6b6b', fontWeight: 'bold', margin: '1rem 0'}}>{group.ratio}</p>
                <p>{group.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pricing.additionalServices.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.additionalServices.subtitle')}
          </p>
          <div className="form-container" style={{maxWidth: '800px'}}>
            <div style={{display: 'grid', gap: '1rem'}}>
              {additionalServices.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e1e5e9'
                }}>
                  <span style={{fontWeight: '500'}}>{item.service}</span>
                  <span style={{color: '#ff6b6b', fontWeight: 'bold'}}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="section" style={{backgroundColor: '#4ecdc4', color: 'white'}}>
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>{t('pricing.bookingInfo.title')}</h2>
          <div className="card-grid">
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>📅 {t('pricing.bookingInfo.advanceBooking')}</h3>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ffe66d'}}>{t('pricing.bookingInfo.recommended')}</p>
              <p>{t('pricing.bookingInfo.advanceDesc')}</p>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>💳 {t('pricing.bookingInfo.paymentOptions')}</h3>
              <ul style={{textAlign: 'left'}}>
                {getPaymentList().map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>🎯 {t('pricing.bookingInfo.groupDiscounts')}</h3>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ffe66d'}}>{t('pricing.bookingInfo.discount5')}</p>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ffe66d'}}>{t('pricing.bookingInfo.discount10')}</p>
              <p>{t('pricing.bookingInfo.discountDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('pricing.financialAssistance.title')}</h2>
          <div className="form-container">
            <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
              {t('pricing.financialAssistance.subtitle')}
            </p>
            <div className="card-grid">
              <div className="card">
                <h3>🏛️ {t('pricing.financialAssistance.statePrograms')}</h3>
                <p>{t('pricing.financialAssistance.stateDesc')}</p>
              </div>
              <div className="card">
                <h3>💼 {t('pricing.financialAssistance.employerPartnerships')}</h3>
                <p>{t('pricing.financialAssistance.employerDesc')}</p>
              </div>
              <div className="card">
                <h3>📅 {t('pricing.financialAssistance.flexiblePayment')}</h3>
                <p>{t('pricing.financialAssistance.flexibleDesc')}</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link to="/contact" className="btn" style={{maxWidth: '300px', margin: '0 auto', display: 'block'}}>
                {t('pricing.financialAssistance.discussPayment')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
