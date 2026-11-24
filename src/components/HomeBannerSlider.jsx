import React, { useState } from 'react';
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
              maxWidth: '520px', 
              width: '100%', 
              height: 'auto', 
              margin: '0 auto 20px auto', 
              display: 'block'
            }} 
          />
          <h2 style={{ color: '#0f2b48', fontSize: '1.75rem', fontWeight: '700', marginBottom: '14px', letterSpacing: '-0.01em' }}>
            Enterprise Workforce Management & Physical Access Control
          </h2>
          <p style={{ color: '#475569', fontSize: '1.0625rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
            Certified eSSL biometric hardware, AI visible light facial recognition, automatic boom barriers, and cloud sync infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary btn-md">
              Explore Products
            </Link>
            <Link to="/contact" className="btn btn-outline btn-md" style={{ color: '#0f2b48', borderColor: '#cbd5e1' }}>
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

  // Completely static - ONLY changes when user manually clicks Next / Prev / Dot
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
        backgroundColor: '#ffffff',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #e2e8f0',
        userSelect: 'none'
      }}
    >
      <div 
        className="container"
        style={{
          position: 'relative',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '28px 0 40px 0'
        }}
      >
        {/* Slide Content Display (Clean White Theme, Zero Stretching) */}
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
                maxWidth: '1200px',
                width: '100%',
                height: 'auto',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '8px'
              }}
            />
          </Link>
        )}

        {/* Previous Arrow Button (Styled for White Background) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Banner"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f2b48',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'background-color 0.15s ease, border-color 0.15s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.borderColor = '#94a3b8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = '#cbd5e1';
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Arrow Button (Styled for White Background) */}
        <button
          onClick={handleNext}
          aria-label="Next Banner"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f2b48',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'background-color 0.15s ease, border-color 0.15s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.borderColor = '#94a3b8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = '#cbd5e1';
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot Indicators (Clean Blue on White) */}
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
                width: index === currentSlide ? '26px' : '9px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index === currentSlide ? '#0284c7' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.15s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
