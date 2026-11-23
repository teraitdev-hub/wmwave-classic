import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';

const Products = () => {
    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">Our Products</h1>
                
                <div className="cards-grid">
                    {productCategories.map(category => (
                        <Link to={`/products/${category.id}`} key={category.id} className="card" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                            <div className="card-body" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
                                    <img src={category.image} alt={category.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '30px 20px', flexGrow: 1 }}>
                                    <h3 className="card-title" style={{ transition: 'color 0.3s', fontSize: '2rem' }}>{category.name}</h3>
                                <p className="card-text" style={{ fontSize: '1.1rem' }}>{category.description}</p>
                                <span style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>Explore Category <i className="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
