import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = (id) => {
        navigate(`/service/${id}`);
    };

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="section-title">Cloud-Based Services</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        Smart, secure, and accessible solutions that allow businesses to manage their operations, attendance, security, and workforce data anytime, anywhere through the cloud.
                    </p>
                </div>
                
                <div className="category-block">
                    <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        {servicesData.map(srv => (
                            <div 
                                key={srv.id} 
                                onClick={() => handleCardClick(srv.id)}
                                className="card premium-service-card" 
                                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}
                            >
                                <div className="card-img" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={srv.img} alt={srv.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(7, 26, 53, 0.8)', padding: '10px 15px', borderRadius: '50%', color: 'var(--accent)', backdropFilter: 'blur(5px)' }}>
                                        <i className={srv.icon} style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <div className="card-body" style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '30px' }}>
                                    <h3 className="card-title" style={{ transition: 'color 0.3s', marginBottom: '15px', fontSize: '1.4rem' }}>{srv.name}</h3>
                                    <p className="card-text" style={{ flex: '1', color: 'var(--text-muted)', lineHeight: '1.6' }}>{srv.shortDesc}</p>
                                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <button 
                                            className="btn btn-primary" 
                                            style={{ flex: '1', padding: '10px', fontSize: '0.9rem' }}
                                        >
                                            View Details
                                        </button>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/blogs');
                                            }} 
                                            className="btn btn-outline" 
                                            style={{ flex: '1', padding: '10px', fontSize: '0.9rem', color: 'var(--primary)', borderColor: 'var(--primary)' }}
                                        >
                                            View Blog
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
