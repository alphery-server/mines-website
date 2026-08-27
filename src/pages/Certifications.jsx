import { Award } from 'lucide-react';
import './SharedPages.css';

const certifications = [
  { name: 'Mining Lease License', issuer: 'Tamil Nadu State Mining Department', validity: 'Valid & Current', desc: 'Government-issued mining lease for quarry operations, permitting mineral extraction in compliance with the Mines and Minerals (Development and Regulation) Act.', icon: '⛏️', category: 'Mining' },
  { name: 'Environmental Clearance', issuer: 'Tamil Nadu Pollution Control Board', validity: 'Valid & Current', desc: 'Environmental compliance certificate issued by TNPCB confirming that our operations meet environmental protection standards.', icon: '🌿', category: 'Environment' },
  { name: 'GST Registration', issuer: 'Government of India — GST Portal', validity: 'Permanent', desc: 'Registered supplier under the Goods and Services Tax Act (GST) for supply of minerals and construction materials.', icon: '📋', category: 'Legal' },
  { name: 'MSME Registration', issuer: 'Ministry of MSME, Government of India', validity: 'Permanent', desc: 'Registered as a Micro, Small and Medium Enterprise (MSME) under the MSMED Act, demonstrating our formal business standing.', icon: '🏢', category: 'Business' },
  { name: 'Trade License', issuer: 'Coimbatore Corporation / Municipality', validity: 'Annual Renewal', desc: 'Valid trade license for our business operations issued by the local municipal authority in Coimbatore.', icon: '📄', category: 'Legal' },
  { name: 'Quality Test Reports', issuer: 'NABL Accredited Laboratory', validity: 'Per Batch', desc: 'Product quality certificates and test reports issued by NABL accredited testing laboratories for M-Sand, P-Sand, and Limestone products.', icon: '🔬', category: 'Quality' },
];

export default function Certifications() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Award size={13} /> Certifications</div>
          <h1>Certifications & Approvals</h1>
          <p>Licensed, compliant, and certified — everything you need to verify before partnering with us.</p>
        </div>
      </section>

      <section className="certs-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Certifications</h2>
            <div className="divider" />
            <p>We maintain all required licenses, certifications, and approvals to operate legally and responsibly. Copies of any certificate are available on request.</p>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon-wrap">{cert.icon}</div>
                <span className="cert-category-badge">{cert.category}</span>
                <h4>{cert.name}</h4>
                <p>{cert.desc}</p>
                <div className="cert-footer">
                  <span className="cert-issuer"><strong>Issuer:</strong> {cert.issuer}</span>
                  <span className="cert-validity">✓ {cert.validity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2>Need Certification Documents?</h2>
          <p>Copies of our certifications are available on request for vendor registration and project compliance purposes.</p>
          <a href="mailto:info@vasantharagammines.in" className="btn btn-primary">Request Documents</a>
        </div>
      </section>
    </main>
  );
}
