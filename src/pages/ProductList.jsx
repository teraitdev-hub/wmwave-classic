import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { products, productCategories } from '../data/products';

const ProductList = () => {
    const { categoryId, subcategoryId } = useParams();
    
    const category = productCategories.find(c => c.id === categoryId);
    const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
    
    if (!category || !subcategory || !products[categoryId] || !products[categoryId][subcategoryId]) {
        return <Navigate to={`/products/${categoryId || ''}`} />;
    }

    const productList = products[categoryId][subcategoryId];

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ marginBottom: '30px' }}>
                    <Link to={`/products/${categoryId}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                        <i className="fas fa-arrow-left"></i> Back to {category.name}
                    </Link>
                </div>
                <h1 className="section-title">{subcategory.name} Products</h1>
                
                <div className="cards-grid">
                    {productList.map(prod => (
                        <div className="card" key={prod.id}>
                            <div className="card-img" style={{ background: '#13213c', overflow: 'hidden', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
                                {prod.images && prod.images.length > 0 ? (
                                    <img 
                                        src={prod.images[0]} 
                                        style={{ objectFit: 'contain', width: '100%', height: '100%', padding: '10px' }} 
                                        alt={prod.name}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <i className="fas fa-box" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                                )}
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{prod.name}</h4>
                                <p className="card-text" style={{ color: '#ffffff' }}>{prod.desc || 'High-performance biometric and security solution.'}</p>
                                <Link to={`/product/${prod.id}`} className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-block', textDecoration: 'none' }}>View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
