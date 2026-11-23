import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getServiceById } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = getServiceById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Service Not Found</h2>
                <button onClick={() => navigate('/services')} className="btn btn-primary" style={{ marginTop: '20px' }}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <button onClick={() => navigate('/services')} style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                    <i className="fas fa-arrow-left"></i> Back to Services
                </button>
                
                <div className="card service-detail-card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap' }}>
                    
                    {/* Left Column: Framed Image */}
                    <div className="service-detail-media" style={{ flex: '1.2', minWidth: '300px', borderRadius: '15px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                        <img 
                            src={service.img} 
                            alt={service.name} 
                            style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', borderRadius: '15px', display: 'block', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)' }}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>
                    
                    {/* Right Column: Service Details & Features */}
                    <div className="service-detail-info" style={{ flex: '1.5', minWidth: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span className="btn btn-primary" style={{ position: 'relative', top: '0', left: '0', marginBottom: '15px', display: 'inline-block', textTransform: 'uppercase', padding: '8px 15px', borderRadius: '20px', fontSize: '0.8rem', width: 'fit-content', pointerEvents: 'none' }}>
                            Cloud-Based Services
                        </span>
                        
                        <h1 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '2.5rem' }}>{service.name}</h1>
                        
                        <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#ffffff', lineHeight: '1.8' }}>
                            {service.fullDesc}
                        </p>

                        <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}>Features</h3>
                        
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                            {service.features.map((feature, index) => (
                                <li key={index} style={{ fontSize: '1.1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fas fa-check-circle" style={{ color: 'var(--accent)' }}></i> {feature}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: 'auto', display: 'flex', gap: '20px', width: '100%' }}>
                            <button 
                                onClick={() => navigate('/blogs')} 
                                className="btn btn-outline" 
                                style={{ flex: '1', color: '#ffffff', borderColor: '#ffffff', padding: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}
                            >
                                View Blog
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

