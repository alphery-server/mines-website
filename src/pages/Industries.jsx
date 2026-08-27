import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import './SharedPages.css';

const industries = [
  { icon: '🏗️', title: 'Construction', desc: 'Our M-Sand and P-Sand are the backbone of residential, commercial, and industrial construction projects. From foundations to finishing, our products meet all construction material requirements.', products: ['M-Sand for concrete', 'P-Sand for plastering', 'Aggregate for fill'], applications: ['Apartments & villas', 'Commercial complexes', 'Industrial facilities', 'School & hospital buildings'] },
  { icon: '🛣️', title: 'Infrastructure', desc: 'Roads, bridges, flyovers, and public infrastructure projects rely on quality aggregates and sand for durable construction. We supply bulk quantities to infrastructure contractors.', products: ['M-Sand for road concrete', 'Limestone for sub-base'], applications: ['National highways', 'State roads & bridges', 'Flyovers & underpasses', 'Metro construction'] },
  { icon: '🏭', title: 'Cement Industry', desc: 'Limestone is the primary raw material in cement production. We supply high-purity limestone (90–96% CaCO₃) to cement plants for clinker production.', products: ['Limestone lumps', 'Limestone powder'], applications: ['OPC cement production', 'PPC cement production', 'White cement', 'Fly ash cement'] },
  { icon: '⚙️', title: 'Manufacturing', desc: 'Industrial minerals from our mines are used across a wide range of manufacturing processes, from chemicals and paints to plastics and rubber.', products: ['Limestone powder', 'Fine aggregates'], applications: ['Paint fillers', 'Plastic fillers', 'Rubber production', 'Chemical processing'] },
  { icon: '🔩', title: 'Steel Industry', desc: 'Limestone is used as a flux in blast furnaces to remove silica and other impurities during the iron and steel smelting process.', products: ['Limestone lumps (steel grade)', 'Crushed limestone'], applications: ['Blast furnace flux', 'Slag formation control', 'Sinter plant feed', 'DRI plants'] },
  { icon: '🌾', title: 'Agriculture', desc: 'Agricultural limestone (aglime) is used to neutralize acidic soil, improving crop yield and soil health. We supply ground limestone for this application.', products: ['Agricultural limestone', 'Limestone powder'], applications: ['Soil pH correction', 'Paddy fields', 'Vegetable farming', 'Plantation crops'] },
  { icon: '🏘️', title: 'Real Estate', desc: 'Large real estate developers and township projects rely on consistent, bulk supply of construction sand. We partner with developers for project-specific supply contracts.', products: ['M-Sand', 'P-Sand'], applications: ['Township projects', 'Large housing schemes', 'Integrated complexes', 'Plotted developments'] },
  { icon: '⚡', title: 'Energy & Utilities', desc: 'Power plants, water treatment facilities, and industrial utilities use limestone for flue gas desulfurization and water treatment applications.', products: ['Limestone powder', 'Limestone lumps'], applications: ['Thermal power FGD', 'Water treatment', 'Industrial wastewater', 'Environmental compliance'] },
];

export default function Industries() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Building2 size={13} /> Industries We Serve</div>
          <h1>Powering Every Sector</h1>
          <p>Our minerals form the foundation of India's most essential industries.</p>
        </div>
      </section>

      <section className="industries-list-section">
        <div className="container">
          <div className="industries-list-grid">
            {industries.map((ind, i) => (
              <div key={i} className="industry-detail-card">
                <span className="industry-detail-icon">{ind.icon}</span>
                <div className="industry-detail-content">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <div className="industry-detail-tags">
                    {ind.products.map(p => <span key={p} className="industry-product-tag">{p}</span>)}
                  </div>
                  <div className="industry-detail-tags">
                    {ind.applications.map(a => <span key={a} className="industry-app-tag">{a}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2>Serving Your Industry</h2>
          <p>Can't find your industry above? We supply to a wide range of sectors. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="btn btn-primary">Enquire Now <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
