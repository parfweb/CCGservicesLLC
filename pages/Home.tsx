import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhoWeServe from '../components/WhoWeServe';
import Work from '../components/Work';
import Pricing from '../components/Pricing';
import Hosting from '../components/Hosting';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Web Design for Plumbers, Electricians & Local Businesses"
                description="Professional websites for plumbers, electricians, nail salons, and local service businesses. Get more customers calling. Starting at $500."
                canonical="https://ccgsitespark.com/"
            />
            <main>
                <Hero />
                <Work />
                <WhoWeServe />
                <Pricing />
                <Hosting />
                <Testimonials />
                <Process />
                <FAQ />
                <CTA />
            </main>
        </>
    );
};

export default Home;
