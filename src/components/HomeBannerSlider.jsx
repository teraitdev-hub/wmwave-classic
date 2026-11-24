import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'brand',
      type: 'logo',
      content: (
        <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '880px', margin: '0 auto' }}>
          <img 
            src="/assets/images/logo.png" 
            alt="WMWave" 
            style={{ 
              maxWidth: '680px', 
              width: '100%', 
              height: 'auto', 
              margin: '0 auto 20px auto', 
              display: 'block',
              filter: 'drop-shadow(0 4px 12px rgba(45, 127, 249, 0.25))'
            }} 
          />
          <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', fontWeight: '600', marginBottom: '12px', letterSpacing: '-0.01em' }}>
            Enterprise Workforce Management & Physical Access Control
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
            Certified eSSL biometric hardware, AI visible light facial recognition, automatic boom barriers, and cloud sync infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary btn-sm">
              Explore Products
            </Link>
            <Link to="/contact" className="btn btn-outline btn-sm" style={{ color: '#ffffff', borderColor: '#475569' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'land1',
      type: 'image',
      image: '/assets/images/land1.png',
      alt: 'Biometric Attendance (UHF) - Smart Attendance and Seamless Tracking',
      link: '/products?cat=fingerprint'
    },
    {
      id: 'land2',
      type: 'image',
      image: '/assets/images/land2.png',
      alt: 'Cloud Services - Scalable, Secure, Reliable Workforce Cloud',
      link: '/services'
    },
    {
      id: 'land3',
      type: 'image',
      image: '/assets/images/land3.png',
      alt: 'Automatic Boom Barriers & Perimeter Gate Automation',
      link: '/products?cat=boom-barrier'
    },
    {
      id: 'land4',
      type: 'image',
      image: '/assets/images/land4.png',
      alt: 'Pedestrian Flap Barriers & Stainless Steel Security Turnstiles',
      link: '/products?cat=flap-barrier'
    },
    {
      id: 'land5',
      type: 'image',
      image: '/assets/images/land5.png',
      alt: 'Enterprise Visitor Management & Centralized Access Control',
      link: '/services'
    }
  ];

  // Calm automatic rotation every 5 seconds (zero bounce/jump animations)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <div 
      style={{
        width: '100%',
        backgroundColor: '#071A35',
        background: 'linear-gradient(180deg, #071A35 0%, #0c2342 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #1e3a5f',
        userSelect: 'none'
      }}
    >
      <div 
        className="container"
        style={{
          position: 'relative',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 0 36px 0'
        }}
      >
        {/* Slide Content Display */}
        {active.type === 'logo' ? (
          active.content
        ) : (
          <Link 
            to={active.link}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%', 
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <img 
              src={active.image} 
              alt={active.alt} 
              style={{
                maxWidth: '1100px',
                width: '100%',
                height: 'auto',
                maxHeight: '420px',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '8px'
              }}
            />
          </Link>
        )}

        {/* Previous Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Banner"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(7, 26, 53, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.85)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 26, 53, 0.75)'}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Banner"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(7, 26, 53, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.85)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(7, 26, 53, 0.75)'}
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot Indicators */}
        <div 
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === currentSlide ? '24px' : '9px',
                height: '9px',
                borderRadius: '5px',
                backgroundColor: index === currentSlide ? '#0284c7' : 'rgba(255, 255, 255, 0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
