import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const siteTitle = "CCG SiteSpark";
    const fullTitle = `${title} | ${siteTitle}`;

    // Default canonical to the current window location if not provided
    // In SSR scenarios, this would need a prop, but for SPA:
    const url = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://ccgsitespark.com');

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="CCG SiteSpark" />
            <meta name="theme-color" content="#D2F865" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="CCG SiteSpark" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="https://ccgsitespark.com/favicon.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://ccgsitespark.com/favicon.png" />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebDesignCompany",
                    "name": "CCG SiteSpark",
                    "url": "https://ccgsitespark.com",
                    "logo": "https://ccgsitespark.com/favicon.png",
                    "telephone": "+19177688896",
                    "priceRange": "$$$",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "721 Avenue U",
                        "addressLocality": "Brooklyn",
                        "addressRegion": "NY",
                        "postalCode": "11223",
                        "addressCountry": "US"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
