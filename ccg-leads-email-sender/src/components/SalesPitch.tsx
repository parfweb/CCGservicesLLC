
import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';

interface SalesPitchProps {
    subject: string;
    body: string;
    leadEmail?: string;
}

const SalesPitch: React.FC<SalesPitchProps> = ({ subject, body, leadEmail }) => {
    const [copiedSubject, setCopiedSubject] = useState(false);
    const [copiedBody, setCopiedBody] = useState(false);

    const handleCopySubject = () => {
        navigator.clipboard.writeText(subject);
        setCopiedSubject(true);
        setTimeout(() => setCopiedSubject(false), 2000);
    };

    const handleCopyBody = () => {
        navigator.clipboard.writeText(body);
        setCopiedBody(true);
        setTimeout(() => setCopiedBody(false), 2000);
    };

    const handleOpenGmail = () => {
        if (!leadEmail) {
            alert('No email address for this lead!');
            return;
        }
        const mailtoUrl = `mailto:${leadEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="sales-pitch">
            <div className="pitch-header">
                <h3>Sales Bot Draft</h3>
                {leadEmail && (
                    <button onClick={handleOpenGmail} className="copy-btn" style={{ backgroundColor: '#3b82f6' }}>
                        <Mail size={16} />
                        Open in Email
                    </button>
                )}
            </div>

            <div className="pitch-field">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>Subject</label>
                    <button onClick={handleCopySubject} className="copy-btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
                        {copiedSubject ? <Check size={12} /> : <Copy size={12} />}
                        {copiedSubject ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <input type="text" readOnly value={subject} />
            </div>

            <div className="pitch-field">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>Body</label>
                    <button onClick={handleCopyBody} className="copy-btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
                        {copiedBody ? <Check size={12} /> : <Copy size={12} />}
                        {copiedBody ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <textarea readOnly value={body} rows={12} />
            </div>
        </div>
    );
};

export default SalesPitch;
