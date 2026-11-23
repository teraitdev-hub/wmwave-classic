import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchQuery.toLowerCase().trim();
            if (!query) return;

            // In a real app with routing, search might navigate to a results page
            if (['biometric', 'fingerprint', 'face', 'attendance'].some(k => query.includes(k))) {
                navigate('/services');
            } else if (['product', 'x990', 'f18', 'boom', 'barrier'].some(k => query.includes(k))) {
                navigate('/products');
            } else if (['api', 'encryption', 'offline', 'sync', 'sso', 'firmware', 'backup', 'latency', 'payroll', 'multi-location', 'cloud', 'data'].some(k => query.includes(k))) {
                navigate('/faq');
            } else {
                alert('No direct match found for: ' + query + '. Try browsing Services or Products.');
            }
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/assets/images/logo.png" alt="WMWave Logo" fetchPriority="high" decoding="async" className="header-logo-img" />
                </Link>
                
                <div 
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    role="button"
                    tabIndex={0}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {isMobileMenuOpen && (
                    <div 
                        className="mobile-menu-overlay active" 
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                )}

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
                    <li><Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
                <div className="search-container hide-mobile">
                    <i className="fas fa-search search-icon"></i>
                    <input 
                        type="text" 
                        className="search-input" 
                        id="searchInput" 
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleSearch}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
