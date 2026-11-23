import React, { useEffect } from 'react';
import FAQAccordion from '../components/FAQAccordion';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="faq-page" style={{ paddingTop: '80px', minHeight: '80vh', paddingBottom: '40px' }}>
            <FAQAccordion />
        </div>
    );
};

export default FAQ;