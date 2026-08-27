import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import './ProductDetail.css';

const productData = {
  'm-sand': {
    name: 'M-Sand',
    full: 'Manufactured Sand (M-Sand)',
    img: '/msand_product.png',
    tag: 'Most Popular',
    overview: 'Manufactured Sand (M-Sand) is produced by crushing hard granite rock through a VSI (Vertical Shaft Impactor) machine to obtain cubical-shaped particles. It is an IS 383:2016 approved material and a superior, eco-friendly alternative to river sand for all concrete and construction applications.',
    source: 'Extracted from granite quarries in Tamil Nadu and processed at our state-of-the-art crushing plant in Coimbatore.',
    specs: [
      { label: 'Grade', value: 'Zone II / Zone III' },
      { label: 'Fineness Modulus (FM)', value: '2.7 – 3.2' },
      { label: 'Silt Content', value: '< 2%' },
      { label: 'Water Absorption', value: '< 2.5%' },
      { label: 'Specific Gravity', value: '2.6 – 2.7' },
      { label: 'Particle Shape', value: 'Cubical / Angular' },
      { label: 'Size Range', value: '0 – 4.75 mm' },
      { label: 'Moisture Content', value: '< 1%' },
      { label: 'Standard', value: 'IS 383:2016' },
      { label: 'Packaging', value: 'Loose / Tipper load' },
    ],
    applications: [
      { title: 'Concrete Work', desc: 'Used in M20, M25, M30 and higher grade concrete mixes for structural works.' },
      { title: 'RCC Structures', desc: 'Ideal for reinforced cement concrete slabs, beams, columns and foundations.' },
      { title: 'Foundation Works', desc: 'Provides superior strength and stability in deep foundation applications.' },
      { title: 'Precast Elements', desc: 'Used in manufacturing precast concrete blocks, pipes, and structural elements.' },
      { title: 'Plaster (Base Coat)', desc: 'Suitable for base coat plastering applications.' },
      { title: 'Road Construction', desc: 'Used in pavement concrete mixes for road and highway projects.' },
    ],
    quality: 'Every batch of M-Sand undergoes rigorous laboratory testing for silt content, fineness modulus, specific gravity, and water absorption before dispatch. Our in-house quality team ensures IS 383:2016 compliance for every supply.',
    capacity: '30,000+ MT per year. Available in loose tipper loads for bulk project supply.',
    advantages: ['Superior workability compared to river sand', 'Consistent particle shape and gradation', 'Zero organic impurities', 'IS 383:2016 compliant', 'Eco-friendly – preserves river ecosystems'],
  },
  'p-sand': {
    name: 'P-Sand',
    full: 'Plastering Sand (P-Sand)',
    img: '/psand_product.png',
    tag: 'Best for Finishing',
    overview: 'P-Sand (Plastering Sand) is a finely graded manufactured sand specifically designed for plastering applications. It is produced by controlled crushing and classification to achieve the precise fineness required for a smooth, crack-free plaster finish on walls and ceilings.',
    source: 'Produced from granite stone at our processing plant in Tamil Nadu, with controlled particle size classification for plastering grade specifications.',
    specs: [
      { label: 'Grade', value: 'Fine Grade (Plastering)' },
      { label: 'Fineness Modulus (FM)', value: '1.8 – 2.4' },
      { label: 'Silt Content', value: '< 1.5%' },
      { label: 'Water Absorption', value: '< 2%' },
      { label: 'Specific Gravity', value: '2.6 – 2.65' },
      { label: 'Particle Shape', value: 'Fine / Smooth' },
      { label: 'Size Range', value: '0 – 2.36 mm' },
      { label: 'Moisture Content', value: '< 1%' },
      { label: 'Standard', value: 'IS 383:2016' },
      { label: 'Packaging', value: 'Loose / Tipper load' },
    ],
    applications: [
      { title: 'Wall Plastering', desc: 'Interior and exterior wall plaster for residential, commercial and industrial buildings.' },
      { title: 'Ceiling Plaster', desc: 'Smooth ceiling plaster finish for all construction types.' },
      { title: 'Interior Finishing', desc: 'Used for final coat interior finishing for a premium look.' },
      { title: 'Block Masonry', desc: 'Mortar mix for AAC block and brick laying.' },
      { title: 'Tile Work', desc: 'As a base material for tile adhesive mixes.' },
      { title: 'Pointing Work', desc: 'Used in pointing and joint filling for masonry.' },
    ],
    quality: 'P-Sand is tested for fineness modulus, silt content, specific gravity, and particle size distribution. Fine grade classification ensures a consistently smooth finish in all plastering applications.',
    capacity: '15,000+ MT per year. Available in loose tipper loads.',
    advantages: ['Finer gradation for smooth plaster finish', 'Consistent quality batch to batch', 'Reduces plaster cracking', 'Zero organic matter', 'Better bonding strength than river sand'],
  },
  'limestone': {
    name: 'Limestone',
    full: 'Limestone Minerals',
    img: '/limestone_product.png',
    tag: 'Industrial Grade',
    overview: 'Limestone is a sedimentary rock composed primarily of calcium carbonate (CaCO₃). Vasantharagam Mines & Minerals supplies industrial-grade limestone extracted from our licensed mines in Tamil Nadu. Our limestone is widely used in cement production, steel manufacturing, chemical processing, and agriculture.',
    source: 'Extracted from limestone mines in Tamil Nadu under valid government mining leases, and processed to required sizes and purity levels.',
    specs: [
      { label: 'CaCO₃ Content', value: '90 – 96%' },
      { label: 'Form', value: 'Lumps / Crushed / Powder' },
      { label: 'Size', value: '0–10mm / 10–20mm / 20–40mm / Lumps' },
      { label: 'MgO Content', value: '< 3.5%' },
      { label: 'SiO₂ Content', value: '< 2%' },
      { label: 'Moisture', value: '< 2%' },
      { label: 'Colour', value: 'White / Off-White / Light Grey' },
      { label: 'Grade', value: 'Industrial / Agricultural' },
      { label: 'Packaging', value: 'Loose / Bulk' },
    ],
    applications: [
      { title: 'Cement Industry', desc: 'Primary raw material in cement clinker production for OPC and PPC cement plants.' },
      { title: 'Steel Manufacturing', desc: 'Used as flux in blast furnaces to remove impurities during steel production.' },
      { title: 'Chemical Processing', desc: 'Used in chemical plants for production of lime (CaO) and calcium carbide.' },
      { title: 'Water Treatment', desc: 'Used in water treatment plants for pH correction and purification.' },
      { title: 'Agriculture', desc: 'Agricultural lime for soil pH correction and improving crop yield.' },
      { title: 'Glass Manufacturing', desc: 'Ingredient in glass production as a source of CaO.' },
    ],
    quality: 'Limestone is tested for CaCO₃ purity, moisture content, and chemical composition. Each consignment is accompanied by a test report for key parameters.',
    capacity: '10,000+ MT per year. Available in various sizes and grades for different industrial applications.',
    advantages: ['High CaCO₃ purity (90–96%)', 'Available in multiple size fractions', 'Consistent chemical composition', 'Sourced from licensed mines', 'Bulk supply capability'],
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData[slug];
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', quantity: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <Navigate to="/products" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-bg">
          <img src={product.img} alt={product.name} />
          <div className="product-detail-hero-overlay" />
        </div>
        <div className="container product-detail-hero-content">
          <div className="section-label"><Package size={13} /> {product.tag}</div>
          <h1>{product.full}</h1>
          <p>{product.overview.slice(0, 120)}...</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href="#enquiry" className="btn btn-primary">Request a Quote <ArrowRight size={16} /></a>
            <Link to="/products" className="btn btn-secondary">← All Products</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="product-detail-main">
        <div className="container product-detail-grid">
          {/* Left: Main Info */}
          <div className="product-detail-content">

            {/* Overview */}
            <div className="product-section-block">
              <h3>Product Overview</h3>
              <p>{product.overview}</p>
              <p style={{ marginTop: '12px' }}><strong>Source:</strong> {product.source}</p>
            </div>

            {/* Specs */}
            <div className="product-section-block">
              <h3>Product Specifications</h3>
              <div className="product-specs-table">
                {product.specs.map(spec => (
                  <div key={spec.label} className="spec-row">
                    <span className="spec-name">{spec.label}</span>
                    <span className="spec-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="product-section-block">
              <h3>Applications</h3>
              <div className="applications-grid">
                {product.applications.map(app => (
                  <div key={app.title} className="app-card">
                    <CheckCircle size={18} className="app-check" />
                    <div>
                      <strong>{app.title}</strong>
                      <p>{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div className="product-section-block quality-block">
              <h3>Quality Assurance</h3>
              <p>{product.quality}</p>
              <div className="quality-badges">
                <span className="quality-badge">🔬 Lab Tested</span>
                <span className="quality-badge">📋 IS Standard</span>
                <span className="quality-badge">✅ Batch Certified</span>
              </div>
            </div>

            {/* Supply */}
            <div className="product-section-block">
              <h3>Supply Capability</h3>
              <p>{product.capacity}</p>
              <div className="advantage-list">
                {product.advantages.map(adv => (
                  <div key={adv} className="advantage-item">
                    <CheckCircle size={14} /> {adv}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="product-detail-sidebar">
            <div id="enquiry" className="enquiry-form-card">
              <h3>Request a Quote</h3>
              <p>Fill in your details and we'll get back to you within 24 hours.</p>
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={40} />
                  <strong>Thank You!</strong>
                  <p>Your enquiry has been received. We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" required placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Company / Project</label>
                    <input type="text" placeholder="Company or Project Name" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="you@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Required Quantity *</label>
                    <input type="text" required placeholder="e.g. 500 MT" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Delivery location, grade preference, timeline..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Enquiry <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            <div className="sidebar-contact-card">
              <h4>Direct Contact</h4>
              <a href="tel:+919791611143" className="sidebar-contact-link"><Phone size={15} /> 97916 11143</a>
              <a href="tel:+919865213633" className="sidebar-contact-link"><Phone size={15} /> 98652 13633</a>
              <a href="mailto:info@vasantharagammines.in" className="sidebar-contact-link"><Mail size={15} /> info@vasantharagammines.in</a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style={{ padding: '60px 0', background: 'var(--color-cream-dark)' }}>
        <div className="container">
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '24px' }}>Other Products</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {Object.entries(productData).filter(([s]) => s !== slug).map(([s, p]) => (
              <Link key={s} to={`/products/${s}`} className="related-product-card">
                <img src={p.img} alt={p.name} />
                <div>
                  <strong>{p.name}</strong>
                  <span>{p.full}</span>
                </div>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
