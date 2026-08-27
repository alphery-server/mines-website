import { Link } from 'react-router-dom';
import { ArrowRight, Truck } from 'lucide-react';
import './SharedPages.css';

const bulkSpecs = [
  { label: 'Minimum Order', value: '10 MT (1 tipper)' },
  { label: 'Standard Delivery', value: '10–20 MT per trip' },
  { label: 'Daily Capacity', value: 'Up to 200 MT/day' },
  { label: 'Monthly Supply', value: '2,000–5,000 MT' },
  { label: 'Lead Time', value: '24–48 hours' },
];

const processSteps = [
  { icon: '📞', title: 'Enquiry', desc: 'Contact us with your product, quantity, and delivery requirements' },
  { icon: '💬', title: 'Quotation', desc: 'Receive competitive pricing within a few hours' },
  { icon: '✅', title: 'Order Confirmation', desc: 'Confirm the order with delivery details and schedule' },
  { icon: '🏭', title: 'Processing', desc: 'Material is prepared, tested, and cleared for dispatch' },
  { icon: '🚚', title: 'Dispatch', desc: 'Loaded trucks dispatched with delivery challan' },
  { icon: '🏗️', title: 'Delivery', desc: 'Material delivered to your site with documentation' },
];

const docs = ['Delivery Challan', 'Tax Invoice (GST)', 'Quality Test Report', 'Weighbridge Slip', 'Vehicle Registration Copy', 'Material Safety Info'];

export default function Logistics() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Truck size={13} /> Logistics & Supply</div>
          <h1>Reliable Supply, Every Time</h1>
          <p>Flexible bulk supply with dedicated logistics for timely delivery to your project site.</p>
        </div>
      </section>

      {/* Bulk Supply */}
      <section className="logistics-bulk-section">
        <div className="container">
          <div className="logistics-bulk-grid">
            <div>
              <div className="section-label"><Truck size={13} /> Bulk Supply</div>
              <h2 className="logistics-bulk-content">Large-Volume Supply Capability</h2>
              <div className="divider divider-left" />
              <p>Vasantharagam Mines & Minerals specializes in bulk mineral supply for large construction and industrial projects. Our production capacity of 50,000+ MT per year allows us to fulfill large, ongoing supply contracts with consistency.</p>
              <div className="logistics-specs-list">
                {bulkSpecs.map(item => (
                  <div key={item.label} className="logistics-spec-row">
                    <span className="logistics-spec-label">{item.label}</span>
                    <strong className="logistics-spec-value">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <img src="/mining_hero.png" alt="Logistics" className="logistics-bulk-img" />
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="logistics-process-section">
        <div className="container">
          <div className="section-header">
            <h2>Order to Delivery Process</h2>
            <div className="divider" />
          </div>
          <div className="logistics-steps-row">
            {processSteps.map((s, i) => (
              <div key={i} className="logistics-step">
                <div className="logistics-step-icon">{s.icon}</div>
                <strong className="logistics-step-title">{s.title}</strong>
                <p className="logistics-step-desc">{s.desc}</p>
                {i < processSteps.length - 1 && <div className="logistics-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="logistics-docs-section">
        <div className="container">
          <div className="section-header">
            <h2>Supply Documentation</h2>
            <div className="divider" />
            <p>Every supply consignment is accompanied by complete documentation for your records and project compliance.</p>
          </div>
          <div className="logistics-docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="logistics-doc-card">
                <span className="logistics-doc-icon">📄</span>
                <span className="logistics-doc-label">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2>Ready to Place Your Order?</h2>
          <p>Contact us with your requirements and we'll arrange delivery within 24–48 hours.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
