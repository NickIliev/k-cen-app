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
      duration: 'per hour',
      description: t('pricing.perPerson.description'),
      features: getFeatures('pricing.perPerson.features'),
      popular: false
    },
    {
      title: t('pricing.adultRoom.title'),
      price: '€3',
      duration: t('pricing.perPerson') + '/' + t('pricing.hours').slice(0, -1),
      description: t('pricing.adultRoom.description'),
      features: getFeatures('pricing.adultRoom.features'),
      popular: false
    }
  ]

  const additionalServices = [
    { service: 'Party Decorations Setup', price: '€50 per party' },
    { service: 'Birthday Cake Service', price: '€30 per cake' },
    { service: 'Party Favors Package', price: '€40 per party' },
    { service: 'Catering & Snacks Service', price: '€60 per party' },
    { service: 'Face Painting', price: '€80 per party' },
    { service: 'Entertainment Host', price: '€100 per party' },
    { service: 'Extended Hours (beyond 8 hours)', price: '€65 per hour' }
  ]

  const ageGroups = [
    {
      group: 'Kids Playroom (3-8 years)',
      ratio: '40m² dedicated space',
      focus: 'Safe play equipment, interactive games, birthday party setups'
    },
    {
      group: 'Adult Recreation Room',
      ratio: '40m² entertainment space',
      focus: 'PlayStation 5, board games, refreshment bar, remote work area'
    },
    {
      group: 'Combined Venue Capacity',
      ratio: 'Up to 40 guests total',
      focus: '20 kids + 20 adults maximum, perfect for family events'
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
              <h3 style={{color: '#ff6b6b', marginBottom: '1.5rem', textAlign: 'center'}}>🏠 Venue Rental - Both Rooms</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>Hourly Pricing (Tiered)</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>3 hours: <strong>€240 total (€80/hour)</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>4 hours: <strong>€300 total (€75/hour)</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>5 hours: <strong>€350 total (€70/hour)</strong></li>
                  <li style={{padding: '0.3rem 0'}}>6 hours: <strong>€380 total (€65/hour)</strong></li>
                </ul>
                <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
                  <strong>Includes:</strong> Both rooms (80m² total), up to 40 people (20 kids + 20 adults), maximum 8 hours rental
                </p>
              </div>
            </div>

            {/* Per Person Details */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#4ecdc4', marginBottom: '1.5rem', textAlign: 'center'}}>👨‍👩‍👧‍👦 Per Person Pricing</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>Standard Rates</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>1 Kid + 1 Parent: <strong>€6/hour</strong></li>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>Each additional person: <strong>+€3/hour</strong></li>
                </ul>
                <h4 style={{color: '#333', marginBottom: '0.5rem', marginTop: '1rem'}}>5+ Hours Discount</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>1 Kid + 1 Parent: <strong>€5/hour</strong></li>
                  <li style={{padding: '0.3rem 0'}}>Each additional person: <strong>+€2/hour</strong></li>
                </ul>
              </div>
            </div>

            {/* Adults Only Details */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#667eea', marginBottom: '1.5rem', textAlign: 'center'}}>👨‍💼 Adults Only Option</h3>
              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: '#333', marginBottom: '0.5rem'}}>Adult Recreation Room Only</h4>
                <ul style={{listStyle: 'none', padding: '0', fontSize: '0.95rem'}}>
                  <li style={{padding: '0.3rem 0', borderBottom: '1px solid #eee'}}>Standard: <strong>€3/hour per adult</strong></li>
                  <li style={{padding: '0.3rem 0'}}>5+ Hours: <strong>€2/hour per adult</strong></li>
                </ul>
                <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
                  <strong>Includes:</strong> PlayStation 5, board games, refreshment bar, WiFi. No kids room access.
                </p>
              </div>
            </div>

          </div>

          <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.8)', borderRadius: '15px'}}>
            <h3 style={{color: '#333', marginBottom: '1rem'}}>🕒 Operating Hours</h3>
            <p style={{margin: '0.5rem 0', color: '#666', fontSize: '1.1rem'}}>
              <strong>Daily:</strong> 9:00 AM - 10:00 PM
            </p>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
              Last booking must end by 10:00 PM. All reservations calculated automatically to ensure compliance.
            </p>
            <Link to="/reservations" className="btn" style={{background: '#ff6b6b', marginTop: '1.5rem'}}>
              Book Your Event Now
            </Link>
          </div>
        </div>
      </section>

      {/* Age Groups & Ratios */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Our Spaces & Capacity</h2>
          <p className="section-subtitle">
            Two dedicated 40m² rooms designed for different age groups, with modern amenities and fast WiFi throughout.
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
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">
            Enhance your child's experience with our optional services and special programs.
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
          <h2 className="section-title" style={{color: 'white'}}>Booking Information</h2>
          <div className="card-grid">
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>� Advance Booking</h3>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ffe66d'}}>Recommended</p>
              <p>Book in advance to guarantee availability, especially for weekends and holiday periods.</p>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>💳 Payment Options</h3>
              <ul style={{textAlign: 'left'}}>
                <li>Cash payments accepted</li>
                <li>Card payments (Visa, Mastercard)</li>
                <li>Bank transfers for venue rentals</li>
                <li>Deposit required for bookings</li>
              </ul>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>🎯 Group Discounts</h3>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ffe66d'}}>10% off for 5+ regular families</p>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ffe66d'}}>15% off for 10+ bookings/month</p>
              <p>Regular visitor discounts apply automatically to your visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Financial Assistance</h2>
          <div className="form-container">
            <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
              We believe every child deserves quality care. We offer various assistance programs to help make our services accessible to all families.
            </p>
            <div className="card-grid">
              <div className="card">
                <h3>🏛️ State Assistance Programs</h3>
                <p>We accept state childcare vouchers and subsidies. Contact us to learn about eligibility and application processes.</p>
              </div>
              <div className="card">
                <h3>💼 Employer Partnerships</h3>
                <p>Many local employers offer childcare benefits. We work with several companies to provide discounted rates for employees.</p>
              </div>
              <div className="card">
                <h3>📅 Flexible Payment Plans</h3>
                <p>Need a custom payment arrangement? We're happy to work with families to create payment plans that fit your budget.</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link to="/contact" className="btn" style={{maxWidth: '300px', margin: '0 auto', display: 'block'}}>
                Discuss Payment Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
