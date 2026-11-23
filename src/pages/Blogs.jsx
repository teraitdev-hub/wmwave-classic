import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, BookOpen, X, CheckCircle } from 'lucide-react';

const blogArticles = [
  {
    id: 'biometric-attendance-case-study',
    title: 'Biometric Attendance Case Study: 90% Discrepancy Reduction in Enterprise Workforce',
    category: 'Workforce Case Study',
    date: 'February 12, 2026',
    author: 'Engineering Solutions Team',
    img: '/assets/images/blog1.png',
    summary: 'Discover how a leading manufacturing enterprise with 4,500 personnel eliminated buddy punching and reduced month-end payroll calculation time from 6 days to 3 hours using WMWave biometric push terminals.',
    content: `
      <h3>Executive Summary</h3>
      <p>A multi-site manufacturing conglomerate operating three distinct factory campuses across Karnataka struggled with persistent attendance discrepancies. The reliance on standalone legacy fingerprint clocks and manual monthly CSV exports created pervasive issues: proxy clock-ins ("buddy punching"), undetected shift swapping, and high payroll disputes.</p>
      
      <h3>The Challenge</h3>
      <ul>
        <li>Over 4,500 shop-floor workers operating on 3 rotational 8-hour shifts.</li>
        <li>Legacy devices stored records locally; network dropouts meant up to 48 hours of delayed punch data.</li>
        <li>Manual Excel reconciliation required 6 full working days every payroll cycle.</li>
        <li>Estimated financial leakage of 3.2% in unverified overtime and buddy punching.</li>
      </ul>

      <h3>The WMWave Solution</h3>
      <p>WMWave deployed 34 units of the high-durability <strong>X-990 Fingerprint & Card Terminal</strong> paired with 8 <strong>AI Face Magnum</strong> units at high-traffic turnstiles. All devices were configured with WMWave's push-data protocol, transmitting real-time encrypted punches over secure WebSocket connections directly to a centralized cloud workforce platform.</p>

      <h3>Quantifiable Results</h3>
      <ul>
        <li><strong>90% Reduction in Attendance Errors:</strong> Real-time shift validation eliminated unapproved overtime and ghost shifts.</li>
        <li><strong>Payroll Cycle Acceleration:</strong> Attendance reconciliation decreased from 6 days to under 3 hours each month.</li>
        <li><strong>Complete Anti-Passback Enforcement:</strong> Gate turnstile integration prevented unauthorized exit and re-entry during shifts.</li>
        <li><strong>Full ROI Achieved in 4 Months:</strong> Payroll leakage prevention offset the entire capital expenditure within one financial quarter.</li>
      </ul>
    `
  },
  {
    id: 'door-access-control-case-study',
    title: 'Door Access Control Case Study: Centralized Security Across 14 Enterprise Facilities',
    category: 'Physical Security',
    date: 'January 28, 2026',
    author: 'Physical Security Architecture',
    img: '/assets/images/blog2.png',
    summary: 'How an IT infrastructure corporation unified multi-door access permissions, visitor badging, and fire alarm interlocking across 14 branches from a single cloud console.',
    content: `
      <h3>Background & Context</h3>
      <p>An IT services enterprise with 14 regional delivery centers across India required strict compliance with ISO 27001 physical security controls. Server rooms, executive boardrooms, and testing labs demanded tiered access restrictions with real-time audit reporting.</p>

      <h3>Architecture Implemented</h3>
      <p>WMWave designed an integrated physical security blueprint combining <strong>SF100</strong> IP-based access controllers, <strong>F18</strong> standalone readers, and centralized cloud permissions management.</p>
      <ul>
        <li><strong>Multi-Factor Authentication:</strong> Biometric fingerprint plus encrypted HID smart cards for Tier-3 server rooms.</li>
        <li><strong>Fire Alarm Emergency Interlocking:</strong> Automated fail-safe unlock triggers on all electromagnetic door locks upon fire panel contact closure.</li>
        <li><strong>Instant Privilege Revocation:</strong> HR termination events immediately revoke card access across all 14 facilities within 2 seconds.</li>
      </ul>

      <h3>Key Outcomes</h3>
      <p>The enterprise passed their ISO 27001 physical audit with zero non-conformances. Facility managers now oversee occupancy, visitor logs, and door sensor alarms via a single unified dashboard.</p>
    `
  },
  {
    id: 'hospital-hygiene-face-recognition',
    title: 'Healthcare Case Study: Contactless AI Facial Verification for Sterile Hospital Environments',
    category: 'Healthcare & Biotech',
    date: 'December 15, 2025',
    author: 'Healthcare Systems Division',
    img: '/assets/images/blog3.png',
    summary: 'Eliminating touch points in operating theaters and ICU access corridors while enforcing strict doctor shift logging using AI Face Recognition with mask detection.',
    content: `
      <h3>Clinical Requirements</h3>
      <p>A 650-bed multi-specialty hospital needed to track attendance and restrict access to surgical suites and intensive care units without requiring medical staff to remove PPE or physically touch hardware surfaces.</p>

      <h3>Deployment Strategy</h3>
      <p>WMWave installed <strong>AI Face Vesta+POE</strong> and <strong>AI Face Magnum Lite</strong> terminals outside critical cleanrooms. Equipped with dual-lens infrared cameras and advanced algorithmic anti-spoofing, the devices recognize authorized medical personnel in under 0.3 seconds even while wearing standard surgical masks and caps.</p>

      <h3>Results</h3>
      <ul>
        <li>100% contactless access with zero surface contamination risk.</li>
        <li>Instant doctor on-call presence verification for emergency surgical rosters.</li>
        <li>Power-over-Ethernet (POE) streamlined installation inside sterile corridors without bulky external power adapters.</li>
      </ul>
    `
  },
  {
    id: 'push-data-architecture-whitepaper',
    title: 'Technical Whitepaper: Push Data Protocols over TLS 1.3 vs. Legacy Polling for Biometric IoT',
    category: 'Engineering Whitepaper',
    date: 'November 20, 2025',
    author: 'Cloud Infrastructure Team',
    img: '/assets/images/cloud_workforce.png',
    summary: 'A deep architectural dive comparing edge push protocols to legacy master-slave polling in enterprise time attendance deployments with thousands of concurrent terminals.',
    content: `
      <h3>The Demise of Legacy Polling</h3>
      <p>In traditional biometric setups, a central server sequentially polled each hardware device on the local network asking for new logs. In multi-branch setups with dynamic IPs, this required port forwarding, static IP costs, and suffered severe latency when remote network connections dropped.</p>

      <h3>The WMWave Push Architecture</h3>
      <p>WMWave terminals initiate outbound encrypted TCP/WebSocket connections to the cloud server on startup. Whenever an employee punches, the terminal immediately pushes a micro-payload containing terminal ID, employee ID, timestamp, and verification mode. If the network goes offline, punches are queued in non-volatile flash memory and pushed automatically upon reconnection with zero packet loss.</p>
    `
  },
  {
    id: 'vehicle-boom-barrier-cycle-ratings',
    title: 'Industrial Guide: Selecting High-Cycle Boom Barriers & Anti-Collision Radar for IT Parks',
    category: 'Perimeter Automation',
    date: 'October 14, 2025',
    author: 'Automation Systems Group',
    img: '/assets/images/boom_barrier_service.png',
    summary: 'Crucial engineering criteria when specifying commercial vehicle boom barriers: brushless DC motors, 100% duty cycle ratings, and dual-safety radar detection.',
    content: `
      <h3>High-Cycle Traffic Demands</h3>
      <p>Commercial IT parks and manufacturing gates experience peak rush periods where barrier arms must raise and lower hundreds of times per hour. Standard AC-motor barriers overheat and fail under continuous duty cycles.</p>

      <h3>Brushless DC (BLDC) Advantage</h3>
      <p>Our <strong>BG-180-BDC</strong> and <strong>BGL-100</strong> barrier systems incorporate brushless DC servo motors capable of over 5,000,000 maintenance-free cycles. Combined with high-frequency anti-collision radar, vehicles and pedestrians are protected from accidental arm contact even in adverse weather conditions.</p>
    `
  },
  {
    id: 'hrms-payroll-integration-guide',
    title: 'Enterprise Integration: Bridging Biometric Push Hardware with SAP, Darwinbox, and Zoho People',
    category: 'Software Integration',
    date: 'September 05, 2025',
    author: 'API Engineering Team',
    img: '/assets/images/analytics_dashboard.png',
    summary: 'Practical implementation patterns for consuming biometric attendance webhooks and feeding normalized timecard data into enterprise payroll systems.',
    content: `
      <h3>Eliminating Custom Middleware</h3>
      <p>Many enterprises maintain fragile custom scripts to scrape attendance tables. WMWave's cloud platform provides robust REST APIs and configurable Webhooks that publish punch events directly into third-party HRMS endpoints.</p>
      <p>Pre-built connector configurations support automatic shift rounding, grace period deduction, sandwich leave calculations, and automated monthly salary sheet generation.</p>
    `
  }
];

const Blogs = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">Corporate Insights</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '16px' }}>
            Case Studies, Whitepapers & Industry Guides
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '800px', lineHeight: '1.7' }}>
            In-depth technical documentation, real-world customer deployment studies, and best practices for enterprise workforce management and physical security engineering.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '30px' }}>
            {blogArticles.map((article) => (
              <div key={article.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden', background: '#f8fafc', position: 'relative' }}>
                  <img 
                    src={article.img} 
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/assets/images/blog1.png'; }}
                  />
                  <span 
                    className="badge badge-primary" 
                    style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                  >
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.8125rem', color: '#64748b', marginBottom: '10px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {article.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} /> {article.author}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#0f2b48', marginBottom: '12px', lineHeight: '1.4' }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {article.summary}
                  </p>

                  <button 
                    onClick={() => setActiveArticle(article)}
                    className="btn btn-outline btn-sm"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
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
          onClick={() => setActiveArticle(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <div>
                <span className="badge badge-primary">{activeArticle.category}</span>
                <span style={{ fontSize: '0.8125rem', color: '#64748b', marginLeft: '12px' }}>{activeArticle.date}</span>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: '32px', overflowY: 'auto', flex: 1, lineHeight: '1.8', color: '#334155' }}>
              <h2 style={{ fontSize: '1.75rem', color: '#0f2b48', marginBottom: '20px' }}>
                {activeArticle.title}
              </h2>

              <div 
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              />
            </div>

            <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Want to implement this solution in your facility?
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setActiveArticle(null)} className="btn btn-secondary btn-sm">Close</button>
                <Link to="/contact" onClick={() => setActiveArticle(null)} className="btn btn-primary btn-sm">Contact Our Engineers</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
