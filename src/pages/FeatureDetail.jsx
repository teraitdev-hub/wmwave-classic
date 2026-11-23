import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import { featureData } from '../data/featureData';

const FeatureDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const feature = featureData[id];

    if (!feature) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Feature Not Found</h2>
                <Link to="/#about" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/#about" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>
                
                <div className="card feature-detail-card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="feature-detail-media" style={{ flex: '1.2', minWidth: '300px', backgroundColor: 'transparent', borderRadius: '15px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageWithFallback src={feature.image} style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', borderRadius: '15px', display: 'block', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)' }} alt={feature.name} loading="eager" fetchPriority="high" />
                    </div>
                    
                    <div className="feature-detail-info" style={{ flex: '1.2', minWidth: '280px' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '15px' }}>
                            {feature.icon === 'fa-file-invoice-rupee' ? (
                                <span className="fa-stack" style={{ fontSize: '1.5rem', width: '2em', height: '2em', lineHeight: '2em', position: 'relative', top: '-0.2em' }}>
                                    <i className="fas fa-file-invoice fa-stack-2x"></i>
                                    <i className="fas fa-indian-rupee-sign fa-stack-1x" style={{ color: '#fff', fontSize: '0.8em', marginTop: '0.2em' }}></i>
                                </span>
                            ) : (
                                <i className={`fas ${feature.icon}`}></i>
                            )}
                        </div>
                        <h1 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '2.5rem' }}>{feature.name}</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#ffffff', lineHeight: '1.6' }}>{feature.desc}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Feature Overview</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#ffffff', lineHeight: '1.8' }}>{feature.details}</p>

                        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                            <Link to="/services" className="btn btn-outline" style={{ flex: '1', color: '#ffffff', borderColor: '#ffffff', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>View Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetail;
