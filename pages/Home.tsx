import React from 'react';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>CCG SiteSpark | Web Design for Plumbers, Electricians & Local Businesses</title>
                <meta name="description" content="Professional websites for plumbers, electricians, nail salons, and local service businesses. Get more customers calling. Starting at $500." />
                <link rel="canonical" href="https://ccgsitespark.com/" />
            </Helmet>
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
