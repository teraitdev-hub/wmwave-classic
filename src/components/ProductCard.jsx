import React from 'react';
import { Check, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onSelect }) => {
  const imgSrc = (product.images && product.images.length > 0) 
    ? product.images[0] 
    : '/assets/images/prod_x990_v2.jpg';

  const categoryLabel = product.category || 'Hardware';

  return (
    <div 
      className="card card-hover" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20px',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Top Header: Category & Model */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <span className="badge badge-primary">
          {categoryLabel}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>
          #{product.id}
        </span>
      </div>

      {/* Product Image */}
      <div 
        style={{
          height: '170px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          padding: '8px',
          background: '#f8fafc',
          borderRadius: '6px',
          border: '1px solid #f1f5f9'
        }}
      >
        <img 
          src={imgSrc} 
          alt={product.name}
          loading="lazy"
          style={{
            maxHeight: '150px',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/images/logo.png';
          }}
        />
      </div>

      {/* Title & Type */}
      <h3 style={{ fontSize: '1.15rem', color: '#0f2b48', marginBottom: '6px' }}>
        {product.name}
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#64748b', minHeight: '38px', marginBottom: '14px', lineHeight: '1.4' }}>
        {product.type || product.desc?.slice(0, 75) || 'Enterprise attendance & access hardware solution.'}
      </p>

      {/* Highlights (up to 3) */}
      <div style={{ flex: 1, marginBottom: '16px' }}>
        {product.highlights && product.highlights.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {product.highlights.slice(0, 3).map((item, idx) => (
              <li 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '6px', 
                  fontSize: '0.8125rem', 
                  color: '#334155',
                  lineHeight: '1.35'
                }}
              >
                <Check size={14} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => onSelect(product)}
          style={{ width: '100%' }}
        >
          <Info size={13} /> Specs
        </button>
        <Link 
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="btn btn-primary btn-sm"
          style={{ width: '100%' }}
        >
          <Mail size={13} /> Enquire
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
