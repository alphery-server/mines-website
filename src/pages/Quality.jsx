import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical } from 'lucide-react';
import './SharedPages.css';

const processSteps = [
  { step: '01', title: 'Raw Material Inspection', desc: 'Incoming rock and mineral samples are inspected and tested before entering the production line. Substandard raw material is rejected at source.' },
  { step: '02', title: 'In-Process Testing', desc: 'Samples are collected at each crushing and screening stage to monitor particle size, shape, and quality in real-time.' },
  { step: '03', title: 'Final Product Testing', desc: 'Every finished batch undergoes comprehensive laboratory testing before being cleared for dispatch.' },
  { step: '04', title: 'Documentation', desc: 'Test reports are prepared for every supply consignment, providing complete traceability and quality evidence.' },
  { step: '05', title: 'Continuous Improvement', desc: 'We monitor quality trends and continuously improve our production processes to maintain and raise standards.' },
  { step: '06', title: 'Customer Feedback', desc: 'We actively collect and act on customer feedback to ensure our quality meets real-world project requirements.' },
];

const labTests = [
  { test: 'Sieve Analysis', standard: 'IS 2386 Part 1', product: 'M-Sand, P-Sand, Limestone' },
  { test: 'Silt Content Test', standard: 'IS 2386 Part 2', product: 'M-Sand, P-Sand' },
  { test: 'Fineness Modulus', standard: 'IS 383', product: 'M-Sand, P-Sand' },
  { test: 'Specific Gravity', standard: 'IS 2386 Part 3', product: 'All Products' },
  { test: 'Water Absorption', standard: 'IS 2386 Part 3', product: 'M-Sand, P-Sand' },
  { test: 'Chemical Analysis', standard: 'IS 1760', product: 'Limestone' },
  { test: 'CaCO₃ Content', standard: 'ASTM C25', product: 'Limestone' },
  { test: 'Bulk Density', standard: 'IS 2386 Part 3', product: 'All Products' },
];

const techItems = [
  { icon: '⚙️', title: 'VSI Crusher', desc: 'Vertical Shaft Impact (VSI) crusher produces cubical, well-graded M-Sand particles that closely resemble natural river sand.' },
  { icon: '🔄', title: 'Cone Crushers', desc: 'Secondary and tertiary cone crushers reduce aggregate size progressively for precise product grading.' },
  { icon: '📊', title: 'Vibrating Screens', desc: 'Multi-deck vibrating screens accurately classify crushed material into product-specific size fractions.' },
  { icon: '💧', title: 'Washing Systems', desc: 'Wet processing and hydrocyclone systems remove excess dust and clay to meet strict quality specifications.' },
  { icon: '🔬', title: 'In-house Laboratory', desc: 'Fully equipped testing laboratory for sieve analysis, silt content, FM value, and other key quality parameters.' },
  { icon: '🏗️', title: 'Conveyor Systems', desc: 'Automated conveyor systems with dust suppression ensure efficient, contamination-free material handling.' },
];

export default function Quality() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><FlaskConical size={13} /> Quality & Technology</div>
          <h1>Quality You Can Count On</h1>
          <p>Every tonne tested, every batch certified — our commitment to quality is unwavering.</p>
        </div>
      </section>

      {/* QA Process */}
      <section className="quality-process">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}><FlaskConical size={13} /> Quality Assurance</div>
            <h2>Our Quality Control Process</h2>
            <div className="divider" />
            <p>We maintain strict quality controls at every stage of production to ensure you receive consistent, specification-compliant materials every time.</p>
          </div>
          <div className="quality-process-grid">
            {processSteps.map((item, i) => (
              <div key={i} className="quality-process-step">
                <div className="quality-step-num">{item.step}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Tests */}
      <section className="quality-lab">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}><FlaskConical size={13} /> Laboratory Testing</div>
            <h2>Tests We Conduct</h2>
            <div className="divider" />
          </div>
          <div className="quality-lab-grid">
            {labTests.map((t, i) => (
              <div key={i} className="quality-lab-row">
                <div>
                  <strong className="quality-lab-name">{t.test}</strong>
                  <span className="quality-lab-product">{t.product}</span>
                </div>
                <span className="quality-lab-std">{t.standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="quality-tech">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Processing Technology</div>
            <h2>Our Equipment & Technology</h2>
            <div className="divider" />
          </div>
          <div className="quality-tech-grid">
            {techItems.map((item, i) => (
              <div key={i} className="quality-tech-card">
                <span className="quality-tech-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-cta">
        <div className="container">
          <h2>Request Test Reports</h2>
          <p>We provide product-specific test reports on request. Contact us for samples and documentation.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
