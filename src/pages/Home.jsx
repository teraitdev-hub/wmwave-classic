import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Building2, 
  Factory, 
  GraduationCap, 
  Hospital, 
  Truck, 
  Landmark,
  ChevronRight,
  Server,
  FileSpreadsheet
} from 'lucide-react';
import { getAllProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const allProducts = getAllProducts();
  
  // Select 6 flagship products across categories
  const featuredIds = ['x-990', 'aiface-magnum', 'sf-100', 'bgl-100', 'd4006', 'fb-e-2000-series'];
  const featuredProducts = allProducts.filter(p => featuredIds.includes(p.id)).slice(0, 6);

  const industries = [
    { name: 'Corporate & IT Parks', icon: Building2, desc: 'Seamless biometric multi-door access control and flexible shift attendance.' },
    { name: 'Manufacturing & Plants', icon: Factory, desc: 'Ruggedized hardware, rapid shift turnover, and automated canteen token integration.' },
    { name: 'Healthcare & Hospitals', icon: Hospital, desc: 'Contactless face recognition and sanitized touchless entry for sterile zones.' },
    { name: 'Educational Institutions', icon: GraduationCap, desc: 'Automated student presence tracking, SMS guardian alerts, and campus gates.' },
    { name: 'Warehouses & Logistics', icon: Truck, desc: 'High-speed boom barriers for vehicle bays and perimeter security turnstiles.' },
    { name: 'Government & Defense', icon: Landmark, desc: 'High-security multi-factor authentication and tamper-proof audit trails.' }
  ];

  const solutions = [
    {
      title: 'Cloud Attendance Management',
      desc: 'Centralize multi-branch employee attendance with instant push-based log syncing and shift scheduling.',
      link: '/services',
      img: '/assets/images/service_new_attendance.jpg'
    },
    {
      title: 'Centralized Access Control',
      desc: 'Enforce real-time door lock relays, anti-passback policies, and multi-credential door access policies.',
      link: '/services',
      img: '/assets/images/service_new_access.jpg'
    },
    {
      title: 'Vehicle Boom Barriers & Radar',
      desc: 'Heavy-duty automatic boom barriers with loop detectors and infrared photocells for vehicle gates.',
      link: '/services',
      img: '/assets/images/boom_barrier_service.png'
    },
    {
      title: 'Pedestrian Flap Barriers & Turnstiles',
      desc: 'Stainless steel turnstiles and rapid speed gates engineered for high-throughput lobby security.',
      link: '/services',
      img: '/assets/images/sub_flap_barrier_indian.jpg'
    },
    {
      title: 'Walk-Through Metal Detectors',
      desc: 'Multi-zone security archways with pinpoint sensitivity for event, transport, and facility checkpoints.',
      link: '/services',
      img: '/assets/images/sub_metal_detector_indian.jpg'
    },
    {
      title: 'Payroll & HRMS Integration',
      desc: 'Direct REST API integration and automated CSV/database synchronization with SAP, Darwinbox, and Zoho.',
      link: '/services',
      img: '/assets/images/analytics_dashboard.png'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#ffffff', padding: '60px 0 50px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Enterprise Workforce & Physical Security</span>
              <h1 style={{ fontSize: '2.75rem', color: '#0f2b48', lineHeight: '1.2', marginBottom: '20px' }}>
                Corporate Biometric Systems & Cloud Access Infrastructure
              </h1>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
                WMWave provides enterprise-grade biometric time attendance, AI facial recognition terminals, automated barrier gates, and secure cloud synchronization engineered for zero downtime and effortless multi-branch scalability.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
                <Link to="/products" className="btn btn-primary btn-lg">
                  <span>Browse All 46 Products</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  <span>Request Corporate Quote</span>
                </Link>
              </div>

              {/* Key Trust Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f2b48' }}>46+</div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Certified Hardware Models</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f2b48' }}>&lt; 0.5s</div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Verification Speed</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f2b48' }}>99.9%</div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Platform Uptime SLA</div>
                </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div>
              <div 
                style={{ 
                  border: '1px solid #cbd5e1', 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
                  background: '#f8fafc' 
                }}
              >
                <img 
                  src="/assets/images/hero_essl_attendance.jpg" 
                  alt="eSSL Biometric Attendance Terminal in Enterprise Facility" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => { e.target.src = '/assets/images/about_workforce_new.jpg'; }}
                />
                <div style={{ padding: '18px 22px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0f2b48' }}>
                      Enterprise eSSL Biometric Deployment
                    </span>
                    <span className="badge badge-success">Live Verification</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px', margin: 0 }}>
                    High-accuracy optical fingerprint and RFID access terminal integrated with central cloud attendance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Sector Expertise</span>
            <h2 className="section-title">Engineered for Critical Environments</h2>
            <p className="section-subtitle">
              Our hardware and cloud platforms are deployed across diverse industries with stringent compliance, high throughput, and demanding durability requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <div key={i} className="card card-hover" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px', background: '#e0f2fe', borderRadius: '6px', color: '#0284c7' }}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: '#0f2b48', marginBottom: '6px' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions & Core Systems */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Enterprise Solutions</span>
            <h2 className="section-title">Unified Access & Workforce Ecosystem</h2>
            <p className="section-subtitle">
              From biometric edge devices to centralized enterprise cloud intelligence, WMWave bridges physical security and administrative operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {solutions.map((sol, idx) => (
              <div key={idx} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '160px', overflow: 'hidden', borderRadius: '6px', marginBottom: '16px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                  <img 
                    src={sol.img} 
                    alt={sol.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/assets/images/logo.png'; }}
                  />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0f2b48', marginBottom: '8px' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', flex: 1, marginBottom: '16px' }}>{sol.desc}</p>
                <Link to={sol.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '0.875rem' }}>
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hardware Catalog */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-eyebrow">Certified Hardware</span>
              <h2 className="section-title" style={{ margin: 0 }}>Featured Enterprise Devices</h2>
            </div>
            <Link to="/products" className="btn btn-outline">
              <span>View Full 46-Product Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={setSelectedProduct} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise System Architecture */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Cloud Architecture</span>
            <h2 className="section-title">Push-Based Real-Time Synchronization</h2>
            <p className="section-subtitle">
              How WMWave edge biometric terminals reliably communicate with enterprise cloud infrastructure and third-party ERPs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <div className="card" style={{ borderTop: '4px solid #0f2b48' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: '#0284c7', marginBottom: '8px' }}>STEP 01</div>
              <h4 style={{ fontSize: '1rem', color: '#0f2b48', marginBottom: '8px' }}>Edge Identification</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                Employee authenticates via 500 DPI optical fingerprint, contactless AI face match, or dynamic QR code in under 0.5s.
              </p>
            </div>

            <div className="card" style={{ borderTop: '4px solid #0284c7' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: '#0284c7', marginBottom: '8px' }}>STEP 02</div>
              <h4 style={{ fontSize: '1rem', color: '#0f2b48', marginBottom: '8px' }}>Encrypted Push Protocol</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                Hardware instantly pushes the punch event over secure TLS 1.3 socket to central server without local polling bottlenecks.
              </p>
            </div>

            <div className="card" style={{ borderTop: '4px solid #0f2b48' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: '#0284c7', marginBottom: '8px' }}>STEP 03</div>
              <h4 style={{ fontSize: '1rem', color: '#0f2b48', marginBottom: '8px' }}>Central Engine Processing</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                Multi-branch shifts, overtime calculations, grace periods, and leave rules are applied instantaneously on the cloud.
              </p>
            </div>

            <div className="card" style={{ borderTop: '4px solid #0284c7' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: '#0284c7', marginBottom: '8px' }}>STEP 04</div>
              <h4 style={{ fontSize: '1rem', color: '#0f2b48', marginBottom: '8px' }}>HRMS / ERP Sync</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                Ready-to-process payroll data feeds seamlessly into SAP, Darwinbox, Zoho People, and legacy database systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section style={{ backgroundColor: '#0f2b48', color: '#ffffff', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2.1rem', marginBottom: '16px' }}>
            Ready to Modernize Your Enterprise Workforce Infrastructure?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Speak directly with our hardware engineering and cloud solutions team. We provide hardware deployment consultations, on-site feasibility assessments, and customized API integrations.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">
              Contact Sales Team
            </Link>
            <Link to="/products" className="btn btn-outline-white btn-lg">
              Explore Hardware Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Specifications Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Home;
