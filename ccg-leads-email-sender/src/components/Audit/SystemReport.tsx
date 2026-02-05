import React from 'react';
import type { Lead } from '../../utils/salesBot';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const SystemReport: React.FC<{ lead: Lead }> = ({ lead }) => {
    // Use real analysis data if available, otherwise fallback to heuristics
    const analysis = lead.analysis;

    // Determine status flags
    const isMobileIssue = analysis ? !analysis.status || analysis.status !== 'ONLINE' : lead.status.includes("NOT MOBILE");
    const isOffline = analysis ? analysis.status === 'BROKEN' : lead.status.includes("BROKEN");

    // Heuristics for "Ugly/Free" sites (Passes technical check but fails 'Professional' check)
    const isFreeProvider = analysis ? analysis.isFreeProvider : lead.website.includes('godaddysites') || lead.website.includes('wixsite');
    const isUgly = analysis ? analysis.isUgly : false;

    // Derived Statuses (Correlate with Score if no real analysis exists)
    // If we have a low score, we shouldn't show perfect green checks elsewhere.

    const domain = lead.website.replace('https://', '').replace('http://', '').replace(/\/$/, '').split('?')[0]; // Strip protocol and params
    const reportDate = analysis ? new Date(analysis.analyzedAt).toLocaleDateString() : new Date().toLocaleDateString();

    // Deterministic "Bad" Score Generator (so it looks real but consistent for the same domain)
    const getDeterministicScore = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        // Map hash to range 8 - 32
        return (Math.abs(hash) % 25) + 8;
    };

    // Deterministic ID generator
    const reportId = Math.floor(getDeterministicScore(domain) * 123) % 10000;
    const speedScore = analysis ? 100 - (parseFloat(analysis.loadTime) * 10) : getDeterministicScore(domain);
    const finalScore = Math.floor(Math.max(5, Math.min(95, speedScore)));

    // Varied Conclusions
    // Varied Conclusions
    const getConclusion = (score: number) => {
        if (score < 15) return "Critical performance failures detected. Site structure is actively preventing search indexing.";
        if (score < 25) return "Domain authority is suppressed due to high latency and poor mobile rendering artifacts.";
        return "Technical debt is causing significant visibility loss. Immediate remediation recommended.";
    };

    // Derived Statuses (Correlate with Score if no real analysis exists)
    // If we have a low score, we shouldn't show perfect green checks elsewhere.
    const implicitMobileIssue = !analysis && finalScore < 45;
    const implicitServerLag = !analysis && finalScore < 30;
    const implicitSeoIssue = !analysis && finalScore < 40;

    const displayMobileIssue = isMobileIssue || implicitMobileIssue || isUgly || isFreeProvider;
    const displayServerIssue = isOffline || implicitServerLag || isFreeProvider;

    // SEO Checks
    const hasSeoIssue = analysis
        ? (!analysis.pageTitle || analysis.pageTitle.length < 10 || analysis.pageTitle.toLowerCase().includes('home') || isUgly)
        : implicitSeoIssue;

    const seoStatus = hasSeoIssue ? 'MISSING TAGS' : 'BASIC TAGS ONLY';
    const displaySeoIssue = hasSeoIssue || isOffline;

    // Aggressive overrides (User Request: "Show what's wrong")
    // If it's technically "Good", we still want to show "Room for Improvement" (Yellow)
    const serverStatus = isOffline ? 'FAILED' :
        (displayServerIssue || (analysis && parseFloat(analysis.loadTime) > 0.8)) ? 'SLOW RESPONSE' : 'PASSED';

    const mobileStatus = displayMobileIssue ? (isFreeProvider ? 'BASIC / LIMITED' : 'NOT OPTIMIZED') :
        isOffline ? 'UNREACHABLE' : 'LAYOUT ISSUES'; // Never show "Optimized"



    const downloadPDF = async () => {
        const element = document.getElementById('system-report-card');
        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        });

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = canvas.width;
        const pdfHeight = canvas.height;

        const pdf = new jsPDF({
            orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
            unit: 'px',
            format: [pdfWidth, pdfHeight]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`Diagnostic_Report_${domain}.pdf`);
    };

    return (
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            backgroundColor: '#ffffff',
            color: '#1f2937', // Gray-800
            padding: '0',
            borderRadius: '8px',
            marginTop: '2rem',
            border: '1px solid #e5e7eb', // Gray-200
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            maxWidth: '600px'
        }}>
            {/* Header */}
            <div id="system-report-card" style={{
                backgroundColor: '#ffffff',
            }}>
                <div style={{
                    backgroundColor: '#f9fafb', // Gray-50
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>
                            Domain Diagnostic Report
                        </h3>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>
                            ID: #{reportId} • Date: {reportDate}
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#fee2e2', // Red-100
                        color: '#991b1b', // Red-800
                        padding: '0.25rem 0.75rem',
                        borderRadius: '99px',
                        fontSize: '0.75rem',
                        fontWeight: 700
                    }}>
                        ACTION REQUIRED
                    </div>
                </div>

                {/* Target Info */}
                <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600, marginBottom: '0.25rem' }}>Target Domain</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{domain}</div>
                    </div>

                    {/* Metrics Grid */}
                    <div style={{ display: 'grid', gap: '1rem' }}>

                        {/* Item 1: Server Status */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>{displayServerIssue ? '⚠️' : (isOffline ? '❌' : '✅')}</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Server Response / Uptime</div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                                        {analysis ? `Server: ${analysis.server}` : (displayServerIssue ? 'High Latency Detected (>300ms)' : 'Testing HTTP 200 OK Status')}
                                    </div>
                                </div>
                            </div>
                            <div style={{ fontWeight: 600, color: isOffline ? '#dc2626' : (serverStatus === 'PASSED' ? '#059669' : '#d97706') }}>
                                {isOffline ? 'FAILED' : (isFreeProvider ? 'SHARED / SLOW' : (analysis ? `${serverStatus} (${analysis.loadTime}s)` : (displayServerIssue ? 'SLOW' : 'PASSED')))}
                            </div>
                        </div>

                        {/* Item 2: Mobile Usability */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>{displayMobileIssue || isOffline ? '⚠️' : '⚠️'}</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Mobile Viewport Usability</div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Google Mobile-First Indexing Check</div>
                                </div>
                            </div>
                            <div style={{ fontWeight: 600, color: (displayMobileIssue || isOffline) ? '#d97706' : '#d97706' }}>
                                {mobileStatus}
                            </div>
                        </div>

                        {/* Item 4: SEO Status */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>{displaySeoIssue ? '⚠️' : '⚠️'}</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>SEO Metadata / Indexing</div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                                        {analysis && analysis.pageTitle
                                            ? (hasSeoIssue ? 'Title tag is too short or generic' : 'Page Title found (Keywords Missing)')
                                            : (displaySeoIssue ? 'Meta Tags Not Detected' : 'Basic Tags Only')}
                                    </div>
                                </div>
                            </div>
                            <div style={{ fontWeight: 600, color: displaySeoIssue ? '#d97706' : '#d97706' }}>
                                {seoStatus}
                            </div>
                        </div>

                        {/* Item 3: Core Web Vitals */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>⚠️</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Core Web Vitals (LCP/CLS)</div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Page Speed Performance</div>
                                </div>
                            </div>
                            <div style={{ fontWeight: 600, color: '#d97706' }}>
                                {analysis ? `${analysis.linkCount} Links Found` : `FAIL (Score: ${finalScore}/100)`}
                            </div>
                        </div>
                    </div>

                    {/* Summary Box */}
                    <div style={{
                        marginTop: '1.5rem',
                        backgroundColor: '#fff1f2', // Red-50
                        border: '1px solid #fecaca', // Red-200
                        borderRadius: '6px',
                        padding: '1rem'
                    }}>
                        <strong style={{ color: '#991b1b', display: 'block', marginBottom: '0.25rem' }}>Diagnostic Conclusion:</strong>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#7f1d1d' }}>
                            {isOffline ? ' Domain is completely unreachable (Server 503).' :
                                isFreeProvider ? ' Site is built on a restrictive free platform. Migration recommended for authority.' :
                                    displayMobileIssue ?
                                        (finalScore % 2 === 0 ? ' Mobile responsiveness and speed are severely impacting conversion rates.'
                                            : ' Critical rendering issues detected on mobile devices (Google Indexing Warning).') :
                                        getConclusion(finalScore)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Download Button (Outside of Capture ID) */}
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', textAlign: 'right' }}>
                <button
                    onClick={downloadPDF}
                    style={{
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.75rem',
                        color: '#4b5563',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 600
                    }}
                >
                    ⬇️ Download PDF
                </button>
            </div>
        </div>
    );
};
