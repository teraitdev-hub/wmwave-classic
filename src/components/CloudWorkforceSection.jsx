import React, { useEffect, useRef } from 'react';
import ImageWithFallback from './ImageWithFallback';

const CloudWorkforceSection = () => {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="cloud-workforce">
            <div className="container">
                <div className="about-grid reveal" ref={revealRef}>
                    <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '30px' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Why Cloud-Based Workforce Management Matters</h2>
                        <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8' }}>
                            Cloud technology enables organizations to monitor attendance in real time, access workforce data from anywhere, improve collaboration, automate reporting, reduce infrastructure costs, and maintain business continuity. 
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8', marginTop: '15px' }}>
                            With WMWave, your workforce data is securely centralized, allowing HR and management teams to make data-driven decisions faster and more effectively than ever before.
                        </p>
                    </div>
                    <div className="about-img">
                        <ImageWithFallback src="/assets/images/cloud_workforce.png" alt="Cloud Dashboard connecting multiple office locations" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.1)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CloudWorkforceSection;
