import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import './Products.css';

const products = [
  {
    img: '/msand_product.png',
    name: 'M-Sand',
    full: 'Manufactured Sand',
    slug: 'm-sand',
    desc: 'Crushed from hard granite rock using VSI technology. An IS-approved alternative to river sand, ideal for concrete, foundation, and RCC works.',
    applications: ['Concrete Work', 'RCC Structures', 'Foundation Works', 'Plastering'],
    specs: [{ label: 'Grade', value: 'Zone II / Zone III' }, { label: 'FM Value', value: '2.7 – 3.2' }, { label: 'Silt Content', value: '< 2%' }],
    tag: 'Most Popular',
    color: '#C17D47',
  },
  {
    img: '/psand_product.png',
    name: 'P-Sand',
    full: 'Plastering Sand',
    slug: 'p-sand',
    desc: 'Finely graded sand manufactured specifically for plastering applications. Provides a smooth, durable finish for walls and ceilings.',
    applications: ['Wall Plastering', 'Ceiling Plaster', 'Interior Finishing', 'Block Masonry'],
    specs: [{ label: 'Grade', value: 'Fine Grade' }, { label: 'FM Value', value: '1.8 – 2.4' }, { label: 'Silt Content', value: '< 1.5%' }],
    tag: 'Best for Finishing',
    color: '#8B5E3C',
  },
  {
    img: '/limestone_product.png',
    name: 'Limestone',
    full: 'Limestone Minerals',
    slug: 'limestone',
    desc: 'High-purity limestone extracted from our licensed mines in Tamil Nadu. Widely used in cement production, industrial processing, and agriculture.',
    applications: ['Cement Industry', 'Steel Plants', 'Industrial Use', 'Agriculture'],
    specs: [{ label: 'CaCO₃ Content', value: '90–96%' }, { label: 'Form', value: 'Lumps / Powder' }, { label: 'Grade', value: 'Industrial Grade' }],
    tag: 'Industrial Grade',
    color: '#5A6E4A',
  },
];

export default function Products() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Package size={13} /> Our Products</div>
          <h1>Premium Mineral Products</h1>
          <p>Manufactured to the highest standards from our licensed quarry sites in Tamil Nadu.</p>
        </div>
      </section>

      {/* Products Listing */}
      <section className="products-list-section">
        <div className="container">
          {products.map((product, i) => (
            <div key={i} className={`product-list-item ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="product-list-img-wrap">
                <img src={product.img} alt={product.name} className="product-list-img" />
                <div className="product-list-tag" style={{ background: product.color }}>{product.tag}</div>
              </div>
              <div className="product-list-content">
                <div className="section-label"><Package size={13} /> {product.full}</div>
                <h2 className="product-list-name">{product.name}</h2>
                <div className="divider divider-left" />
                <p>{product.desc}</p>

                <div className="product-list-specs">
                  {product.specs.map(spec => (
                    <div key={spec.label} className="product-spec-item">
                      <span className="product-spec-label">{spec.label}</span>
                      <span className="product-spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="product-list-apps">
                  <strong>Applications:</strong>
                  <div className="product-app-tags">
                    {product.applications.map(app => (
                      <span key={app} className="product-app-tag">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="product-list-actions">
                  <Link to={`/products/${product.slug}`} className="btn btn-dark">
                    View Full Details <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn btn-outline">Request Quote</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Need a Custom Specification?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px', fontSize: '1.05rem' }}>We work with clients to provide products tailored to specific project requirements. Get in touch with our team.</p>
          <Link to="/contact" className="btn btn-primary">Contact Our Team <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
