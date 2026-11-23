import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const WhyChooseUs = () => {
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

    const features = [
        { icon: 'fa-user-check', text: 'Eliminate Manual Attendance', slug: 'eliminate-manual' },
        { icon: 'fa-user-shield', text: 'Prevent Buddy Punching', slug: 'prevent-buddy-punching' },
        { icon: 'fa-file-invoice-rupee', text: 'Improve Payroll Accuracy', slug: 'improve-payroll' },
        { icon: 'fa-lock', text: 'Strengthen Security', slug: 'strengthen-security' },
        { icon: 'fa-desktop', text: 'Live Workforce Monitoring', slug: 'live-monitoring' },
        { icon: 'fa-cloud-upload-alt', text: 'Cloud-Based Data Access', slug: 'cloud-access' },
        { icon: 'fa-chart-pie', text: 'Automated Reports', slug: 'automated-reports' },
        { icon: 'fa-map-marked-alt', text: 'Multi-Location Management', slug: 'multi-location' }
    ];

    return (
        <section className="section bg-light" id="why-choose-us" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Why Choose WMWave</h2>
                    <p className="section-subtitle">Intelligent workforce management that transforms how you operate.</p>
                </div>
                
                <div className="about-grid reveal" style={{ marginTop: '40px' }}>
                    <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="feature-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            {features.map((feature, index) => (
                                <Link to={`/feature/${feature.slug}`} key={index} style={{ textDecoration: 'none' }}>
                                    <div className="feature-hover-card" style={{ padding: '20px', textAlign: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%', transition: 'all 0.3s' }}>
                                        {feature.icon === 'fa-file-invoice-rupee' ? (
                                            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                                <span className="fa-stack" style={{ fontSize: '1rem', color: 'var(--accent)', width: '2em', height: '2em', lineHeight: '2em' }}>
                                                    <i className="fas fa-file-invoice fa-stack-2x"></i>
                                                    <i className="fas fa-indian-rupee-sign fa-stack-1x" style={{ color: '#fff', fontSize: '0.8em', marginTop: '0.2em' }}></i>
                                                </span>
                                            </div>
                                        ) : (
                                            <i className={`fas ${feature.icon}`} style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '15px' }}></i>
                                        )}
                                        <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--primary)' }}>{feature.text}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="about-img">
                        <ImageWithFallback src="/assets/images/hr_analytics.png" alt="HR Manager Analytics Dashboard" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.1)' }} />
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .feature-hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
            `}} />
        </section>
    );
};

export default WhyChooseUs;
