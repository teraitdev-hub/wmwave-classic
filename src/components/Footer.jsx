import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>


            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo"><img src="/assets/images/logo.png" alt="WMWave Logo" loading="lazy" decoding="async" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} /></div>
                        <p>Smart Business Monitoring & Cloud Solutions</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2026 WMWave. All Rights Reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
