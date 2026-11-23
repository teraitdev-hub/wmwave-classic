import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const AboutSection = () => {
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
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid reveal" ref={revealRef}>
                    <div className="about-img">
                        <ImageWithFallback src="/assets/images/about_workforce_new.jpg?v=3" alt="Facility Manager Workforce Dashboard" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.1)' }} />
                    </div>
                    <div className="about-content" data-searchable="about mission specialize cloud workforce">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2', color: '#fff' }}>The Future of Workforce Management Starts Here</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#fff' }}>
                            Managing a modern workforce is no longer just about recording attendance. Today's organizations need complete visibility into employee movement, secure access to facilities, real-time workforce monitoring, and accurate operational data to make informed business decisions.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#fff' }}>
                            As businesses continue embracing digital transformation, workforce management is evolving from a manual process into an intelligent, cloud-powered ecosystem.
                        </p>
                        <div className="about-btn-wrap" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link to="/about-us" className="btn btn-primary" style={{ padding: '12px 25px', borderRadius: '8px' }}>Read Full Overview</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
