import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const IndustriesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            const reveals = sectionRef.current.querySelectorAll('.reveal');
            reveals.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    const industries = [
        { name: 'Corporate Offices', image: '/assets/images/industry_corporate_management.jpg', desc: 'Secure entry and attendance for enterprise staff.', slug: 'corporate-offices' },
        { name: 'Manufacturing Plants', image: '/assets/images/industry_manufacturing.png', desc: 'Rugged access control for high-compliance zones.', slug: 'manufacturing-plants' },
        { name: 'Hospitals', image: '/assets/images/industry_hospital.png', desc: 'Contactless biometric hygiene and restricted access.', slug: 'hospitals' },
        { name: 'Educational Institutions', image: '/assets/images/industry_education_management.jpg', desc: 'Campus-wide attendance and visitor management.', slug: 'educational-institutions' },
        { name: 'Residential Communities', image: '/assets/images/industry_residential.png', desc: 'Smart gate access and resident tracking.', slug: 'residential-communities' },
        { name: 'Airports', image: '/assets/images/industry_airport.png', desc: 'High-security multi-layer authentication zones.', slug: 'airports' },
        { name: 'Warehouses', image: '/assets/images/industry_warehouse.png', desc: 'Shift scheduling and logistics personnel tracking.', slug: 'warehouses' },
        { name: 'Government', image: '/assets/images/industry_government.png', desc: 'Top-tier access control for sensitive facilities.', slug: 'government' }
    ];

    return (
        <section className="section bg-light" id="industries" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Designed For Your Industry</h2>
                    <p className="section-subtitle">Tailored workforce intelligence and security solutions for diverse environments.</p>
                </div>
                
                <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
                    {industries.map((industry, index) => (
                        <Link to={`/feature/${industry.slug}`} key={index} style={{ textDecoration: 'none' }}>
                            <div className="industry-card reveal" style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', height: '100%' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <ImageWithFallback src={industry.image} alt={industry.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="industry-img-hover" />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '10px' }}>{industry.name}</h3>
                                    <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>{industry.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Inject small style for hover effect */}
            <style dangerouslySetInnerHTML={{__html: `
                .industry-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important; }
                .industry-card:hover .industry-img-hover { transform: scale(1.05); }
            `}} />
        </section>
    );
};

export default IndustriesSection;
