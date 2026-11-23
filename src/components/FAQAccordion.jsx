import React, { useState, useEffect, useRef } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const revealRef = useRef(null);

    const faqs = [
        { q: "1. How does the cloud platform synchronize data with on-premise biometric terminals?", a: "Our platform uses a push-based protocol over secure WebSocket or HTTPS connections. Terminals instantly push attendance and access logs to the cloud in real-time, eliminating the need for manual polling.", keywords: "sync, cloud, on-premise, data, synchronize, real-time" },
        { q: "2. What encryption standards are used for transmitting attendance data?", a: "All data transmitted between hardware terminals and the cloud server is encrypted using industry-standard TLS 1.2/1.3. Data at rest is encrypted using AES-256 to ensure complete data privacy.", keywords: "encryption, security, transmit, tls, aes, privacy" },
        { q: "3. Can the workforce management API integrate with third-party ERP or HRMS systems?", a: "We do not have a REST API. We only support SOAP API.", keywords: "api, erp, hrms, integrate, webhook, rest, integration" },
        { q: "4. What happens to offline attendance logs if the network connection drops?", a: "Biometric and access control devices have built-in memory that stores logs locally. The number of log records that can be stored depends on the device model.", offline: true, keywords: "offline, network drop, logs, connection, cache, restore" },
        { q: "5. How is multi-location data consolidated in the live dashboard?", a: "The cloud architecture aggregates data streams from all registered devices across geographical branches into a centralized multi-tenant database. The live dashboard queries this unified dataset to provide real-time KPIs.", keywords: "multi-location, dashboard, consolidate, branch, aggregate, geographical" },
        { q: "6. Does the cloud architecture support Single Sign-On (SSO) for enterprise users?", a: "Yes, the web dashboard and administrative portals support SAML 2.0 and OAuth2 based Single Sign-On, integrating easily with Active Directory, Azure AD, and Okta.", keywords: "sso, single sign-on, authentication, saml, active directory, okta" },
        { q: "7. What is the typical latency for real-time access control event pushing?", a: "Under normal network conditions, event pushing from the terminal to the cloud dashboard occurs in under 200 milliseconds, allowing for true real-time security monitoring.", keywords: "latency, real-time, event, speed, milliseconds, monitoring" },
        { q: "8. How are firmware updates managed for connected hardware devices?", a: "Firmware updates can be pushed Over-The-Air (OTA) directly from the cloud management portal to supported devices, minimizing maintenance downtime and ensuring terminals are always secure.", keywords: "firmware, update, hardware, ota, over-the-air, maintenance" },
        { q: "9. Are the payroll-ready reports customizable for different regional compliance?", a: "The reporting engine features dynamic templates that can be customized to match local labor laws, shift rules, overtime calculations, and specific export formats required by regional payroll software.", keywords: "payroll, reports, compliance, custom, export, labor laws" },
        { q: "10. What redundancy and disaster recovery measures are in place?", a: "The cloud platform is hosted on highly available infrastructure with auto-scaling instances. We maintain multi-zone database replication and automated daily backups to guarantee 99.9% uptime and zero data loss.", keywords: "redundancy, backup, disaster recovery, uptime, replication" }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <h2 className="section-title reveal-faq" ref={revealRef} style={{ color: '#fff' }}>Frequently Asked Questions</h2>
                <div className="faq-container reveal-faq">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            data-searchable={faq.keywords}
                        >
                            <button 
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                                style={{ color: '#fff' }}
                            >
                                {faq.q} <i className="fas fa-chevron-down"></i>
                            </button>
                            <div 
                                className="accordion-content"
                                style={{ maxHeight: activeIndex === index ? '500px' : null }}
                            >
                                <p style={{ color: '#fff' }}>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
