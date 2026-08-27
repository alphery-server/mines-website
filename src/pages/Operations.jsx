import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import './Operations.css';

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Geological Exploration',
    desc: 'Our team conducts thorough geological surveys to identify quality mineral deposits suitable for extraction. Only sites with the required quality and volume are selected.',
    details: ['Geological mapping and analysis', 'Core sampling and testing', 'Reserve estimation', 'Environmental feasibility study'],
  },
  {
    num: '02',
    icon: '⛏️',
    title: 'Mining & Extraction',
    desc: 'Responsible extraction using licensed quarrying techniques. We operate under valid government mining leases and comply with all environmental and safety regulations.',
    details: ['Licensed quarry operations', 'Drill and blast techniques', 'Mechanical excavation', 'Overburden management'],
  },
  {
    num: '03',
    icon: '🏭',
    title: 'Primary Crushing',
    desc: 'Extracted rock and limestone are fed into primary jaw crushers to reduce large boulders into manageable aggregate sizes for further processing.',
    details: ['Jaw crusher primary reduction', 'Conveyor feeding systems', 'Dust suppression systems', 'Size reduction to 40–80mm'],
  },
  {
    num: '04',
    icon: '⚙️',
    title: 'Crushing & Screening',
    desc: 'Secondary and tertiary crushing through cone crushers and VSI machines to achieve required product sizes. Multi-deck screens classify the output.',
    details: ['VSI crushing for M-Sand & P-Sand', 'Multi-stage cone crushing', 'Vibrating screen classification', 'Recycling of oversize material'],
  },
  {
    num: '05',
    icon: '💧',
    title: 'Washing & Classification',
    desc: 'Where required, crushed material is washed to remove excess dust and clay. Classification ensures precise grading per product specification.',
    details: ['Hydrocyclone washing systems', 'Log washers for clay removal', 'Wet classification and dewatering', 'Moisture optimization'],
  },
  {
    num: '06',
    icon: '🔬',
    title: 'Quality Testing',
    desc: 'Every batch is tested in our in-house laboratory for key quality parameters before being cleared for supply. Non-conforming material is rejected.',
    details: ['Sieve analysis / grading', 'Silt content measurement', 'FM value testing', 'Specific gravity & absorption'],
  },
  {
    num: '07',
    icon: '🏗️',
    title: 'Storage & Stockpiling',
    desc: 'Approved products are stockpiled in dedicated covered storage areas segregated by product and grade, preventing contamination and moisture issues.',
    details: ['Grade-wise segregation', 'Covered storage bays', 'Contamination prevention', 'FIFO inventory management'],
  },
  {
    num: '08',
    icon: '🚚',
    title: 'Transportation',
    desc: 'Our dedicated transport fleet delivers products directly to your project site. We coordinate loading, dispatch, and delivery to ensure on-time arrival.',
    details: ['Dedicated tipper fleet', 'GPS tracked deliveries', 'Load verification', 'Site delivery management'],
  },
  {
    num: '09',
    icon: '🤝',
    title: 'Customer Delivery',
    desc: 'Final delivery to your project site with proper documentation including delivery challan, quality test report, and invoice. On-site support available.',
    details: ['Delivery challan & documentation', 'Quality test report with each supply', 'Customer satisfaction follow-up', 'Repeat order facilitation'],
  },
];

export default function Operations() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Factory size={13} /> Mining & Operations</div>
          <h1>Our Complete Operations</h1>
          <p>From geological exploration to your project site — we control every step of the supply chain.</p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px', textAlign: 'center' }}>Integrated Supply Chain</h2>
          <p style={{ textAlign: 'center', fontSize: '1.05rem' }}>At Vasantharagam Mines & Minerals, we don't just supply minerals — we control the entire production and delivery chain. This integrated approach ensures quality, consistency, and reliability at every stage.</p>
        </div>
      </section>

      {/* Operations Flow */}
      <section className="operations-section">
        <div className="container">
          <div className="operations-flow">
            {steps.map((step, i) => (
              <div key={i} className={`op-step ${i % 2 === 0 ? 'op-step-left' : 'op-step-right'}`}>
                <div className="op-step-num">{step.num}</div>
                <div className="op-step-icon">{step.icon}</div>
                <div className="op-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="op-step-details">
                    {step.details.map(d => <li key={d}>✓ {d}</li>)}
                  </ul>
                </div>
                {i < steps.length - 1 && <div className="op-step-arrow">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Place a Bulk Order?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>Our operations are ready to fulfill your mineral supply requirements.</p>
          <Link to="/contact" className="btn btn-primary">Get a Quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
