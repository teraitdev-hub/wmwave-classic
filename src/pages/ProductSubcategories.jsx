import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { productCategories } from '../data/products';

const ProductSubcategories = () => {
    const { categoryId } = useParams();
    const category = productCategories.find(c => c.id === categoryId);

    if (!category) {
        return <Navigate to="/products" />;
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">{category.name}</h1>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>{category.description}</p>
                {category.image && (
                    <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '20px', marginBottom: '40px' }}>
                        <img src={category.image} alt={category.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                )}
                
                <div className="cards-grid">
                    {category.subcategories.map(sub => (
                        <Link to={`/products/${category.id}/${sub.id}`} key={sub.id} className="card" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', overflow: 'hidden' }}>
                            <div className="card-body" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                {sub.image ? (
                                    <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
                                        <img 
                                            src={sub.image} 
                                            alt={sub.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                ) : (
                                    <div style={{ padding: '30px 20px 10px' }}>
                                        <i className={sub.icon} style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '10px' }}></i>
                                    </div>
                                )}
                                <div style={{ padding: '25px 20px', flexGrow: 1 }}>
                                    <h4 className="card-title" style={{ transition: 'color 0.3s', fontSize: '1.5rem', marginBottom: '10px' }}>{sub.name}</h4>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block' }}>View Products <i className="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSubcategories;
