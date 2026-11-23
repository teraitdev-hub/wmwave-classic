import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Cpu, 
  CheckCircle, 
  Building, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Lock,
  ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">About WMWave</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '16px' }}>
            Enterprise Workforce & Physical Security Technology
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '800px', lineHeight: '1.7' }}>
            We design, distribute, and support enterprise-grade biometric hardware, high-throughput automated barriers, and push-based cloud workforce infrastructure for mission-critical facilities across India.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', color: '#0f2b48', marginBottom: '20px' }}>
                Engineering Reliability for Modern Enterprises
              </h2>
              <p style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
                Managing a distributed workforce is no longer just about recording morning clock-ins. Modern organizations require complete real-time visibility into staff movements, automated access control for high-security zones, frictionless visitor handling, and synchronized operational data across multiple geographical branches.
              </p>
              <p style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.8', marginBottom: '24px' }}>
                WMWave bridges the gap between precision physical security hardware and robust enterprise software. By deploying edge-intelligent terminals that push verified transactions in real-time over TLS-encrypted sockets, our systems eliminate manual attendance reconciliation, eradicate buddy punching, and streamline payroll processing.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', margin: 0 }}>Push Data Protocol</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>Instant socket syncing without local network polling.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', margin: 0 }}>46+ Certified Devices</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>From biometric readers to industrial barrier gates.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', margin: 0 }}>Multi-Branch Centralization</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>Single pane of glass for headquarters & remote offices.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', margin: 0 }}>Seamless ERP Connectors</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>Ready-to-use feeds for SAP, Darwinbox, Zoho & Tally.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Image / Facility Card */}
            <div>
              <div className="card" style={{ padding: '16px' }}>
                <img 
                  src="/assets/images/about_workforce_new.jpg" 
                  alt="WMWave Corporate Office" 
                  style={{ width: '100%', borderRadius: '6px', marginBottom: '16px' }}
                />
                <div style={{ padding: '8px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0f2b48', marginBottom: '6px' }}>
                    Bengaluru Operations & Technology Hub
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                    Our primary integration engineering facility, warehouse inventory, and customer support center are located in Banaswadi, Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Foundation</span>
            <h2 className="section-title">Core Engineering Principles</h2>
            <p className="section-subtitle">
              Every device model and software module is evaluated against strict industrial criteria before commercial deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div className="card">
              <div style={{ width: '44px', height: '44px', background: '#e0f2fe', color: '#0284c7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0f2b48', marginBottom: '10px' }}>Hardware Longevity & MTBF</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.7' }}>
                Our boom barrier motors, flap turnstiles, and optical fingerprint sensors are certified for millions of operational cycles under demanding factory, heat, and high-dust environments.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', background: '#e0f2fe', color: '#0284c7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0f2b48', marginBottom: '10px' }}>Data Security & Privacy</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.7' }}>
                Biometric templates are stored as non-reversible mathematical hash values. All data in transit uses TLS 1.3 encryption, and data at rest is fortified with AES-256 standards.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', background: '#e0f2fe', color: '#0284c7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0f2b48', marginBottom: '10px' }}>Standardized Compliance</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.7' }}>
                Compliant with ISO 9001 quality management benchmarks, CE electrical safety directives, and FCC electromagnetic compatibility regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Support SLA */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            <div className="card" style={{ borderLeft: '4px solid #0f2b48' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f2b48', marginBottom: '14px' }}>
                Enterprise Deployment & Turnkey Support
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                From single-site corporate facilities to multi-state manufacturing networks with tens of thousands of staff, WMWave provides complete turnkey deployment services:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <CheckCircle size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <span>On-site site survey, wiring inspection & barrier foundation planning</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <CheckCircle size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <span>Hardware mounting, LAN/WiFi configuration & push server pairing</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <CheckCircle size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <span>HRMS payroll software bridge setup and testing</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <CheckCircle size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <span>Dedicated phone & ticketed SLA support desk</span>
                </li>
              </ul>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #0284c7' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f2b48', marginBottom: '14px' }}>
                Corporate Facility & Logistics
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Head Office:</strong> No. 11, Bharani, 1st Cross, 9th Main, Chairman Layout, Banaswadi, Bengaluru, Karnataka, 560043, India
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Operational Hours:</strong> Monday through Saturday, 9:00 AM to 6:30 PM IST
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <PhoneCall size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Direct Contacts:</strong> Enquiry: +91 9483920190 | Sales: +91 7348838833 | Tech Support: +91 9591469969
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Speak with our Solutions Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
