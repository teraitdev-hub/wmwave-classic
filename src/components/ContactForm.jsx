import React, { useEffect } from 'react';

const ContactForm = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.reveal-contact');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        const subject = encodeURIComponent("New message from WMWave Website");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        );
        
        window.location.href = `mailto:enquiry@wmwave.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title reveal-contact">Get In Touch</h2>
                <div className="contact-grid reveal-contact">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-info-circle"></i></div>
                            <div className="info-content">
                                <h4>Enquiry</h4>
                                <p style={{ marginBottom: '5px' }}>Email: <a href="mailto:enquiry@wmwave.com">enquiry@wmwave.com</a></p>
                                <p>Phone: <a href="tel:+919483920190">+91 9483920190</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-handshake"></i></div>
                            <div className="info-content">
                                <h4>Sales</h4>
                                <p style={{ marginBottom: '5px' }}>Email: <a href="mailto:sales@wmwave.com">sales@wmwave.com</a></p>
                                <p>Phone: <a href="tel:+917348838833">+91 7348838833</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-headset"></i></div>
                            <div className="info-content">
                                <h4>Tech Support</h4>
                                <p style={{ marginBottom: '5px' }}>Email: <a href="mailto:support@wmwave.com">support@wmwave.com</a></p>
                                <p>Phone: <a href="tel:+919591469969">+91 9591469969</a></p>
                            </div>
                        </div>

                        <div className="map-container" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden', marginTop: '40px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                            <iframe 
                                src="https://maps.google.com/maps?q=No.%2011,%20Bharani,%201st%20Cross,%209th%20Main,%20Chairman%20Layout,%20Banaswadi,%20Bengaluru,%20Karnataka,%20560043,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="WMWave Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
