import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const WorkflowSection = () => {
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

    const steps = [
        { num: 1, title: 'Employee Entry', desc: 'Secure facility entrance.', slug: 'workflow-entry' },
        { num: 2, title: 'Biometric Verification', desc: 'Face or fingerprint scan.', slug: 'workflow-verification' },
        { num: 3, title: 'Attendance Recorded', desc: 'Instant local logging.', slug: 'workflow-attendance' },
        { num: 4, title: 'Cloud Synchronization', desc: 'Data pushed securely.', slug: 'workflow-sync' },
        { num: 5, title: 'Live Workforce Dashboard', desc: 'Real-time HR visibility.', slug: 'workflow-dashboard' },
        { num: 6, title: 'Smart Access Control', desc: 'Doors/gates open.', slug: 'workflow-access' },
        { num: 7, title: 'Productivity Tracking', desc: 'Shift & hours monitored.', slug: 'workflow-tracking' },
        { num: 8, title: 'Automated Reports', desc: 'Payroll ready exports.', slug: 'workflow-reports' },
        { num: 9, title: 'Secure Exit', desc: 'Checkout logged safely.', slug: 'workflow-exit' }
    ];

    return (
        <section className="section" id="workflow" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Seamless Workforce Workflow</h2>
                    <p className="section-subtitle">From entry to exit, everything is connected and automated in the cloud.</p>
                </div>
                
                <div className="about-grid reveal" style={{ marginTop: '40px', alignItems: 'stretch' }}>
                    <div className="about-img" style={{ display: 'flex' }}>
                        <ImageWithFallback src="/assets/images/workflow_gates.png" alt="Biometric Turnstile Gates" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.1)' }} />
                    </div>
                    <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="workflow-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
                            {steps.map((step, index) => (
                                <Link to={`/feature/${step.slug}`} key={index} style={{ textDecoration: 'none' }}>
                                    <div className="workflow-step feature-hover-card" style={{ display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                                        <div style={{ background: 'var(--accent)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: 0 }}>
                                            {step.num}
                                        </div>
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--primary)' }}>{step.title}</h5>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{step.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .feature-hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
            `}} />
        </section>
    );
};

export default WorkflowSection;
