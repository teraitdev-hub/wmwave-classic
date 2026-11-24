import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Blogs & Case Studies', path: '/blogs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="site-logo">
          <img 
            src="/assets/images/logo.png" 
            alt="WMWave" 
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/logo_horizontal.png';
            }}
          />
        </Link>

        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile contact shortcut */}
          <div className="mobile-only" style={{ display: 'none', padding: '16px', borderTop: '1px solid #e2e8f0', marginTop: '12px' }}>
            <a 
              href="tel:+919483920190"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f2b48', fontWeight: '600', textDecoration: 'none' }}
            >
              <Phone size={16} color="#0284c7" />
              <span>+91 9483920190</span>
            </a>
          </div>
        </nav>

        <div className="header-cta" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Only Call Button in Header */}
          <a 
            href="tel:+919483920190"
            className="btn btn-outline btn-sm header-phone-btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '7px', 
              padding: '7px 14px',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '6px',
              borderColor: '#0284c7',
              color: '#0284c7'
            }}
            title="Call WMWave Sales & Enquiries"
          >
            <Phone size={15} color="#0284c7" />
            <span>+91 9483920190</span>
          </a>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
