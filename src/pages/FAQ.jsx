import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, HelpCircle, PhoneCall, Mail } from 'lucide-react';

const faqList = [
  {
    category: 'Cloud Platform & Real-Time Sync',
    q: 'How does the cloud platform synchronize data with on-premise biometric terminals?',
    a: 'Our hardware terminals utilize an outbound push-based protocol over secure TLS 1.2/1.3 WebSocket and HTTPS connections. Terminals immediately push attendance punches and door access logs to the cloud in real-time as events occur (< 0.5s), eliminating the need for periodic server polling or public static IP configurations at remote branch locations.'
  },
  {
    category: 'Cloud Platform & Real-Time Sync',
    q: 'What happens if a branch office loses internet connectivity?',
    a: 'All WMWave biometric readers and access controllers are equipped with high-capacity non-volatile flash memory (storing between 50,000 to 200,000 offline punch records depending on the model). The device continues normal offline biometric verification and door relay unlocking. Once internet connectivity is restored, all cached records are automatically synchronized to the cloud in chronological sequence with zero data loss.'
  },
  {
    category: 'Hardware & Edge Devices',
    q: 'Can the biometric terminals function in harsh or dusty factory environments?',
    a: 'Yes. Our industrial-grade terminals (such as the X-990 and BGL barrier controllers) are built with sealed IP65-rated optical sensors, conformal-coated internal PCBs, and wide operating temperature tolerances (-10°C to +50°C), making them resilient against factory dust, vibrations, and humidity.'
  },
  {
    category: 'Hardware & Edge Devices',
    q: 'What is the verification speed and accuracy of your AI Face Recognition terminals?',
    a: 'WMWave AI Face terminals (such as the AI Face Magnum and Vesta) feature dual-lens visible light and near-infrared cameras with living body anti-spoofing detection. Verification takes less than 0.3 seconds at distances of up to 2.5 meters, with a False Acceptance Rate (FAR) under 0.0001% and False Rejection Rate (FRR) under 1%.'
  },
  {
    category: 'Security, Encryption & Biometric Privacy',
    q: 'Are raw biometric fingerprints or facial photographs stored on the cloud?',
    a: 'No. Raw biometric photos and fingerprint scans are never stored or transmitted. The device extracts characteristic minutiae points and converts them into irreversible proprietary mathematical hash templates (ANSI/ISO compliant). These hash values cannot be reverse-engineered to reconstruct an individual\'s actual biometric image, ensuring complete compliance with global data privacy frameworks.'
  },
  {
    category: 'Security, Encryption & Biometric Privacy',
    q: 'What network and data security standards does the platform adhere to?',
    a: 'All network transmissions utilize TLS 1.3 cryptographic protocols with mandatory certificate pinning. Cloud databases utilize AES-256 encryption at rest. In addition, role-based access control (RBAC), multi-factor authentication (MFA) for administrators, and immutable audit logging are enforced across the platform.'
  },
  {
    category: 'Multi-Branch & Third-Party ERP Integration',
    q: 'Can WMWave integrate directly with SAP, Darwinbox, Zoho People, and Oracle?',
    a: 'Yes. WMWave provides open RESTful APIs, scheduled automated database exports (SQL Server, MySQL, PostgreSQL), and real-time Webhook subscriptions. Attendance logs, overtime calculations, late-in/early-out flags, and shift deductions can be piped directly into any modern or legacy HRMS/ERP payroll system.'
  },
  {
    category: 'Multi-Branch & Third-Party ERP Integration',
    q: 'How are multi-branch shifts, rotational rosters, and overtime calculated?',
    a: 'The cloud platform includes a comprehensive shift management engine supporting multi-branch shift rosters, night shifts extending past midnight, dynamic break deductions, sandwich weekend policies, and custom overtime rules. Administrators configure rules centrally, and payroll reports are generated automatically at the end of each billing cycle.'
  },
  {
    category: 'Warranty, SLA & Deployment Services',
    q: 'What warranty and on-site support coverage is provided?',
    a: 'All WMWave hardware products come with a comprehensive 12-month standard manufacturer warranty covering hardware replacement and firmware support. Extended warranty programs (up to 36 months) and Annual Maintenance Contracts (AMC) with guaranteed on-site SLA response times are available for enterprise accounts.'
  },
  {
    category: 'Warranty, SLA & Deployment Services',
    q: 'Do you offer on-site installation, wiring, and barrier civil foundation services?',
    a: 'Yes. Our field engineering teams and certified regional channel partners provide complete turnkey installation, including cable laying, optical sensor calibration, concrete civil foundation work for vehicle boom barriers, and fire alarm interlocking configuration.'
  }
];

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([0, 1]); // First two open by default
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cloud Platform & Real-Time Sync', 'Hardware & Edge Devices', 'Security, Encryption & Biometric Privacy', 'Multi-Branch & Third-Party ERP Integration', 'Warranty, SLA & Deployment Services'];

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = useMemo(() => {
    return faqList.filter(item => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCat) return false;

      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        return item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">Help & Knowledge Base</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '800px', lineHeight: '1.7' }}>
            Technical specifications, cloud synchronization protocols, network security standards, and deployment guidelines for WMWave systems.
          </p>

          {/* Search bar */}
          <div style={{ marginTop: '24px', maxWidth: '640px', position: 'relative' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} 
            />
            <input 
              type="text"
              className="form-control"
              placeholder="Search questions by keyword (e.g. offline, SAP, encryption, warranty)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '42px', height: '48px', fontSize: '0.95rem' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  border: selectedCategory === cat ? '1px solid #0f2b48' : '1px solid #e2e8f0',
                  backgroundColor: selectedCategory === cat ? '#0f2b48' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div 
                  key={idx} 
                  className="card" 
                  style={{ 
                    padding: 0, 
                    overflow: 'hidden',
                    borderColor: isOpen ? '#94a3b8' : '#e2e8f0',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <span className="badge badge-secondary" style={{ marginBottom: '6px', fontSize: '0.7rem' }}>
                        {faq.category}
                      </span>
                      <h3 style={{ fontSize: '1.05rem', color: '#0f2b48', fontWeight: '700', margin: 0 }}>
                        {faq.q}
                      </h3>
                    </div>
                    <div style={{ color: '#0284c7', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                      <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.8', margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p style={{ color: '#64748b' }}>No questions found matching your search. Please reach out to our support team.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="card" style={{ marginTop: '48px', backgroundColor: '#f0f9ff', borderColor: '#bae6fd', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#0f2b48', marginBottom: '8px' }}>
              Have Specific Technical or Procurement Questions?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 20px auto' }}>
              Our Bengaluru technical team provides direct pre-sales consultations, site compatibility checks, and compliance documentation.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919591469969" className="btn btn-primary btn-sm">
                <PhoneCall size={14} /> Call Support: +91 9591469969
              </a>
              <Link to="/contact" className="btn btn-secondary btn-sm">
                Submit Technical Query
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
