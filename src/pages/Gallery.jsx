import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Gallery = () => {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
      if (selectedImage) {
        if (e.key === 'ArrowLeft') {
          navigateImage(-1)
        }
        if (e.key === 'ArrowRight') {
          navigateImage(1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const navigateImage = (direction) => {
    const newIndex = currentImageIndex + direction
    if (newIndex >= 0 && newIndex < adultRoomImages.length) {
      setCurrentImageIndex(newIndex)
      setSelectedImage(adultRoomImages[newIndex])
    }
  }

  // Kids Playroom slideshow images (using placeholder URLs)
  const playroomSlides = [
    {
      id: 1,
      title: 'Kids Playroom Overview',
      description: '40m² safe play area designed for children ages 3-8',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Climbing & Play Structures',
      description: 'Safe, age-appropriate climbing equipment and play zones',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Creative Activity Corner',
      description: 'Arts, crafts, and imaginative play area with supplies',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Reading & Quiet Zone',
      description: 'Cozy corner with books and soft seating for quiet time',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Birthday Party Setup',
      description: 'Festively decorated party area with special seating',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  // Adult Recreation Room images
  const adultRoomImages = [
    {
      id: 1,
      title: 'PlayStation 5 Gaming Station',
      description: 'Latest console with comfortable gaming chairs',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Board Games Collection',
      description: 'Extensive collection of family-friendly board games',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Remote Work Zone',
      description: 'Quiet workspace with fast WiFi for working parents',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Refreshment Bar',
      description: 'Snacks, beverages, and comfortable seating area',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % playroomSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [playroomSlides.length])

  const activities = [
    { title: 'Birthday Party Celebrations', description: 'Organized birthday parties with decorations and activities', icon: '🎉' },
    { title: 'Free Play Sessions', description: 'Unstructured playtime in safe, supervised environment', icon: '🏃‍♂️' },
    { title: 'PlayStation Gaming', description: 'Latest games and multiplayer experiences for teens/adults', icon: '🎮' },
    { title: 'Board Game Tournaments', description: 'Family-friendly board game competitions and fun', icon: '🎲' },
    { title: 'Remote Work Sessions', description: 'Productive work time with fast WiFi while kids play', icon: '💻' },
    { title: 'Family Recreation Time', description: 'Quality time for families in both dedicated spaces', icon: '👨‍👩‍👧‍👦' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)', color: 'white', marginTop: '0'}}>
        <div className="container" style={{textAlign: 'center', padding: '4rem 2rem'}}>
          <h1 className="section-title" style={{color: 'white', fontSize: '3rem'}}>
            📸 {t('gallery.title')}
          </h1>
          <p className="section-subtitle" style={{color: 'white', fontSize: '1.3rem'}}>
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Kids Playroom Slideshow */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('gallery.kidsPlayroom')}</h2>
          <p className="section-subtitle">
            {t('gallery.subtitle')}
          </p>
          
          <div style={{
            position: 'relative', 
            maxWidth: '900px', 
            margin: '0 auto', 
            borderRadius: '20px', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            {/* Main Slideshow */}
            <div style={{
              position: 'relative',
              height: '500px',
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${playroomSlides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'white'}}>
                  {playroomSlides[currentSlide].title}
                </h3>
                <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
                  {playroomSlides[currentSlide].description}
                </p>
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={() => setCurrentSlide(prev => prev === 0 ? playroomSlides.length - 1 : prev - 1)}
                style={{
                  position: 'absolute',
                  left: '20px',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ‹
              </button>
              <button 
                onClick={() => setCurrentSlide(prev => (prev + 1) % playroomSlides.length)}
                style={{
                  position: 'absolute',
                  right: '20px',
                  background: 'rgba(255,255,255,0.3)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ›
              </button>
            </div>
            
            {/* Slide indicators */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px'
            }}>
              {playroomSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === index ? '#4ecdc4' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Auto-play indicator */}
          <div style={{textAlign: 'center', marginTop: '1rem', color: '#666'}}>
            <p style={{fontSize: '0.9rem'}}>
              🔄 Auto-advancing every 4 seconds • Click arrows or dots to navigate manually
            </p>
          </div>
        </div>
      </section>

      {/* Adult Recreation Room Gallery */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">{t('gallery.adultRoom')}</h2>
          <p className="section-subtitle">
            {t('gallery.subtitle')} - Click on any image to view in full screen
          </p>
          
          {/* Gallery Grid */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem', 
            maxWidth: '1200px', 
            margin: '0 auto'
          }}>
            {adultRoomImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                }}
              >
                {/* Image Container */}
                <div style={{
                  height: '220px',
                  background: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(78, 205, 196, 0.8))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0'
                  }}
                  >
                    🔍
                  </div>
                </div>
                
                {/* Content */}
                <div style={{padding: '1.5rem', textAlign: 'center'}}>
                  <h3 style={{
                    marginBottom: '0.75rem', 
                    color: '#333',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem', 
                    color: '#666', 
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {item.description}
                  </p>
                  
                  {/* View Gallery Button */}
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    color: 'white',
                    borderRadius: '25px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}>
                    🖼️ View in Gallery
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Instructions */}
          <div style={{
            textAlign: 'center', 
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(78, 205, 196, 0.1))',
            borderRadius: '15px',
            maxWidth: '600px',
            margin: '2rem auto 0'
          }}>
            <h4 style={{color: '#333', marginBottom: '1rem'}}>
              🎯 Interactive Gallery Features
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              fontSize: '0.9rem',
              color: '#666'
            }}>
              <div>�️ <strong>Click</strong><br/>Open lightbox</div>
              <div>⌨️ <strong>Keyboard</strong><br/>Arrow keys & Escape</div>
              <div>📱 <strong>Touch</strong><br/>Tap to view</div>
              <div>🖼️ <strong>Fullscreen</strong><br/>Immersive viewing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Lightbox Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}
        onClick={() => setSelectedImage(null)}
        >
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0,0,0,0.7)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0,0,0,0.5)'
              }}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => navigateImage(-1)}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  zIndex: 1001,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ‹
              </button>
            )}

            {currentImageIndex < adultRoomImages.length - 1 && (
              <button
                onClick={() => navigateImage(1)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  zIndex: 1001,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ›
              </button>
            )}

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Image Info */}
            <div style={{
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                color: '#333',
                fontSize: '1.3rem'
              }}>
                {selectedImage.title}
              </h3>
              <p style={{
                margin: 0,
                color: '#666',
                fontSize: '1rem'
              }}>
                {selectedImage.description}
              </p>
              <div style={{
                marginTop: '1rem',
                fontSize: '0.9rem',
                color: '#999'
              }}>
                Image {currentImageIndex + 1} of {adultRoomImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activities Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You Can Do Here</h2>
          <p className="section-subtitle">
            From birthday parties to remote work sessions - discover all the ways to enjoy our spaces!
          </p>
          <div className="card-grid">
            {activities.map((activity, index) => (
              <div key={index} className="card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Schedule a Personal Tour</h2>
          <div className="form-container">
            <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
              While our gallery gives you a glimpse of our facilities, nothing beats seeing them in person! 
              We'd love to show you around and introduce you to our amazing team.
            </p>
            <div style={{textAlign: 'center'}}>
              <h3 style={{color: '#ff6b6b', marginBottom: '1rem'}}>Why Visit In Person?</h3>
              <ul style={{textAlign: 'left', maxWidth: '400px', margin: '0 auto 2rem'}}>
                <li>Meet our caring staff members</li>
                <li>See our safety protocols in action</li>
                <li>Watch children engaged in activities</li>
                <li>Ask questions about our programs</li>
                <li>Feel the warm, welcoming atmosphere</li>
              </ul>
              <a href="/reservations" className="btn" style={{maxWidth: '300px', margin: '0 auto', display: 'block'}}>
                Schedule Your Tour Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Guidelines Section */}
      <section className="section" style={{backgroundColor: '#4ecdc4', color: 'white'}}>
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Photography & Privacy</h2>
          <div className="card-grid">
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>📷 Daily Photos</h3>
              <p>We capture special moments throughout the day and share them with parents through our secure parent portal.</p>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>🔒 Privacy First</h3>
              <p>All photos require parental consent, and we maintain strict privacy policies to protect your child's image.</p>
            </div>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <h3>🎉 Special Events</h3>
              <p>Holiday celebrations, graduation ceremonies, and milestone moments are professionally documented.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
