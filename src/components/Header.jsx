import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, Shield, ChevronRight } from 'lucide-react';

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
    <header>
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> Mon - Sat: 9:00 AM - 6:30 PM IST
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} /> Enterprise-Grade Hardware & Cloud Security
            </span>
          </div>
          <div className="header-topbar-links">
            <a href="tel:+919483920190">
              <Phone size={14} /> +91 9483920190
            </a>
            <a href="mailto:enquiry@wmwave.com">
              <Mail size={14} /> enquiry@wmwave.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="site-header">
        <div className="container">
          <Link to="/" className="site-logo">
            <img 
              src="/assets/images/logo_horizontal.png" 
              alt="WMWave" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/images/logo.png';
              }}
            />
            <div className="site-logo-text">
              <span className="site-logo-title">WMWave</span>
              <span className="site-logo-tagline">Workforce & Security Systems</span>
            </div>
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
            {mobileMenuOpen && (
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link 
                  to="/contact" 
                  className="btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            )}
          </nav>

          <div className="header-cta">
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ display: 'none', '@media (minWidth: 992px)': { display: 'inline-flex' } }}>
              <span>Request Quote</span>
              <ChevronRight size={14} />
            </Link>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
