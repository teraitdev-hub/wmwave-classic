import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import WorkflowSection from '../components/WorkflowSection';
import IndustriesSection from '../components/IndustriesSection';
import CloudWorkforceSection from '../components/CloudWorkforceSection';
import DashboardSection from '../components/DashboardSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import ServicesProductsNav from '../components/ServicesProductsNav';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <HeroSlider />
            <AboutSection />
            <WhyChooseUs />
            <WorkflowSection />
            <CloudWorkforceSection />
            <ServicesProductsNav />
            <DashboardSection />
            <IndustriesSection />
            <BlogPreviewSection />
        </>
    );
};

export default Home;
