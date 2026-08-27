import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import './SharedPages.css';

const regions = [
  { region: 'Tamil Nadu', products: 'M-Sand, P-Sand, Limestone', status: 'Primary Market', color: '#C17D47' },
  { region: 'Pondicherry', products: 'M-Sand, P-Sand', status: 'Active Supply', color: '#8B5E3C' },
  { region: 'Kerala', products: 'M-Sand, Limestone', status: 'Growing', color: '#5A6E4A' },
  { region: 'Karnataka', products: 'Limestone', status: 'Emerging', color: '#7A9463' },
  { region: 'Andhra Pradesh', products: 'M-Sand, Limestone', status: 'Expanding', color: '#B5533C' },
];

const districts = ['Coimbatore', 'Salem', 'Erode', 'Namakkal', 'Tiruppur', 'Karur', 'Dindigul', 'Madurai', 'Chennai', 'Trichy'];

const logisticsItems = [
  { icon: '🚚', title: 'Own Fleet', desc: 'Dedicated tipper trucks for flexible, on-demand delivery to any project site.' },
  { icon: '📦', title: 'Bulk Supply', desc: 'Tipper loads (10–20 MT) for large project supply requirements.' },
  { icon: '🗺️', title: 'Route Planning', desc: 'Efficient route planning ensures timely delivery even to remote sites.' },
];

export default function GlobalPresence() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Globe size={13} /> Global Presence</div>
          <h1>Our Reach Across India</h1>
          <p>Serving construction and industrial clients across Tamil Nadu and neighboring states.</p>
        </div>
      </section>

      {/* Reach */}
      <section className="global-reach-section">
        <div className="container">
          <div className="global-reach-grid">
            <div className="global-reach-content">
              <div className="section-label"><Globe size={13} /> Supply Regions</div>
              <h2>Where We Deliver</h2>
              <div className="divider divider-left" />
              <p>Our mineral products are currently supplied to customers across Tamil Nadu, with expanding reach into Pondicherry, Kerala, Karnataka, and Andhra Pradesh.</p>
              <div className="global-regions-list">
                {regions.map((r, i) => (
                  <div key={i} className="global-region-row">
                    <div>
                      <strong className="global-region-name">{r.region}</strong>
                      <span className="global-region-products">{r.products}</span>
                    </div>
                    <span className="global-region-badge" style={{ background: r.color }}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* India Map SVG */}
            <div className="global-map-box">
              <svg viewBox="0 0 400 500" style={{ width: '100%', maxWidth: '340px', margin: '0 auto', display: 'block' }}>
                <path d="M200 30 L240 40 L270 60 L290 90 L310 120 L320 160 L310 200 L330 230 L340 270 L320 310 L290 340 L260 370 L230 400 L200 420 L170 400 L140 370 L110 340 L80 310 L70 270 L80 230 L100 200 L90 160 L100 120 L120 90 L140 60 L170 40 Z"
                  fill="rgba(245,166,35,0.06)" stroke="rgba(245,166,35,0.3)" strokeWidth="2" />
                <path d="M150 340 L180 330 L210 335 L230 350 L220 380 L200 400 L175 395 L155 375 L148 355 Z"
                  fill="rgba(245,166,35,0.35)" stroke="var(--color-accent)" strokeWidth="1.5" />
                <circle cx="168" cy="358" r="7" fill="var(--color-accent)" />
                <circle cx="168" cy="358" r="13" fill="none" stroke="rgba(245,166,35,0.4)" strokeWidth="2" strokeDasharray="4 2" />
                <text x="183" y="355" fontSize="11" fill="var(--color-text)" fontWeight="700" fontFamily="Inter, sans-serif">Coimbatore</text>
                <text x="183" y="368" fontSize="9" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Our HQ</text>
                <rect x="10" y="440" width="12" height="12" rx="2" fill="rgba(245,166,35,0.35)" stroke="var(--color-accent)" strokeWidth="1" />
                <text x="28" y="451" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Tamil Nadu (Primary)</text>
                <circle cx="16" cy="470" r="5" fill="var(--color-accent)" />
                <text x="28" y="474" fontSize="10" fill="var(--color-text-muted)" fontFamily="Inter, sans-serif">Our Location — Coimbatore</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="global-districts-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Districts We Serve</h2>
            <div className="divider" />
          </div>
          <div className="global-districts-grid">
            {districts.map((d, i) => (
              <div key={i} className="global-district-card">
                <span className="global-district-icon">📍</span>
                <strong className="global-district-name">{d}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="global-logistics-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Logistics Advantage</h2>
            <div className="divider" />
          </div>
          <div className="global-logistics-grid">
            {logisticsItems.map((item, i) => (
              <div key={i} className="global-logistics-card">
                <span className="global-logistics-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
