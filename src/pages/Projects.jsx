import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import './SharedPages.css';

const projects = [
  { name: 'Large Residential Township — Coimbatore', location: 'Coimbatore, Tamil Nadu', product: 'M-Sand & P-Sand', quantity: '2,500+ MT', application: 'Structural concrete & plastering', desc: 'Supplied M-Sand and P-Sand for a major residential township project comprising 500+ apartments. Ensured consistent quality and on-time delivery across 18 months of construction.', status: 'Completed' },
  { name: 'NH Bypass Road Construction', location: 'Salem, Tamil Nadu', product: 'M-Sand, Aggregates', quantity: '1,800+ MT', application: 'Road concrete and base works', desc: 'Provided M-Sand and crushed aggregates for a national highway bypass construction project. Regular bulk deliveries maintained the project schedule.', status: 'Completed' },
  { name: 'Cement Plant Raw Material Supply', location: 'Erode, Tamil Nadu', product: 'Limestone', quantity: '5,000+ MT', application: 'Cement clinker production', desc: 'Long-term limestone supply partnership with a regional cement manufacturer. Supplying high-purity limestone (93%+ CaCO₃) on a monthly contract basis.', status: 'Ongoing' },
  { name: 'Commercial Complex Construction', location: 'Tiruppur, Tamil Nadu', product: 'M-Sand & P-Sand', quantity: '800+ MT', application: 'Concrete & plastering works', desc: 'Complete sand supply for a four-storey commercial complex including retail spaces and offices. Delivered in phased loads aligned with construction progress.', status: 'Completed' },
  { name: 'Industrial Facility Construction', location: 'SIPCOT, Perundurai', product: 'M-Sand', quantity: '1,200+ MT', application: 'Factory floor & structural concrete', desc: 'Supplied large quantities of M-Sand for the construction of an industrial factory floor and structural concrete works at SIPCOT Industrial Park, Perundurai.', status: 'Completed' },
  { name: 'Government School Construction', location: 'Namakkal District, Tamil Nadu', product: 'M-Sand & P-Sand', quantity: '350+ MT', application: 'Structural & plastering works', desc: 'Provided quality M-Sand and P-Sand for government school building construction. Delivered quality test reports with every consignment for documentation compliance.', status: 'Completed' },
];

const detailLabels = [
  { label: '📍 Location', key: 'location' },
  { label: '📦 Product', key: 'product' },
  { label: '⚖️ Quantity', key: 'quantity' },
  { label: '🔧 Application', key: 'application' },
];

export default function Projects() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Award size={13} /> Projects</div>
          <h1>Projects We've Served</h1>
          <p>Building credibility through reliable supply to construction, industrial, and infrastructure projects.</p>
        </div>
      </section>

      <section className="projects-list-section">
        <div className="container">
          <div className="projects-list-grid">
            {projects.map((proj, i) => (
              <div key={i} className="project-card">
                <div className="project-card-header">
                  <h3 className="project-card-title">{proj.name}</h3>
                  <span className={`project-status-badge ${proj.status === 'Ongoing' ? 'project-status-ongoing' : 'project-status-done'}`}>{proj.status}</span>
                </div>
                <p className="project-card-desc">{proj.desc}</p>
                <div className="project-details-grid">
                  {detailLabels.map(item => (
                    <div key={item.label} className="project-detail-item">
                      <span className="project-detail-label">{item.label}</span>
                      <strong className="project-detail-value">{proj[item.key]}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2>Add Your Project to Our List</h2>
          <p>Ready to start your next project? We're ready to supply the quality minerals you need.</p>
          <Link to="/contact" className="btn btn-primary">Get a Quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
