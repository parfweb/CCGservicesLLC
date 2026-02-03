
import React, { useState } from 'react';
import type { Lead } from '../utils/salesBot';
import { Phone, Globe, Server, Star, Copy, Check } from 'lucide-react';

interface LeadCardProps {
    lead: Lead;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        if (lead.email) {
            navigator.clipboard.writeText(lead.email);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    return (
        <div className="lead-card">
            <div className="lead-header">
                <h2>{lead.businessName}</h2>
                <span className={`badge ${lead.priority.toLowerCase()}`}>{lead.priority}</span>
            </div>

            <div className="lead-details">
                <div className="detail-item">
                    <Phone size={18} />
                    <span>{lead.phone}</span>
                </div>

                <div className="detail-item">
                    <Globe size={18} />
                    <a href={lead.website} target="_blank" rel="noopener noreferrer">{lead.website}</a>
                </div>

                <div className="detail-item">
                    <Server size={18} />
                    <span>{lead.techStack || 'Unknown'}</span>
                </div>

                <div className="detail-item">
                    <Star size={18} />
                    <span>{lead.status}</span>
                </div>

                {lead.email && (
                    <div className="detail-item" style={{ backgroundColor: '#22c55e22', padding: '0.5rem', borderRadius: '6px', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: 600 }}>📧</span>
                            <span style={{ color: '#22c55e', fontWeight: 600 }}>{lead.email}</span>
                        </div>
                        <button
                            onClick={handleCopyEmail}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#22c55e',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.75rem'
                            }}
                        >
                            {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                            {copiedEmail ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                )}

                {lead.auditNotes && (
                    <div className="audit-notes">
                        <strong>Notes:</strong> {lead.auditNotes}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeadCard;
