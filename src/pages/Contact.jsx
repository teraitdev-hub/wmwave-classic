import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page" style={{ paddingTop: '80px', minHeight: '80vh', paddingBottom: '40px' }}>
            <ContactForm />
        </div>
    );
};

export default Contact;