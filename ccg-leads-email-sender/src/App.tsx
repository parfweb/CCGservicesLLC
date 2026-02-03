
import { useState, useEffect, useCallback, useMemo } from 'react';
import LeadCard from './components/LeadCard';
import SalesPitch from './components/SalesPitch';
import { type Lead, generatePitch } from './utils/salesBot';
import './index.css';
import { SystemReport } from './components/Audit/SystemReport';
import { BatchEmailPanel } from './components/BatchEmailPanel';
import selectedLeads from './data/selected_leads.json';

const SENT_STORAGE_KEY = 'ccg_sent_emails';

// Generate pitches ONCE for all leads at load time
const generateAllPitches = (leads: Lead[]): Map<string, { subject: string; body: string }> => {
  const pitchMap = new Map();
  leads.forEach(lead => {
    if (lead.email) {
      pitchMap.set(lead.email.toLowerCase(), generatePitch(lead));
    }
  });
  return pitchMap;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Get sent emails from localStorage
  const getSentSet = useCallback((): Set<string> => {
    try {
      const stored = localStorage.getItem(SENT_STORAGE_KEY);
      return new Set(stored ? JSON.parse(stored) : []);
    } catch {
      return new Set();
    }
  }, []);

  // Cast leads once
  const allLeads = selectedLeads as Lead[];

  // Generate pitches ONCE on initial load (memoized)
  const pitchMap = useMemo(() => generateAllPitches(allLeads), [allLeads]);

  const [leads, setLeads] = useState<Lead[]>([]);

  // Filter leads on mount and when refreshTrigger changes
  useEffect(() => {
    const sentSet = getSentSet();
    const unsent = allLeads.filter(lead =>
      !lead.email || !sentSet.has(lead.email.toLowerCase())
    );
    setLeads(unsent);

    // Reset to first lead if current index is out of bounds
    if (currentIndex >= unsent.length) {
      setCurrentIndex(0);
    }
  }, [refreshTrigger, allLeads, getSentSet, currentIndex]);

  // REMOVED: the 2-second auto-refresh that was causing flickering
  // The leads list now only updates when you actually send an email

  // Manually refresh leads (for immediate update after send)
  const refreshLeads = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  const lead = leads[currentIndex];

  // Get pre-generated pitch from the map (stable, no randomization)
  const pitch = lead?.email
    ? pitchMap.get(lead.email.toLowerCase()) || { subject: '', body: '' }
    : { subject: '', body: '' };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : leads.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < leads.length - 1 ? prev + 1 : 0));
  };

  if (leads.length === 0) {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>CCG Sales Bot</h1>
          <p>Lead Intelligence & Outreach Automation</p>
        </header>
        <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
          <h2>🎉 All leads processed!</h2>
          <p>Run <code>npm run sync-leads</code> to load more leads.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CCG Sales Bot</h1>
        <p>Lead Intelligence & Outreach Automation</p>
      </header>

      {/* Navigation Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        margin: '0 auto 1rem auto',
        maxWidth: '400px'
      }}>
        <button onClick={handlePrev} style={navButtonStyle}>← Prev</button>
        <span style={{ color: '#fff', fontWeight: 600 }}>
          Lead {currentIndex + 1} of {leads.length}
        </span>
        <button onClick={handleNext} style={navButtonStyle}>Next →</button>
      </div>

      <main className="dashboard-grid">
        <section className="left-panel">
          <LeadCard lead={lead} />
          <SystemReport lead={lead} />
          <BatchEmailPanel
            leads={leads}
            currentIndex={currentIndex}
            onSendComplete={refreshLeads}
          />
        </section>

        <section className="right-panel">
          <SalesPitch subject={pitch.subject} body={pitch.body} leadEmail={lead.email} />
        </section>
      </main>
    </div>
  );
}

const navButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'background-color 0.2s'
};

export default App;
