import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const { t } = useLanguage()

  // Hero slider images
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      description: t('home.hero.description')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: t('home.hero.slides.slide2.title'),
      subtitle: t('home.hero.slides.slide2.subtitle'),
      description: t('home.hero.slides.slide2.description')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: t('home.hero.slides.slide3.title'),
      subtitle: t('home.hero.slides.slide3.subtitle'),
      description: t('home.hero.slides.slide3.description')
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: t('home.hero.slides.slide4.title'),
      subtitle: t('home.hero.slides.slide4.subtitle'),
      description: t('home.hero.slides.slide4.description')
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="hero-slider" style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        marginTop: '0'
      }}>
        {/* Slider Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div className="hero-container" style={{
                maxWidth: '800px',
                padding: '2rem',
                zIndex: 2
              }}>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  color: 'white'
                }}>
                  {slide.title}
                </h1>
                <h2 className="hero-subtitle" style={{
                  fontSize: '1.8rem',
                  marginBottom: '1.5rem',
                  color: '#ffe66d',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  {slide.subtitle}
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '2.5rem',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  maxWidth: '600px',
                  margin: '0 auto 2.5rem'
                }}>
                  {slide.description}
                </p>
                <Link 
                  to="/reservations" 
                  className="cta-button"
                  style={{
                    display: 'inline-block',
                    background: '#ff6b6b',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#ff5252'
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#ff6b6b'
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)'
                  }}
                >
                  {t('home.hero.cta')}
                </Link>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)'
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)'
              e.target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ‹
          </button>
          
          <button 
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)'
              e.target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)'
              e.target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ›
          </button>

          {/* Slide Indicators */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
            zIndex: 10
          }}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  background: currentSlide === index ? 'white' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.8rem',
            zIndex: 10
          }}>
            🔄 Auto-advancing • {currentSlide + 1}/{heroSlides.length}
          </div>
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
      <section className="section section-cta" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4ecdc4 100%)',
        color: 'white',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 2, textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🎉</div>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              {t('home.cta.title')}
            </h2>
            <p style={{
              fontSize: '1.4rem',
              marginBottom: '3rem',
              opacity: 0.95,
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 3rem'
            }}>
              {t('home.cta.description')}
            </p>
            <div className="cta-buttons" style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/reservations" 
                className="cta-button"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  boxShadow: '0 8px 25px rgba(255,107,107,0.4)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'center',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 12px 35px rgba(255,107,107,0.6)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 8px 25px rgba(255,107,107,0.4)'
                }}
              >
                🎊 {t('nav.reservations')}
              </Link>
              <Link 
                to="/pricing" 
                className="cta-button cta-button--secondary"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  border: '3px solid white',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textAlign: 'center',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = '#667eea'
                  e.target.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'white'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                💰 {t('nav.pricing')}
              </Link>
            </div>
            <div style={{
              marginTop: '2.5rem',
              fontSize: '1rem',
              opacity: 0.8
            }}>
              <span style={{marginRight: '2rem'}}>📞 {t('home.cta.phone')}</span>
              <span>📧 {t('home.cta.email')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
