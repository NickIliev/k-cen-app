import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    inquiryType: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        inquiryType: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Rainbow Street', 'Sunshine City, SC 12345'],
      link: 'https://maps.google.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['Main: (555) 123-KIDS', 'Emergency: (555) 123-9999'],
      link: 'tel:+15551234543'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@happykidscenter.com', 'director@happykidscenter.com'],
      link: 'mailto:info@happykidscenter.com'
    },
    {
      icon: '🕐',
      title: 'Hours',
      details: ['Monday - Friday: 10:00 AM - 10:00 PM', 'Saturday - Sunday: 9:00 AM - 11:00 PM'],
      link: null
    }
  ]

  const staff = [
    {
      name: 'Sarah Thompson',
      title: 'Center Manager',
      email: 'sarah@happykidscenter.com',
      bio: 'Event coordination specialist, 10+ years in family entertainment'
    },
    {
      name: 'Maria Rodriguez',
      title: 'Party Coordinator',
      email: 'maria@happykidscenter.com',
      bio: 'Birthday party expert, specializes in creating magical celebrations'
    },
    {
      name: 'James Wilson',
      title: 'Facilities Supervisor',
      email: 'james@happykidscenter.com',
      bio: 'Safety and maintenance specialist, ensures clean and secure spaces'
    },
    {
      name: 'Lisa Chen',
      title: 'Customer Experience',
      email: 'lisa@happykidscenter.com',
      bio: 'Helps families find the perfect booking option for their needs'
    }
  ]

  const faqData = [
    {
      id: 1,
      question: t('contact.faq.q1.question'),
      answer: t('contact.faq.q1.answer')
    },
    {
      id: 2,
      question: t('contact.faq.q2.question'),
      answer: t('contact.faq.q2.answer')
    },
    {
      id: 3,
      question: t('contact.faq.q3.question'),
      answer: t('contact.faq.q3.answer')
    },
    {
      id: 4,
      question: t('contact.faq.q4.question'),
      answer: t('contact.faq.q4.answer')
    },
    {
      id: 5,
      question: "Do you provide food and drinks?",
      answer: "Our refreshment bar offers snacks and beverages for adults. You're welcome to bring your own food for parties, or we can coordinate with local catering services."
    },
    {
      id: 6,
      question: "Can I work remotely while my child plays?",
      answer: "Absolutely! Our adult recreation room has high-speed WiFi, quiet zones, and comfortable seating - perfect for remote work while kids play safely nearby."
    },
    {
      id: 7,
      question: "What's included in birthday party packages?",
      answer: "Venue access, basic decorations setup, and staff assistance. Additional services like catering coordination and extended decorations are available for extra fees."
    }
  ]

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)', color: 'white', marginTop: '0'}}>
        <div className="container" style={{textAlign: 'center', padding: '4rem 2rem'}}>
          <h1 className="section-title" style={{color: 'white', fontSize: '3rem'}}>
            📞 {t('contact.title')}
          </h1>
          <p className="section-subtitle" style={{color: 'white', fontSize: '1.3rem'}}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information - Compact Design */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">📍 {t('contact.info.title', 'Quick Contact Information')}</h2>
          <p className="section-subtitle" style={{marginBottom: '2.5rem'}}>
            {t('contact.info.subtitle', 'Get in touch with us through any of these convenient methods')}
          </p>
          
          {/* Elegant Contact Cards */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  minWidth: '260px',
                  flex: '1',
                  maxWidth: '320px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  cursor: info.link ? 'pointer' : 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
                onClick={() => info.link && window.open(info.link, '_blank')}
              >
                {/* Subtle gradient accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${
                    index % 3 === 0 ? '#ff6b6b, #4ecdc4' : 
                    index % 3 === 1 ? '#4ecdc4, #667eea' : 
                    '#667eea, #ff6b6b'
                  })`,
                  borderRadius: '16px 16px 0 0'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.2rem'
                }}>
                  <div style={{
                    fontSize: '2.2rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}>
                    {info.icon}
                  </div>
                  <h3 style={{
                    margin: '0',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#333'
                  }}>
                    {info.title}
                  </h3>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} style={{
                      fontSize: '0.95rem',
                      color: info.link ? '#4ecdc4' : '#666',
                      fontWeight: info.link ? '600' : '500',
                      lineHeight: '1.5',
                      padding: '0.2rem 0'
                    }}>
                      {detail}
                    </div>
                  ))}
                </div>
                
                {info.link && (
                  <div style={{
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    color: '#999',
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>Click to {info.title.toLowerCase() === 'address' ? 'view map' : 
                             info.title.toLowerCase() === 'phone' ? 'call now' : 
                             'send email'}</span>
                    <span style={{ color: '#4ecdc4' }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(400px, 2fr)',
            gap: '3rem',
            alignItems: 'start',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Form Info Panel */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              position: 'sticky',
              top: '2rem'
            }}>
              <h2 style={{
                color: 'white',
                fontSize: '1.8rem',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>
                💬 {t('contact.form.title')}
              </h2>
              
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                opacity: '0.9'
              }}>
                Ready to create amazing memories? Fill out the form and we'll get back to you within 24 hours to discuss your perfect celebration.
              </p>
              
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  📞 Quick Contact
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  <a 
                    href="tel:+15551234543" 
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    📱 (555) 123-KIDS
                  </a>
                  <a 
                    href="mailto:info@happykidscenter.com" 
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 0'
                    }}
                  >
                    ✉️ info@happykidscenter.com
                  </a>
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⚡</div>
                <p style={{fontSize: '0.9rem', margin: '0'}}>
                  <strong>Fast Response Guarantee</strong><br/>
                  We respond to all inquiries within 24 hours
                </p>
              </div>
            </div>
            
            {/* Form Panel */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef'
            }}>
              {isSubmitted ? (
                <div style={{textAlign: 'center', padding: '3rem 1rem'}}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    ✅
                  </div>
                  <h3 style={{
                    color: '#4ecdc4',
                    marginBottom: '1rem',
                    fontSize: '1.8rem',
                    fontWeight: 'bold'
                  }}>
                    {t('contact.form.success')}
                  </h3>
                  <p style={{color: '#666', fontSize: '1.1rem'}}>
                    Thank you for reaching out! We'll contact you within 24 hours to discuss your celebration plans.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Two-column layout for form fields */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div className="form-group">
                      <label htmlFor="name" style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.namePlaceholder')}
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: '2px solid #e9ecef',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.emailPlaceholder')}
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: '2px solid #e9ecef',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div className="form-group">
                      <label htmlFor="phone" style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}>
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: '2px solid #e9ecef',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="childAge" style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}>
                        Child's Age
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem',
                          border: '2px solid #e9ecef',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      >
                        <option value="">Select age range</option>
                        <option value="infant">Infant (6-12 months)</option>
                        <option value="toddler">Toddler (1-2 years)</option>
                        <option value="preschool">Preschool (3-4 years)</option>
                        <option value="school-age">School-age (5-12 years)</option>
                        <option value="multiple">Multiple children</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{marginBottom: '1.5rem'}}>
                    <label htmlFor="inquiryType" style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.5rem',
                      display: 'block'
                    }}>
                      Type of Inquiry *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="enrollment">Enrollment Information</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="birthday">Birthday Party Booking</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="programs">Program Details</option>
                      <option value="general">General Questions</option>
                      <option value="complaint">Concern or Complaint</option>
                    </select>
                  </div>

                  <div className="form-group" style={{marginBottom: '2rem'}}>
                    <label htmlFor="message" style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.5rem',
                      display: 'block'
                    }}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4ecdc4'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
                      color: 'white',
                      padding: '1rem 2rem',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
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
                    <span>📤</span>
                    {t('contact.form.send')}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Mobile responsiveness */}
          <style jsx>{`
            @media (max-width: 768px) {
              .container > div:first-child {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
              }
              
              .container > div:first-child > div:first-child {
                position: static !important;
                order: 2;
              }
              
              form > div:first-child,
              form > div:nth-child(2) {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Staff Directory - Compact Team Cards */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">👥 {t('contact.staff.title', 'Meet Our Leadership Team')}</h2>
          <p className="section-subtitle" style={{marginBottom: '2.5rem'}}>
            {t('contact.staff.subtitle', 'Our experienced staff is here to answer your questions and support your family\'s needs.')}
          </p>
          
          {/* Elegant Staff Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {staff.map((member, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-6px)'
                  e.target.style.boxShadow = '0 8px 35px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                {/* Subtle gradient accent at top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${
                    index % 4 === 0 ? '#ff6b6b, #4ecdc4' : 
                    index % 4 === 1 ? '#4ecdc4, #667eea' : 
                    index % 4 === 2 ? '#667eea, #ff6b6b' :
                    '#ff6b6b, #667eea'
                  })`,
                  borderRadius: '20px 20px 0 0'
                }}></div>
                
                {/* Staff Avatar Circle */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${
                    index % 4 === 0 ? '#ff6b6b, #4ecdc4' : 
                    index % 4 === 1 ? '#4ecdc4, #667eea' : 
                    index % 4 === 2 ? '#667eea, #ff6b6b' :
                    '#ff6b6b, #667eea'
                  })`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  color: 'white',
                  marginBottom: '1.5rem',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <h3 style={{
                    margin: '0 0 0.6rem 0',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#333',
                    lineHeight: '1.3'
                  }}>
                    {member.name}
                  </h3>
                  
                  <p style={{
                    color: `${
                      index % 4 === 0 ? '#ff6b6b' : 
                      index % 4 === 1 ? '#4ecdc4' : 
                      index % 4 === 2 ? '#667eea' :
                      '#ff6b6b'
                    }`,
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    margin: '0 0 1rem 0'
                  }}>
                    {member.title}
                  </p>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0 0 1.5rem 0'
                  }}>
                    {member.bio}
                  </p>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: '#4ecdc4',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      padding: '0.8rem 1.5rem',
                      background: 'rgba(78,205,196,0.08)',
                      borderRadius: '25px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(78,205,196,0.15)'
                      e.target.style.transform = 'translateY(-1px)'
                      e.target.style.boxShadow = '0 4px 12px rgba(78,205,196,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(78,205,196,0.08)'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    <span>✉️</span>
                    <span>{t('contact.staff.contactButton', 'Contact')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action for Staff Directory */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2.5rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle gradient accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #667eea)',
              borderRadius: '20px 20px 0 0'
            }}></div>
            
            <h3 style={{
              color: '#333',
              fontSize: '1.4rem',
              margin: '0 0 1rem 0',
              fontWeight: '700'
            }}>
              🤝 {t('contact.staff.cta.title', 'Need to Speak with Someone Specific?')}
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              margin: '0 0 2rem 0',
              lineHeight: '1.6',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {t('contact.staff.cta.description', 'Our team members are specialists in different areas. Feel free to reach out directly to the person who can best help with your specific needs.')}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <a 
                href="tel:+15551234543"
                style={{
                  background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(78,205,196,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(78,205,196,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(78,205,196,0.3)'
                }}
              >
                📞 {t('contact.staff.cta.callButton', 'Call Main Line')}
              </a>
              <a 
                href="mailto:info@happykidscenter.com"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(102,126,234,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(102,126,234,0.3)'
                }}
              >
                ✉️ {t('contact.staff.cta.emailButton', 'General Email')}
              </a>
            </div>
          </div>
          
          {/* Mobile responsive styles for Contact Info and Staff Directory */}
          <style jsx>{`
            @media (max-width: 768px) {
              /* Contact Information responsive adjustments */
              .container > div[style*="flex"] {
                flex-direction: column !important;
                align-items: stretch !important;
                gap: 1.2rem !important;
              }
              
              .container > div[style*="flex"] > div {
                min-width: auto !important;
                max-width: none !important;
                flex: none !important;
                padding: 1.5rem !important;
              }
              
              /* Staff Directory responsive adjustments */
              .container > div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
              
              /* Staff card adjustments on mobile */
              div[style*="padding: '2.5rem'"] {
                padding: 1.8rem !important;
              }
              
              /* Call to action buttons stack on mobile */
              div[style*="flexWrap: 'wrap'"] {
                flex-direction: column !important;
                align-items: center !important;
                gap: 0.8rem !important;
              }
              
              div[style*="flexWrap: 'wrap'"] > a {
                width: 100% !important;
                max-width: 300px !important;
                text-align: center !important;
                justify-content: center !important;
              }
            }
            
            @media (max-width: 480px) {
              /* Extra small screens - further optimizations */
              .section-title {
                font-size: 1.8rem !important;
              }
              
              .section-subtitle {
                font-size: 1rem !important;
              }
              
              /* Contact cards more compact on very small screens */
              div[style*="minWidth: '260px'"] {
                min-width: auto !important;
                padding: 1.2rem !important;
              }
              
              /* Staff avatars smaller on mobile */
              div[style*="width: '70px'"] {
                width: 60px !important;
                height: 60px !important;
                font-size: 1.6rem !important;
              }
              
              /* Smaller font sizes on mobile */
              h3[style*="fontSize: '1.4rem'"] {
                font-size: 1.2rem !important;
              }
              
              p[style*="fontSize: '1.1rem'"] {
                font-size: 1rem !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">{t('contact.faq.title')}</h2>
          <p className="section-subtitle" style={{marginBottom: '3rem'}}>
            Find answers to commonly asked questions about our services and facilities.
          </p>
          
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: openFAQ === faq.id ? '2px solid #4ecdc4' : '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f8f9fa'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  <span style={{paddingRight: '1rem'}}>{faq.question}</span>
                  <span 
                    style={{
                      fontSize: '1.5rem',
                      color: '#4ecdc4',
                      transform: openFAQ === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  >
                    +
                  </span>
                </button>
                
                <div 
                  style={{
                    maxHeight: openFAQ === faq.id ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  <div 
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#666',
                      lineHeight: '1.6',
                      fontSize: '1rem',
                      borderTop: '1px solid #eee'
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '1rem'}}>
              Still have questions? We're here to help!
            </p>
            <button 
              style={{
                background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(255,107,107,0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)'
              }}
              onClick={() => {
                document.querySelector('#inquiryType').focus()
                window.scrollTo({
                  top: document.querySelector('form').offsetTop - 100,
                  behavior: 'smooth'
                })
              }}
            >
              📞 Contact Us Directly
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section" style={{backgroundColor: '#ff6b6b', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="section-title" style={{color: 'white'}}>Emergency Contact</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
            If you have an emergency during non-business hours:
          </p>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            📞 (555) 123-9999
          </p>
          <p>
            This number is monitored 24/7 for enrolled families only. 
            For non-emergencies, please use our regular contact methods above.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
