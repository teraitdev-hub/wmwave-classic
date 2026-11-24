import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: About */}
            <div className="footer-col">
              <div style={{ marginBottom: '18px' }}>
                <img 
                  src="/assets/images/logo.png" 
                  alt="WMWave" 
                  style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/logo_horizontal.png';
                  }}
                />
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0', lineHeight: '1.7' }}>
                WMWave is a premier provider of enterprise biometric attendance systems, facial recognition terminals, access control, and automated barrier solutions. Engineered for seamless cloud synchronization and corporate security.
              </p>
            </div>

            {/* Col 2: Solutions */}
            <div className="footer-col">
              <h4>Solutions & Services</h4>
              <ul>
                <li><Link to="/services">Cloud Attendance Management</Link></li>
                <li><Link to="/services">Centralized Access Control</Link></li>
                <li><Link to="/services">Security & Gate Automation</Link></li>
                <li><Link to="/services">Workforce & HRMS Analytics</Link></li>
                <li><Link to="/services">Cloud Visitor Management</Link></li>
                <li><Link to="/services">Automated Canteen Management</Link></li>
              </ul>
            </div>

            {/* Col 3: Product Hardware */}
            <div className="footer-col">
              <h4>Hardware Catalog</h4>
              <ul>
                <li><Link to="/products?cat=fingerprint">Fingerprint Terminals</Link></li>
                <li><Link to="/products?cat=face-recognition">AI Face Recognition</Link></li>
                <li><Link to="/products?cat=qr-reader">QR Code Attendance</Link></li>
                <li><Link to="/products?cat=boom-barrier">Boom Barriers</Link></li>
                <li><Link to="/products?cat=metal-detector">Metal Detectors</Link></li>
                <li><Link to="/products?cat=flap-barrier">Flap Barriers & Turnstiles</Link></li>
              </ul>
            </div>

            {/* Col 4: Corporate Office */}
            <div className="footer-col">
              <h4>Corporate Office</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                    No. 11, Bharani, 1st Cross, 9th Main, Chairman Layout, Banaswadi, Bengaluru, Karnataka, 560043, India
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <a href="tel:+919483920190" style={{ color: '#cbd5e1' }}>+91 9483920190 (Enquiries)</a>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <a href="tel:+917348838833" style={{ color: '#cbd5e1' }}>+91 7348838833 (Sales)</a>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <a href="tel:+919591469969" style={{ color: '#cbd5e1' }}>+91 9591469969 (Support)</a>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <a href="mailto:enquiry@wmwave.com" style={{ color: '#cbd5e1' }}>enquiry@wmwave.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ paddingRight: '85px' }}>
          <p style={{ margin: 0, color: '#64748b' }}>
            &copy; {new Date().getFullYear()} WMWave Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/products">All Products</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
