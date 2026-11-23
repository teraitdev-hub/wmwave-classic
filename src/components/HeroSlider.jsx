import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            content: (
                <div className="slide-content no-bg hero-first-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0 5%', maxWidth: '1400px', margin: '0 auto' }}>
                    <div className="hero-text-content" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <img src="/assets/images/logo.png" alt="WMWave Logo" className="hero-center-logo" fetchPriority="high" decoding="async" style={{ maxWidth: '780px', width: '100%', height: 'auto' }} />
                    </div>
                </div>
            )
        },
        {
            content: (
                <div className="slide-content no-bg" style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', width: '100%', padding: '0 5%' }}>
                    <img src="/assets/images/land1.png" alt="Slide 1" className="hero-banner-img" fetchPriority="high" decoding="async" />
                </div>
            )
        },
        {
            content: (
                <div className="slide-content no-bg" style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', width: '100%', padding: '0 5%' }}>
                    <img src="/assets/images/land2.png" alt="Slide 2" className="hero-banner-img" loading="lazy" decoding="async" />
                </div>
            )
        },
        {
            content: (
                <div className="slide-content no-bg" style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', width: '100%', padding: '0 5%' }}>
                    <img src="/assets/images/land3.png?v=20261007" alt="Slide 3" className="hero-banner-img" loading="lazy" decoding="async" />
                </div>
            )
        },
        {
            content: (
                <div className="slide-content no-bg" style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', width: '100%', padding: '0 5%' }}>
                    <img src="/assets/images/land4.png" alt="Slide 4" className="hero-banner-img" loading="lazy" decoding="async" />
                </div>
            )
        },
        {
            content: (
                <div className="slide-content no-bg" style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', width: '100%', padding: '0 5%' }}>
                    <img src="/assets/images/land5.png?v=2" alt="Slide 5" className="hero-banner-img" loading="lazy" decoding="async" />
                </div>
            )
        }
    ];

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero" id="home">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        {slide.content}
                    </div>
                ))}
            </div>
            {slides.length > 1 && (
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <div 
                            key={index} 
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default HeroSlider;
