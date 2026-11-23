import React, { useEffect } from 'react';
import { X, CheckCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const imgSrc = (product.images && product.images.length > 0) 
    ? product.images[0] 
    : '/assets/images/prod_x990_v2.jpg';

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '8px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #cbd5e1',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f8fafc'
          }}
        >
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '4px' }}>
              {product.category || 'Enterprise Hardware'}
            </span>
            <h2 style={{ fontSize: '1.4rem', margin: 0, color: '#0f2b48' }}>
              {product.name}
            </h2>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '4px',
              color: '#64748b'
            }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', marginBottom: '24px' }}>
            <div 
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                padding: '16px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={imgSrc} 
                alt={product.name}
                style={{ maxHeight: '200px', objectFit: 'contain' }}
                onError={(e) => { e.target.src = '/assets/images/logo.png'; }}
              />
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '12px', textAlign: 'center' }}>
                Model Code: <strong>{product.id}</strong>
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', color: '#0f2b48', marginBottom: '8px' }}>Product Overview</h4>
              <p style={{ fontSize: '0.925rem', color: '#334155', marginBottom: '16px', lineHeight: '1.6' }}>
                {product.desc || product.type || `${product.name} is a high-reliability hardware terminal engineered for enterprise workforce attendance and automated access control.`}
              </p>

              {product.highlights && product.highlights.length > 0 && (
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: '#0f2b48', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Key Features
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                    {product.highlights.slice(0, 6).map((hl, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#475569' }}>
                        <CheckCircle size={15} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '1.05rem', color: '#0f2b48', marginBottom: '12px', paddingBottom: '6px', borderBottom: '2px solid #0284c7' }}>
                Technical Specifications
              </h4>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <tbody>
                  {Object.entries(product.specs).map(([key, val], idx) => (
                    <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '8px 12px', fontWeight: '600', color: '#334155', width: '38%' }}>
                        {key}
                      </td>
                      <td style={{ padding: '8px 12px', color: '#475569' }}>
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div 
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #e2e8f0',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Direct assistance: <a href="tel:+917348838833" style={{ color: '#0284c7', fontWeight: '600' }}>+91 7348838833</a>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
            <Link 
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="btn btn-primary btn-sm"
              onClick={onClose}
            >
              <Mail size={14} /> Request Quote / Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
