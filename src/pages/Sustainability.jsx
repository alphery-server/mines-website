import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import './SharedPages.css';

const pillars = [
  {
    icon: '🌍',
    title: 'Environment',
    points: ['Dust suppression at all quarry faces', 'Plantation and green buffer zones', 'Water recycling in washing operations', 'Waste rock management', 'Zero untreated effluent discharge'],
  },
  {
    icon: '👷',
    title: 'People & Safety',
    points: ['Mandatory PPE for all workers', 'Regular safety training programs', 'Fire safety and emergency protocols', 'Health monitoring for workers', 'Zero tolerance for unsafe practices'],
  },
  {
    icon: '🏘️',
    title: 'Community',
    points: ['Preferential local employment', 'Support for community infrastructure', 'Road maintenance near mining areas', 'Transparent communication with locals', 'Fair land dealings and compensation'],
  },
];

const goals = [
  { year: '2025', goal: 'Complete rehabilitation plans for all operating quarry sites' },
  { year: '2025', goal: 'Achieve 100% dust suppression coverage across all production areas' },
  { year: '2026', goal: 'Introduce solar power generation at our processing plant' },
  { year: '2026', goal: 'Establish zero liquid discharge (ZLD) water management system' },
  { year: '2027', goal: 'ISO 14001 Environmental Management certification' },
  { year: '2027', goal: 'Achieve 30% local employment across all operations' },
];

export default function Sustainability() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Leaf size={13} /> Sustainability</div>
          <h1>Mining Responsibly</h1>
          <p>Our commitment to the environment, our people, and the communities where we operate.</p>
        </div>
      </section>

      {/* Responsible Mining */}
      <section className="sust-hero-section">
        <div className="container">
          <div className="sust-hero-grid">
            <div className="sust-hero-content">
              <div className="section-label"><Leaf size={13} /> Responsible Mining</div>
              <h2>Extraction With a Conscience</h2>
              <div className="divider divider-left" />
              <p>We believe that the minerals that build tomorrow's infrastructure must be extracted with respect for today's environment. Vasantharagam Mines & Minerals is committed to responsible mining practices that minimize environmental impact and maximize resource efficiency.</p>
              <p style={{ marginTop: '14px' }}>All our mining operations are conducted under valid government licenses and strictly adhere to the regulations set by the State Mining Department and Tamil Nadu Pollution Control Board.</p>
              <div className="sust-hero-points">
                {['Valid government mining lease compliance', 'Environmental clearance adherence', 'Dust suppression systems at all sites', 'Progressive land reclamation planning', 'Water management and conservation'].map(p => (
                  <div key={p} className="sust-hero-point">
                    <Leaf size={14} /> {p}
                  </div>
                ))}
              </div>
            </div>
            <img src="/mining_hero.png" alt="Responsible mining" className="sust-hero-img" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="sust-pillars-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Sustainability Pillars</h2>
            <div className="divider" />
          </div>
          <div className="sust-pillars-grid">
            {pillars.map((pillar, i) => (
              <div key={i} className="sust-pillar-card">
                <span className="sust-pillar-icon">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <ul className="sust-pillar-list">
                  {pillar.points.map(pt => (
                    <li key={pt} className="sust-pillar-item">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="sust-goals-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Future Goals</div>
            <h2>Building a Sustainable Tomorrow</h2>
            <div className="divider" />
          </div>
          <div className="sust-goals-grid">
            {goals.map((g, i) => (
              <div key={i} className="sust-goal-card">
                <span className="sust-goal-year">{g.year}</span>
                <p>{g.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
