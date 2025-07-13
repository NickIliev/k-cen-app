import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Reservations = () => {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Contact Information
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    
    // Event Information
    eventType: '',
    eventDate: '',
    startTime: '',
    duration: '3',
    space: '',
    
    // Booking Type
    bookingType: 'venue-rental',
    
    // Guest Count
    kidCount: '',
    adultCount: '',
    totalGuests: '',
    
    // Additional Services
    additionalServices: [],
    
    // Special Requirements
    specialRequests: '',
    additionalComments: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'additionalServices') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const calculatePrice = () => {
    const duration = parseInt(formData.duration)
    const kidCount = parseInt(formData.kidCount) || 0
    const adultCount = parseInt(formData.adultCount) || 0
    
    if (formData.bookingType === 'venue-rental') {
      // New tiered pricing for venue rental (both rooms)
      let basePrice = 0
      if (duration === 3) basePrice = 240
      else if (duration === 4) basePrice = 300
      else if (duration === 5) basePrice = 350
      else if (duration === 6) basePrice = 380
      else if (duration > 6) {
        // Beyond 6 hours, use €65/hour rate
        basePrice = 380 + (duration - 6) * 65
      }
      
      // Add service fees
      let serviceTotal = 0
      if (formData.additionalServices.includes('party-decorations')) serviceTotal += 50
      if (formData.additionalServices.includes('birthday-cake')) serviceTotal += 30
      if (formData.additionalServices.includes('party-favors')) serviceTotal += 40
      if (formData.additionalServices.includes('catering-snacks')) serviceTotal += 60
      if (formData.additionalServices.includes('face-painting')) serviceTotal += 80
      if (formData.additionalServices.includes('entertainment')) serviceTotal += 100
      
      return basePrice + serviceTotal
    } else if (formData.bookingType === 'per-person') {
      // Per-person pricing (1 kid + 1 parent base)
      const baseGuests = Math.min(kidCount, adultCount) // Count of kid+parent pairs
      const extraGuests = Math.max(0, (kidCount + adultCount) - (baseGuests * 2))
      
      let hourlyRate = duration >= 5 ? 5 : 6 // Discount for 5+ hours
      let extraRate = duration >= 5 ? 2 : 3 // Discount for 5+ hours
      
      return (baseGuests * hourlyRate * duration) + (extraGuests * extraRate * duration)
    } else if (formData.bookingType === 'adults-only') {
      // Adults only pricing
      let hourlyRate = duration >= 5 ? 2 : 3 // Discount for 5+ hours
      return adultCount * hourlyRate * duration
    }
    
    return 0
  }

  const validateEndTime = () => {
    if (!formData.startTime || !formData.duration) return true
    
    const startHour = parseInt(formData.startTime.split(':')[0])
    const endHour = startHour + parseInt(formData.duration)
    
    return endHour <= 22 // Must end by 10 PM (22:00)
  }

  const getEndTime = () => {
    if (!formData.startTime || !formData.duration) return ''
    
    const startHour = parseInt(formData.startTime.split(':')[0])
    const endHour = startHour + parseInt(formData.duration)
    
    return `${endHour}:00`
  }

  const steps = [
    { number: 1, title: t('reservations.steps.details'), description: t('reservations.form.contactName') },
    { number: 2, title: t('reservations.steps.guests'), description: t('reservations.form.eventType') },
    { number: 3, title: t('reservations.steps.preferences'), description: t('reservations.form.guestCount') },
    { number: 4, title: t('reservations.steps.review'), description: t('reservations.steps.confirmation') }
  ]

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Party booking submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div>
        <section className="section" style={{marginTop: '0', minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
          <div className="container">
            <div className="form-container" style={{textAlign: 'center', maxWidth: '600px'}}>
              <div style={{fontSize: '5rem', marginBottom: '2rem'}}>🎉</div>
              <h1 style={{color: '#4ecdc4', marginBottom: '1rem'}}>Booking Submitted!</h1>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
                Thank you for choosing Happy Kids Center for your party! We've received your booking request and will contact you within 24 hours to confirm availability and finalize your reservation.
              </p>
              
              {/* Booking Summary */}
              <div style={{backgroundColor: '#e8f5e8', padding: '2rem', borderRadius: '15px', marginBottom: '2rem'}}>
                <h3 style={{marginBottom: '1.5rem', color: '#28a745', textAlign: 'center'}}>Your Booking Summary</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem'}}>
                  <div style={{background: 'white', padding: '1.5rem', borderRadius: '10px'}}>
                    <h4 style={{marginBottom: '1rem', color: '#333'}}>Event Details</h4>
                    <p style={{margin: '0.5rem 0'}}><strong>Date:</strong> {formData.eventDate}</p>
                    <p style={{margin: '0.5rem 0'}}><strong>Time:</strong> {formData.startTime} - {(() => {
                      if (!formData.startTime || !formData.duration) return ''
                      const startHour = parseInt(formData.startTime.split(':')[0])
                      const endHour = startHour + parseInt(formData.duration)
                      return `${endHour}:00`
                    })()} ({formData.duration} hours)</p>
                    <p style={{margin: '0.5rem 0'}}><strong>Type:</strong> {
                      formData.bookingType === 'venue-rental' ? 'Venue Rental (Both Rooms)' : 
                      formData.bookingType === 'per-person' ? 'Per-Person Visit' : 
                      'Adults Only'
                    }</p>
                    <p style={{margin: '0.5rem 0'}}><strong>Guests:</strong> {formData.kidCount || 0} kids, {formData.adultCount} adults</p>
                    {formData.additionalServices.length > 0 && (
                      <div style={{marginTop: '1rem'}}>
                        <strong>Services:</strong>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'}}>
                          {formData.additionalServices.map(service => (
                            <span key={service} style={{
                              background: '#4ecdc4', 
                              color: 'white', 
                              padding: '0.25rem 0.75rem', 
                              borderRadius: '15px', 
                              fontSize: '0.8rem'
                            }}>
                              {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{background: 'white', padding: '1.5rem', borderRadius: '10px', textAlign: 'center'}}>
                    <h4 style={{marginBottom: '1rem', color: '#333'}}>Estimated Total</h4>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#28a745', marginBottom: '0.5rem'}}>
                      €{calculatePrice()}
                    </div>
                    <p style={{fontSize: '0.9rem', color: '#666', margin: '0'}}>
                      *Final price confirmed during our call
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <a href="/" className="btn" style={{background: '#4ecdc4'}}>
                  Return to Home
                </a>
                <a href="/contact" className="btn" style={{background: '#ff6b6b'}}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', marginTop: '0'}}>
        <div className="container" style={{textAlign: 'center', padding: '4rem 2rem'}}>
          <h1 className="section-title" style={{color: 'white', fontSize: '3rem'}}>
            📝 {t('reservations.title')}
          </h1>
          <p className="section-subtitle" style={{color: 'white', fontSize: '1.3rem'}}>
            {t('reservations.subtitle')}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="section" style={{paddingTop: '2rem', paddingBottom: '1rem'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              {steps.map((step, index) => (
                <div key={step.number} style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: currentStep >= step.number ? '#4ecdc4' : '#ddd',
                    color: currentStep >= step.number ? 'white' : '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    {step.number}
                  </div>
                  <div style={{marginLeft: '0.5rem', textAlign: 'center'}}>
                    <div style={{fontWeight: 'bold', fontSize: '0.9rem'}}>{step.title}</div>
                    <div style={{fontSize: '0.8rem', color: '#666'}}>{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div style={{
                      width: '30px',
                      height: '2px',
                      background: currentStep > step.number ? '#4ecdc4' : '#ddd',
                      margin: '0 1rem'
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" style={{paddingTop: '1rem'}}>
        <div className="container">
          <div className="form-container" style={{maxWidth: '800px'}}>
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div>
                  <h2 style={{marginBottom: '2rem', textAlign: 'center'}}>{t('reservations.form.contactName')}</h2>
                  
                  <div className="form-group">
                    <label htmlFor="contactName">{t('reservations.form.contactName')} *</label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      placeholder={t('reservations.form.placeholders.contactName')}
                    />
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                    <div className="form-group">
                      <label htmlFor="contactEmail">{t('reservations.form.contactEmail')} *</label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                        placeholder={t('reservations.form.placeholders.contactEmail')}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactPhone">{t('reservations.form.contactPhone')} *</label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                        placeholder={t('reservations.form.placeholders.contactPhone')}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 2 && (
                <div>
                  <h2 style={{marginBottom: '2rem', textAlign: 'center'}}>{t('reservations.steps.details')}</h2>
                  
                  <div className="form-group">
                    <label htmlFor="eventType">{t('reservations.form.eventType')} *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t('reservations.form.placeholders.eventType')}</option>
                      <option value="birthday-party">{t('reservations.form.eventTypeOptions.birthday')}</option>
                      <option value="family-gathering">{t('reservations.form.eventTypeOptions.family')}</option>
                      <option value="playdate">Group Playdate</option>
                      <option value="celebration">{t('reservations.form.eventTypeOptions.other')}</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                    <div className="form-group">
                      <label htmlFor="eventDate">{t('reservations.form.date')} *</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="startTime">{t('reservations.form.startTime')} *</label>
                      <select
                        id="startTime"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">{t('reservations.form.placeholders.startTime')}</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">{t('reservations.form.duration')} *</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                    >
                      <option value="3">{t('reservations.form.durationOptions.3')}</option>
                      <option value="4">{t('reservations.form.durationOptions.4')}</option>
                      <option value="5">{t('reservations.form.durationOptions.5')}</option>
                      <option value="6">6 {t('pricing.hours')}</option>
                      <option value="7">7 {t('pricing.hours')}</option>
                      <option value="8">8 {t('pricing.hours')}</option>
                    </select>
                    {formData.startTime && formData.duration && (
                      <div style={{fontSize: '0.9rem', color: validateEndTime() ? '#28a745' : '#dc3545', marginTop: '0.5rem'}}>
                        Event will end at: {getEndTime()} {!validateEndTime() && '(⚠️ Must end by 10:00 PM)'}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>{t('reservations.form.bookingType')} *</label>
                    <div style={{display: 'grid', gap: '1rem', marginTop: '0.5rem'}}>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: formData.bookingType === 'venue-rental' ? '#f0f9ff' : 'white',
                        borderColor: formData.bookingType === 'venue-rental' ? '#4ecdc4' : '#e1e5e9'
                      }}>
                        <input
                          type="radio"
                          name="bookingType"
                          value="venue-rental"
                          checked={formData.bookingType === 'venue-rental'}
                          onChange={handleChange}
                          style={{marginRight: '1rem'}}
                        />
                        <div>
                          <div style={{fontWeight: 'bold'}}>{t('reservations.form.bookingOptions.venueRental')}</div>
                          <div style={{fontSize: '0.9rem', color: '#666'}}>
                            {t('reservations.form.bookingOptions.venueRentalDesc')}
                          </div>
                        </div>
                      </label>
                      
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: formData.bookingType === 'per-person' ? '#f0f9ff' : 'white',
                        borderColor: formData.bookingType === 'per-person' ? '#4ecdc4' : '#e1e5e9'
                      }}>
                        <input
                          type="radio"
                          name="bookingType"
                          value="per-person"
                          checked={formData.bookingType === 'per-person'}
                          onChange={handleChange}
                          style={{marginRight: '1rem'}}
                        />
                        <div>
                          <div style={{fontWeight: 'bold'}}>{t('reservations.form.bookingOptions.perPerson')}</div>
                          <div style={{fontSize: '0.9rem', color: '#666'}}>
                            {t('reservations.form.bookingOptions.perPersonDesc')}
                          </div>
                        </div>
                      </label>

                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: formData.bookingType === 'adults-only' ? '#f0f9ff' : 'white',
                        borderColor: formData.bookingType === 'adults-only' ? '#4ecdc4' : '#e1e5e9'
                      }}>
                        <input
                          type="radio"
                          name="bookingType"
                          value="adults-only"
                          checked={formData.bookingType === 'adults-only'}
                          onChange={handleChange}
                          style={{marginRight: '1rem'}}
                        />
                        <div>
                          <div style={{fontWeight: 'bold'}}>{t('reservations.form.bookingOptions.adultsOnly')}</div>
                          <div style={{fontSize: '0.9rem', color: '#666'}}>
                            {t('reservations.form.bookingOptions.adultsOnlyDesc')}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Guest Count & Services */}
              {currentStep === 3 && (
                <div>
                  <h2 style={{marginBottom: '2rem', textAlign: 'center'}}>{t('reservations.form.guestCount')}</h2>
                  
                  {formData.bookingType !== 'adults-only' && (
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                      <div className="form-group">
                        <label htmlFor="kidCount">{t('reservations.form.numberOfKids')} {formData.bookingType === 'per-person' ? '' : '*'}</label>
                        <input
                          type="number"
                          id="kidCount"
                          name="kidCount"
                          value={formData.kidCount}
                          onChange={handleChange}
                          required={formData.bookingType !== 'adults-only'}
                          min={formData.bookingType === 'adults-only' ? '0' : '1'}
                          max="20"
                          placeholder="Number of children attending"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="adultCount">{t('reservations.form.numberOfAdults')} *</label>
                        <input
                          type="number"
                          id="adultCount"
                          name="adultCount"
                          value={formData.adultCount}
                          onChange={handleChange}
                          required
                          min="1"
                          max="20"
                          placeholder="Number of adults attending"
                        />
                      </div>
                    </div>
                  )}

                  {formData.bookingType === 'adults-only' && (
                    <div className="form-group">
                      <label htmlFor="adultCount">{t('reservations.form.numberOfAdults')} *</label>
                      <input
                        type="number"
                        id="adultCount"
                        name="adultCount"
                        value={formData.adultCount}
                        onChange={handleChange}
                        required
                        min="1"
                        max="20"
                        placeholder="Number of adults attending"
                      />
                      <div style={{fontSize: '0.9rem', color: '#666', marginTop: '0.5rem'}}>
                        Adults-only booking: Access to recreation room only (PlayStation 5, board games, bar, WiFi)
                      </div>
                    </div>
                  )}

                  {formData.bookingType === 'venue-rental' && (parseInt(formData.kidCount) + parseInt(formData.adultCount)) > 40 && (
                    <div style={{background: '#fff3cd', border: '1px solid #ffeaa7', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
                      <strong>⚠️ Guest Limit Exceeded:</strong> Venue rental is limited to 40 people total (20 kids + 20 adults maximum).
                    </div>
                  )}

                  {formData.bookingType === 'per-person' && (
                    <div style={{background: '#e8f4fd', border: '1px solid #74b9ff', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
                      <strong>💡 Per-Person Pricing:</strong> €6/hour for 1 kid + 1 parent, then €3/hour for each additional person. 
                      {parseInt(formData.duration) >= 5 && ' 5+ hour discount: €5/hour base + €2/hour extra people.'}
                    </div>
                  )}

                  <div className="form-group">
                    <label>{t('reservations.form.additionalServices')}</label>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem', marginTop: '0.5rem'}}>
                      {[
                        { value: 'party-decorations', label: t('reservations.form.services.decorations'), desc: t('reservations.form.services.decorationsDesc') },
                        { value: 'birthday-cake', label: t('reservations.form.services.cake'), desc: t('reservations.form.services.cakeDesc') },
                        { value: 'party-favors', label: t('reservations.form.services.favors'), desc: t('reservations.form.services.favorsDesc') },
                        { value: 'catering-snacks', label: t('reservations.form.services.catering'), desc: t('reservations.form.services.cateringDesc') },
                        { value: 'face-painting', label: t('reservations.form.services.facePainting'), desc: t('reservations.form.services.facePaintingDesc') },
                        { value: 'entertainment', label: t('reservations.form.services.entertainment'), desc: t('reservations.form.services.entertainmentDesc') }
                      ].map((service) => (
                        <label key={service.value} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          padding: '1rem',
                          border: '1px solid #e1e5e9',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: formData.additionalServices.includes(service.value) ? '#f0f9ff' : 'white'
                        }}>
                          <input
                            type="checkbox"
                            name="additionalServices"
                            value={service.value}
                            checked={formData.additionalServices.includes(service.value)}
                            onChange={handleChange}
                            style={{marginRight: '0.75rem', marginTop: '0.25rem'}}
                          />
                          <div>
                            <div style={{fontWeight: 'bold', fontSize: '0.9rem'}}>{service.label}</div>
                            <div style={{fontSize: '0.8rem', color: '#666'}}>{service.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any special dietary requirements, allergies, or specific requests for your event..."
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="additionalComments">Additional Comments</label>
                    <textarea
                      id="additionalComments"
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      placeholder="Any additional information about your event..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div>
                  <h2 style={{marginBottom: '2rem', textAlign: 'center'}}>Review Your Booking</h2>
                  
                  <div style={{background: '#f8f9fa', padding: '2rem', borderRadius: '15px', marginBottom: '2rem'}}>
                    <h3 style={{marginBottom: '1rem', color: '#ff6b6b'}}>Contact Information</h3>
                    <p><strong>Name:</strong> {formData.contactName}</p>
                    <p><strong>Email:</strong> {formData.contactEmail}</p>
                    <p><strong>Phone:</strong> {formData.contactPhone}</p>
                  </div>

                  <div style={{background: '#f8f9fa', padding: '2rem', borderRadius: '15px', marginBottom: '2rem'}}>
                    <h3 style={{marginBottom: '1rem', color: '#4ecdc4'}}>Event Details</h3>
                    <p><strong>Event Type:</strong> {formData.eventType}</p>
                    <p><strong>Date:</strong> {formData.eventDate}</p>
                    <p><strong>Time:</strong> {formData.startTime} - {getEndTime()} ({formData.duration} hours)</p>
                    <p><strong>Booking Type:</strong> {
                      formData.bookingType === 'venue-rental' ? 'Venue Rental (Both Rooms)' : 
                      formData.bookingType === 'per-person' ? 'Per-Person Visit' : 
                      'Adults Only'
                    }</p>
                    <p><strong>Guests:</strong> {formData.kidCount || 0} kids, {formData.adultCount} adults</p>
                  </div>

                  {formData.additionalServices.length > 0 && (
                    <div style={{background: '#f8f9fa', padding: '2rem', borderRadius: '15px', marginBottom: '2rem'}}>
                      <h3 style={{marginBottom: '1rem', color: '#667eea'}}>Additional Services</h3>
                      {formData.additionalServices.map(service => (
                        <p key={service}>• {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                      ))}
                    </div>
                  )}

                  <div style={{background: '#e8f5e8', padding: '2rem', borderRadius: '15px', marginBottom: '2rem'}}>
                    <h3 style={{marginBottom: '1.5rem', color: '#28a745', textAlign: 'center'}}>Price Breakdown</h3>
                    
                    {/* Base Price Calculation */}
                    <div style={{marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px'}}>
                      <h4 style={{margin: '0 0 0.5rem 0', color: '#333'}}>Base Cost</h4>
                      {formData.bookingType === 'venue-rental' ? (
                        <div>
                          <p style={{margin: '0.25rem 0'}}>Venue Rental ({formData.duration} hours): <strong>€{(() => {
                            const duration = parseInt(formData.duration)
                            if (duration === 3) return 240
                            else if (duration === 4) return 300
                            else if (duration === 5) return 350
                            else if (duration === 6) return 380
                            else if (duration > 6) return 380 + (duration - 6) * 65
                            return 0
                          })()}</strong></p>
                        </div>
                      ) : formData.bookingType === 'per-person' ? (
                        <div>
                          {(() => {
                            const duration = parseInt(formData.duration)
                            const kidCount = parseInt(formData.kidCount) || 0
                            const adultCount = parseInt(formData.adultCount) || 0
                            const baseGuests = Math.min(kidCount, adultCount)
                            const extraGuests = Math.max(0, (kidCount + adultCount) - (baseGuests * 2))
                            const hourlyRate = duration >= 5 ? 5 : 6
                            const extraRate = duration >= 5 ? 2 : 3
                            const basePrice = baseGuests * hourlyRate * duration
                            const extraPrice = extraGuests * extraRate * duration
                            
                            return (
                              <div>
                                <p style={{margin: '0.25rem 0'}}>{baseGuests} kid+parent pairs × €{hourlyRate}/hour × {duration} hours: <strong>€{basePrice}</strong></p>
                                {extraGuests > 0 && (
                                  <p style={{margin: '0.25rem 0'}}>{extraGuests} extra guests × €{extraRate}/hour × {duration} hours: <strong>€{extraPrice}</strong></p>
                                )}
                                {duration >= 5 && (
                                  <p style={{margin: '0.25rem 0', fontSize: '0.9rem', color: '#28a745'}}>✓ 5+ hour discount applied</p>
                                )}
                              </div>
                            )
                          })()}
                        </div>
                      ) : (
                        <div>
                          {(() => {
                            const duration = parseInt(formData.duration)
                            const adultCount = parseInt(formData.adultCount) || 0
                            const hourlyRate = duration >= 5 ? 2 : 3
                            const totalPrice = adultCount * hourlyRate * duration
                            
                            return (
                              <div>
                                <p style={{margin: '0.25rem 0'}}>{adultCount} adults × €{hourlyRate}/hour × {duration} hours: <strong>€{totalPrice}</strong></p>
                                {duration >= 5 && (
                                  <p style={{margin: '0.25rem 0', fontSize: '0.9rem', color: '#28a745'}}>✓ 5+ hour discount applied</p>
                                )}
                              </div>
                            )
                          })()}
                        </div>
                      )}
                    </div>

                    {/* Additional Services */}
                    {formData.additionalServices.length > 0 && (
                      <div style={{marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px'}}>
                        <h4 style={{margin: '0 0 0.5rem 0', color: '#333'}}>Additional Services</h4>
                        {formData.additionalServices.map(service => {
                          const servicePrices = {
                            'party-decorations': 50,
                            'birthday-cake': 30,
                            'party-favors': 40,
                            'catering-snacks': 60,
                            'face-painting': 80,
                            'entertainment': 100
                          }
                          const serviceName = service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
                          return (
                            <p key={service} style={{margin: '0.25rem 0'}}>
                              {serviceName}: <strong>€{servicePrices[service]}</strong>
                            </p>
                          )
                        })}
                      </div>
                    )}

                    {/* Total */}
                    <div style={{textAlign: 'center', borderTop: '2px solid #28a745', paddingTop: '1rem'}}>
                      <h3 style={{margin: '0 0 0.5rem 0', color: '#28a745'}}>Total Estimated Cost</h3>
                      <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745'}}>
                        €{calculatePrice()}
                      </div>
                    </div>
                  </div>

                  <div style={{background: '#ffe66d', padding: '1rem', borderRadius: '8px', marginBottom: '2rem'}}>
                    <h4 style={{marginBottom: '0.5rem'}}>Important Note:</h4>
                    <p style={{fontSize: '0.9rem', margin: '0'}}>
                      This is an estimated price. Final confirmation and payment details will be provided within 24 hours. 
                      A deposit may be required to secure your booking.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn"
                    style={{background: '#6c757d'}}
                  >
                    {t('reservations.form.previous')}
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn"
                    style={{marginLeft: 'auto'}}
                    disabled={currentStep === 2 && (!validateEndTime() || (formData.bookingType === 'venue-rental' && (parseInt(formData.kidCount) + parseInt(formData.adultCount)) > 40))}
                  >
                    {t('reservations.form.next')}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn"
                    style={{marginLeft: 'auto', background: '#4ecdc4'}}
                    disabled={!validateEndTime() || (formData.bookingType === 'venue-rental' && (parseInt(formData.kidCount) + parseInt(formData.adultCount)) > 40)}
                  >
                    {t('reservations.form.confirm')}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Booking Process</h2>
          <div className="card-grid">
            <div className="card">
              <h3>1. Submit Request</h3>
              <p>Complete and submit the booking form above with all event details and preferences.</p>
            </div>
            <div className="card">
              <h3>2. Availability Check</h3>
              <p>We'll contact you within 24 hours to confirm availability and discuss any special requirements.</p>
            </div>
            <div className="card">
              <h3>3. Secure Your Date</h3>
              <p>Finalize details, additional services, and complete payment to secure your booking.</p>
            </div>
            <div className="card">
              <h3>4. Party Time!</h3>
              <p>Arrive on your event day and enjoy your celebration - we'll handle the rest!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reservations
