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

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('contact.form.title')}</h2>
          <div className="card-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} style={{margin: '0.5rem 0'}}>
                    {info.link ? (
                      <a href={info.link} style={{color: '#4ecdc4', textDecoration: 'none'}}>
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <div className="form-container">
            {isSubmitted ? (
              <div style={{textAlign: 'center', padding: '2rem'}}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✅</div>
                <h3 style={{color: '#4ecdc4', marginBottom: '1rem'}}>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childAge">Child's Age</label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                  >
                    <option value="">Select age range</option>
                    <option value="infant">Infant (6-12 months)</option>
                    <option value="toddler">Toddler (1-2 years)</option>
                    <option value="preschool">Preschool (3-4 years)</option>
                    <option value="school-age">School-age (5-12 years)</option>
                    <option value="multiple">Multiple children</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Type of Inquiry *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
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

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please tell us more about your inquiry..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">
            Our experienced staff is here to answer your questions and support your family's needs.
          </p>
          <div className="card-grid">
            {staff.map((member, index) => (
              <div key={index} className="card">
                <h3>{member.name}</h3>
                <p style={{color: '#ff6b6b', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                  {member.title}
                </p>
                <p style={{marginBottom: '1rem'}}>{member.bio}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  style={{
                    color: '#4ecdc4',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  ✉️ {member.email}
                </a>
              </div>
            ))}
          </div>
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
