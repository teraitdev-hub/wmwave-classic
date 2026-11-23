import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Shield, 
  BarChart3, 
  Users, 
  Coffee, 
  Lock,
  Layers,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  'cloud-attendance': Clock,
  'cloud-access-control': Lock,
  'cloud-security-monitoring': Shield,
  'workforce-analytics': BarChart3,
  'cloud-visitor-management': Users,
  'cloud-canteen-management': Coffee
};

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];
  const ActiveIcon = iconMap[activeService.id] || Layers;

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">Enterprise Services</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '16px' }}>
            Cloud Workforce & Physical Access Services
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '800px', lineHeight: '1.7' }}>
            Fully managed cloud modules engineered to integrate seamlessly with our certified hardware terminals, automating workforce administration and securing critical infrastructure.
          </p>
        </div>
      </section>

      {/* Main Services Navigation & Detail View */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '36px', alignItems: 'flex-start' }}>
            {/* Left Sidebar: Service Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ padding: '12px 16px', background: '#0f2b48', color: '#ffffff', borderRadius: '6px', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.04em' }}>
                SERVICE MODULES
              </div>
              {servicesData.map((svc) => {
                const IconComponent = iconMap[svc.id] || Layers;
                const isSelected = svc.id === activeServiceId;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceId(svc.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      borderRadius: '6px',
                      border: isSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                      backgroundColor: isSelected ? '#e0f2fe' : '#ffffff',
                      color: isSelected ? '#0369a1' : '#334155',
                      fontWeight: isSelected ? '700' : '500',
                      fontSize: '0.925rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    <IconComponent size={20} style={{ color: isSelected ? '#0284c7' : '#64748b', flexShrink: 0 }} />
                    <span style={{ flex: 1 }}>{svc.name}</span>
                    <ChevronRight size={16} style={{ opacity: isSelected ? 1 : 0.4 }} />
                  </button>
                );
              })}

              <div className="card" style={{ marginTop: '20px', backgroundColor: '#f8fafc', padding: '20px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', marginBottom: '8px' }}>
                  Custom Solution Needed?
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '16px', lineHeight: '1.6' }}>
                  We provide tailored firmware, custom API endpoints, and private cloud deployments for large multi-site corporations.
                </p>
                <Link to="/contact" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                  Speak with an Architect
                </Link>
              </div>
            </div>

            {/* Right Panel: Active Service Details */}
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ padding: '12px', background: '#e0f2fe', borderRadius: '8px', color: '#0284c7' }}>
                  <ActiveIcon size={32} />
                </div>
                <div>
                  <span className="badge badge-primary">Enterprise Service Module</span>
                  <h2 style={{ fontSize: '1.85rem', color: '#0f2b48', marginTop: '4px' }}>
                    {activeService.name}
                  </h2>
                </div>
              </div>

              {/* Service Hero Image */}
              {activeService.img && (
                <div style={{ height: '240px', overflow: 'hidden', borderRadius: '6px', margin: '20px 0', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <img 
                    src={activeService.img} 
                    alt={activeService.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/assets/images/about_workforce_new.jpg'; }}
                  />
                </div>
              )}

              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.8', marginBottom: '24px' }}>
                {activeService.fullDesc || activeService.shortDesc}
              </p>

              {/* Operational Workflow */}
              {activeService.howItWorks && (
                <div style={{ padding: '18px', backgroundColor: '#f8fafc', borderRadius: '6px', borderLeft: '4px solid #0284c7', marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Operational Workflow
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: '#475569', margin: 0, lineHeight: '1.6' }}>
                    {activeService.howItWorks}
                  </p>
                </div>
              )}

              {/* Key Capabilities Grid */}
              <h3 style={{ fontSize: '1.25rem', color: '#0f2b48', marginBottom: '16px' }}>
                Key Functional Capabilities
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '28px' }}>
                {activeService.features && activeService.features.map((feat, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 14px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                    <CheckCircle2 size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: '#334155', fontWeight: '500' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Benefits & Industries */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', marginBottom: '32px' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', marginBottom: '6px' }}>Business Value</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6' }}>
                    {activeService.benefits}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#0f2b48', marginBottom: '6px' }}>Recommended Sectors</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.6' }}>
                    {activeService.industries}
                  </p>
                </div>
              </div>

              {/* CTA Row */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Link to={`/contact?service=${encodeURIComponent(activeService.name)}`} className="btn btn-primary">
                  Request Solution Demonstration
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  View Compatible Hardware
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SLA Guarantee Banner */}
      <section className="section-bg" style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f2b48', marginBottom: '4px' }}>99.9% Uptime</div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>High-availability multi-zone cloud infrastructure</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f2b48', marginBottom: '4px' }}>24/7 Monitoring</div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>Automated health telemetry on all active edge readers</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f2b48', marginBottom: '4px' }}>REST & Webhooks</div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>Standardized integration schemas for all enterprise ERPs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
