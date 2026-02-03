import React, { useState, useEffect } from 'react';
import type { Lead } from '../utils/salesBot';
import { generatePitch } from '../utils/salesBot';
import {
    loadGoogleScript,
    signInWithGoogle,
    isAuthenticated,
    sendBatchEmails,
    getSentEmails,
    exportSentEmailsJSON
} from '../utils/gmailSender';

interface BatchEmailPanelProps {
    leads: Lead[];
    currentIndex: number;
    onSendComplete?: () => void;
}

export const BatchEmailPanel: React.FC<BatchEmailPanelProps> = ({ leads, currentIndex, onSendComplete }) => {
    const [batchSize, setBatchSize] = useState(10);
    const [isSending, setIsSending] = useState(false);
    const [progress, setProgress] = useState({ sent: 0, total: 0 });
    const [result, setResult] = useState<{ sent: number; failed: number; errors: string[] } | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Load Google script on mount
    useEffect(() => {
        loadGoogleScript()
            .then(() => {
                setIsLoading(false);
                setIsSignedIn(isAuthenticated());
            })
            .catch((err) => {
                console.error('Failed to load Google script:', err);
                setIsLoading(false);
            });
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            setIsSignedIn(true);
        } catch (err) {
            console.error('Google sign-in failed:', err);
            alert('Sign-in failed. Please try again.');
        }
    };

    const handleSendBatch = async () => {
        const leadsToSend = leads.slice(currentIndex, currentIndex + batchSize);
        const emailableLeads = leadsToSend.filter(lead => lead.email);

        if (emailableLeads.length === 0) {
            alert('No leads with email addresses in the selected range!');
            return;
        }

        setIsSending(true);
        setResult(null);
        setProgress({ sent: 0, total: emailableLeads.length });

        const emails = emailableLeads.map(lead => {
            const pitch = generatePitch(lead);
            return {
                to: lead.email!,
                subject: pitch.subject,
                body: pitch.body,
            };
        });

        const batchResult = await sendBatchEmails(emails, (sent, total) => {
            setProgress({ sent, total });
        });

        setResult({ sent: batchResult.sent, failed: batchResult.failed, errors: batchResult.errors });
        setIsSending(false);
        onSendComplete?.(); // Refresh the leads list
    };

    const sendSingleEmail = async (lead: Lead) => {
        if (!lead.email) {
            alert('This lead has no email address!');
            return;
        }

        setIsSending(true);
        setResult(null);
        const pitch = generatePitch(lead);

        const batchResult = await sendBatchEmails([{
            to: lead.email,
            subject: pitch.subject,
            body: pitch.body,
        }]);

        setResult({ sent: batchResult.sent, failed: batchResult.failed, errors: batchResult.errors });
        setIsSending(false);
        onSendComplete?.(); // Refresh the leads list
        // Force a small delay to allow localStorage to update before parent re-renders
        setTimeout(() => {
            onSendComplete?.();
        }, 100);
    };

    if (isLoading) {
        return (
            <div style={panelStyle}>
                <p style={{ color: '#94a3b8' }}>Loading...</p>
            </div>
        );
    }

    return (
        <div style={panelStyle}>
            <h3 style={{ color: '#f8fafc', margin: '0 0 1rem 0', fontSize: '1rem' }}>
                📧 Gmail Sender
            </h3>

            {/* Google Sign-In */}
            {!isSignedIn ? (
                <button
                    onClick={handleGoogleSignIn}
                    style={{
                        ...buttonStyle,
                        backgroundColor: '#4285F4',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                </button>
            ) : (
                <>
                    <div style={{
                        backgroundColor: '#14532d',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>✅</span>
                        <span style={{ color: '#22c55e', fontSize: '0.85rem' }}>Connected to Gmail</span>
                    </div>

                    {/* Single Email Button */}
                    <div style={{ marginBottom: '1rem' }}>
                        <button
                            onClick={() => sendSingleEmail(leads[currentIndex])}
                            disabled={isSending || !leads[currentIndex]?.email}
                            style={{
                                ...buttonStyle,
                                backgroundColor: leads[currentIndex]?.email ? '#22c55e' : '#6b7280',
                                width: '100%'
                            }}
                        >
                            {isSending ? '⏳ Sending...' : `📤 Send to Current Lead`}
                        </button>
                        {!leads[currentIndex]?.email && (
                            <p style={{ color: '#f59e0b', fontSize: '0.8rem', margin: '0.5rem 0 0 0' }}>
                                ⚠️ Current lead has no email address
                            </p>
                        )}
                    </div>

                    {/* Batch Controls */}
                    <div style={{
                        borderTop: '1px solid #334155',
                        paddingTop: '1rem',
                        marginTop: '1rem'
                    }}>
                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
                            Batch Size (from current lead):
                        </label>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <select
                                value={batchSize}
                                onChange={(e) => setBatchSize(Number(e.target.value))}
                                disabled={isSending}
                                style={selectStyle}
                            >
                                <option value={5}>5 emails</option>
                                <option value={10}>10 emails</option>
                                <option value={20}>20 emails</option>
                                <option value={30}>30 emails</option>
                                <option value={50}>50 emails</option>
                            </select>
                            <button
                                onClick={handleSendBatch}
                                disabled={isSending}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: isSending ? '#6b7280' : '#3b82f6'
                                }}
                            >
                                {isSending ? '⏳ Sending...' : '🚀 Send Batch'}
                            </button>
                        </div>
                        <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            * Sent leads are automatically removed from view.
                        </p>
                    </div>
                </>
            )}

            {/* Progress Indicator */}
            {isSending && (
                <div style={{ marginTop: '1rem' }}>
                    <div style={progressBarBgStyle}>
                        <div style={{
                            ...progressBarFillStyle,
                            width: `${(progress.sent / progress.total) * 100}%`,
                        }} />
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                        Sending {progress.sent} of {progress.total}...
                    </p>
                </div>
            )}

            {/* Result */}
            {result && !isSending && (
                <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    backgroundColor: result.failed === 0 ? '#14532d' : '#7f1d1d',
                    border: `1px solid ${result.failed === 0 ? '#22c55e' : '#ef4444'}`
                }}>
                    <p style={{ margin: 0, color: '#f8fafc', fontSize: '0.9rem' }}>
                        {result.failed === 0
                            ? `✅ Successfully sent ${result.sent} email(s)!`
                            : `⚠️ Sent ${result.sent}, Failed ${result.failed}`
                        }
                    </p>
                    {result.errors.length > 0 && (
                        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#fca5a5' }}>
                            <strong>Errors:</strong>
                            <ul style={{ margin: '0.25rem 0 0 1rem', padding: 0 }}>
                                {result.errors.slice(0, 3).map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                                {result.errors.length > 3 && <li>...and {result.errors.length - 3} more</li>}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Export Sent Log */}
            {isSignedIn && (
                <div style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #334155'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                            📊 Total sent: {getSentEmails().length} emails
                        </span>
                        <button
                            onClick={() => {
                                const json = exportSentEmailsJSON();
                                const blob = new Blob([json], { type: 'application/json' });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'sent_log.json';
                                a.click();
                                URL.revokeObjectURL(url);
                            }}
                            style={{
                                ...buttonStyle,
                                backgroundColor: '#6b7280',
                                padding: '0.5rem 0.75rem',
                                fontSize: '0.8rem'
                            }}
                        >
                            💾 Export JSON (System)
                        </button>

                        <button
                            onClick={() => {
                                const sent = getSentEmails();
                                const csvContent = "data:text/csv;charset=utf-8,"
                                    + "Email,Date\n"
                                    + sent.map(e => `${e},${new Date().toISOString()}`).join("\n");
                                const encodedUri = encodeURI(csvContent);
                                const a = document.createElement('a');
                                a.setAttribute("href", encodedUri);
                                a.setAttribute("download", "used_leads.csv");
                                document.body.appendChild(a);
                                a.click();
                            }}
                            style={{
                                ...buttonStyle,
                                backgroundColor: '#0ea5e9', // Sky Blue
                                padding: '0.5rem 0.75rem',
                                fontSize: '0.8rem',
                                marginLeft: '0.5rem'
                            }}
                        >
                            📄 Export CSV (Records)
                        </button>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '0.5rem' }}>
                        Export → Save to <code>src/data/sent_log.json</code> → Run <code>npm run sync-leads</code>
                    </p>
                </div>
            )}
        </div>
    );
};

const panelStyle: React.CSSProperties = {
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    padding: '1.5rem',
    marginTop: '1.5rem',
    border: '1px solid #334155'
};

const buttonStyle: React.CSSProperties = {
    padding: '0.75rem 1.25rem',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'background-color 0.2s'
};

const selectStyle: React.CSSProperties = {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    fontSize: '1rem',
    flex: 1
};

const progressBarBgStyle: React.CSSProperties = {
    height: '6px',
    backgroundColor: '#334155',
    borderRadius: '3px',
    overflow: 'hidden'
};

const progressBarFillStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: '#22c55e',
    transition: 'width 0.3s'
};
