import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Building, 
  Headphones, 
  ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get('product') || '';
  const prefillService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: 'Sales',
    productOfInterest: prefillProduct || prefillService || '',
    message: prefillProduct ? `Requesting a price quote and technical specifications for ${prefillProduct}.` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillProduct) {
      setFormData(prev => ({
        ...prev,
        productOfInterest: prefillProduct,
        message: `Requesting a price quote and technical specifications for ${prefillProduct}.`
      }));
    } else if (prefillService) {
      setFormData(prev => ({
        ...prev,
        productOfInterest: prefillService,
        message: `Requesting a technical demonstration and deployment consultation for ${prefillService}.`
      }));
    }
  }, [prefillProduct, prefillService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email parameters
    const subject = encodeURIComponent(`[${formData.department}] Corporate Inquiry from ${formData.name} - ${formData.company || 'Enterprise Client'}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Work Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Department: ${formData.department}\n` +
      `Product / Service: ${formData.productOfInterest || 'General Inquiry'}\n\n` +
      `Inquiry Message:\n${formData.message}`
    );

    const recipient = formData.department === 'Technical Support' 
      ? 'support@wmwave.com' 
      : formData.department === 'Sales' 
        ? 'sales@wmwave.com' 
        : 'enquiry@wmwave.com';

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0 40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <span className="section-eyebrow">Contact & Support</span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f2b48', marginTop: '8px', marginBottom: '16px' }}>
            Corporate Inquiries & Regional Office
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '800px', lineHeight: '1.7' }}>
            Connect with our hardware sales engineers, solutions architects, and technical support team in Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Information */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* Left: Contact Form */}
            <div className="card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#0f2b48', marginBottom: '8px' }}>
                Request a Proposal or Technical Consultation
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '24px' }}>
                Fill out the form below. An engineer will respond within one business day.
              </p>

              {submitted ? (
                <div style={{ padding: '24px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', textAlign: 'center' }}>
                  <CheckCircle size={40} style={{ color: '#16a34a', margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '1.25rem', color: '#166534', marginBottom: '8px' }}>Inquiry Submitted</h3>
                  <p style={{ color: '#15803d', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Your inquiry email client has been triggered. Our engineering desk will review your details promptly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Corporate Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@company.com"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        className="form-control" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / Organization</label>
                      <input 
                        type="text" 
                        name="company" 
                        className="form-control" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Industries Ltd."
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Department to Contact</label>
                      <select 
                        name="department" 
                        className="form-control"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option value="Sales">Sales & New Deployments</option>
                        <option value="Technical Support">Technical Support & AMC</option>
                        <option value="Enquiry">General Corporate Enquiry</option>
                        <option value="Partnerships">Channel & System Integrator Partnership</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Product / Service of Interest</label>
                      <input 
                        type="text" 
                        name="productOfInterest" 
                        className="form-control" 
                        value={formData.productOfInterest}
                        onChange={handleChange}
                        placeholder="e.g. X-990, Boom Barrier, Cloud Attendance"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Requirements / Project Scope *</label>
                    <textarea 
                      name="message" 
                      className="form-control" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify number of locations, total employees, existing HRMS, barrier gate requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Send size={18} />
                    <span>Transmit Corporate Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Department Contacts & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Department Contact Cards */}
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', color: '#0f2b48', marginBottom: '16px' }}>
                  Direct Department Contacts
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Sales */}
                  <div style={{ paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f2b48', marginBottom: '4px' }}>
                      Commercial Sales & Hardware Procurement
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Phone: <a href="tel:+917348838833" style={{ color: '#0284c7', fontWeight: '600' }}>+91 7348838833</a>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Email: <a href="mailto:sales@wmwave.com">sales@wmwave.com</a>
                    </div>
                  </div>

                  {/* Tech Support */}
                  <div style={{ paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f2b48', marginBottom: '4px' }}>
                      Engineering & Technical Support (SLA)
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Phone: <a href="tel:+919591469969" style={{ color: '#0284c7', fontWeight: '600' }}>+91 9591469969</a>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Email: <a href="mailto:support@wmwave.com">support@wmwave.com</a>
                    </div>
                  </div>

                  {/* General */}
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f2b48', marginBottom: '4px' }}>
                      General Corporate Enquiries
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Phone: <a href="tel:+919483920190" style={{ color: '#0284c7', fontWeight: '600' }}>+91 9483920190</a>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                      Email: <a href="mailto:enquiry@wmwave.com">enquiry@wmwave.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Head Office Address */}
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', color: '#0f2b48', marginBottom: '12px' }}>
                  Head Office Location
                </h3>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <MapPin size={20} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.875rem', color: '#334155', margin: 0, lineHeight: '1.6' }}>
                    No. 11, Bharani, 1st Cross, 9th Main, Chairman Layout, Banaswadi, Bengaluru, Karnataka, 560043, India
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Clock size={16} style={{ color: '#0284c7', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                    Monday - Saturday: 9:00 AM - 6:30 PM IST
                  </span>
                </div>

                {/* Google Maps Embed */}
                <div style={{ width: '100%', height: '220px', borderRadius: '6px', overflow: 'hidden', marginTop: '16px', border: '1px solid #e2e8f0' }}>
                  <iframe 
                    src="https://maps.google.com/maps?q=No.%2011,%20Bharani,%201st%20Cross,%209th%20Main,%20Chairman%20Layout,%20Banaswadi,%20Bengaluru,%20Karnataka,%20560043,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="WMWave Office Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
