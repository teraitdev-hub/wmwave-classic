import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const DashboardSection = () => {
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

    return (
        <section className="section" id="dashboard" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title" style={{ color: '#fff' }}>Real-Time Workforce Intelligence</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Everything you need to know about your organization's presence, live.</p>
                </div>
                
                <div className="about-grid reveal" style={{ marginTop: '40px' }}>
                    <div className="about-img">
                        <ImageWithFallback src="/assets/images/analytics_dashboard.png" alt="Large modern analytics dashboard" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.15)' }} />
                    </div>
                    <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8' }}>
                            Monitor attendance, employee movement, late arrivals, overtime, shift performance, department status, vendors, housekeeping, and security personnel from one centralized dashboard.
                        </p>
                        <div className="dashboard-features-grid" style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <Link to="/feature/live-kpis" className="dashboard-feature-link">
                                <div className="feature-hover-card dashboard-feature-card">
                                    <i className="fas fa-chart-line"></i>
                                    <strong>Live KPIs</strong>
                                </div>
                            </Link>
                            <Link to="/feature/staff-movement" className="dashboard-feature-link">
                                <div className="feature-hover-card dashboard-feature-card">
                                    <i className="fas fa-users"></i>
                                    <strong>Staff Movement</strong>
                                </div>
                            </Link>
                            <Link to="/feature/overtime-tracking" className="dashboard-feature-link">
                                <div className="feature-hover-card dashboard-feature-card">
                                    <i className="fas fa-clock"></i>
                                    <strong>Overtime Tracking</strong>
                                </div>
                            </Link>
                            <Link to="/feature/multi-branch" className="dashboard-feature-link">
                                <div className="feature-hover-card dashboard-feature-card">
                                    <i className="fas fa-building"></i>
                                    <strong>Multi-Branch</strong>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .dashboard-feature-link {
                    text-decoration: none;
                    display: flex;
                    width: 100%;
                    height: 100%;
                }
                .dashboard-feature-card {
                    background: #fff;
                    padding: 14px 16px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    min-height: 66px;
                    box-sizing: border-box;
                    transition: all 0.3s ease;
                }
                .dashboard-feature-card i {
                    color: var(--accent);
                    font-size: 1.4rem;
                    margin-right: 12px;
                    flex-shrink: 0;
                    width: 24px;
                    text-align: center;
                }
                .dashboard-feature-card strong {
                    color: var(--primary);
                    line-height: 1.25;
                    font-size: 0.95rem;
                    display: block;
                }
                .feature-hover-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                @media (max-width: 768px) {
                    .dashboard-feature-card {
                        padding: 12px 10px;
                        min-height: 64px;
                    }
                    .dashboard-feature-card i {
                        font-size: 1.25rem;
                        margin-right: 8px;
                    }
                    .dashboard-feature-card strong {
                        font-size: 0.88rem;
                    }
                }
            `}} />
        </section>
    );
};

export default DashboardSection;
