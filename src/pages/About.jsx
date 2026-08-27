import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Target, Heart, TrendingUp, Shield } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Award size={13} /> About Us</div>
          <h1>Our Story, Our Mission</h1>
          <p>A growing force in India's mineral supply industry — built on quality, trust, and responsible mining.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="about-overview">
        <div className="container about-overview-grid">
          <div className="about-ov-content">
            <div className="section-label"><Award size={13} /> Company Overview</div>
            <h2>Vasantharagam Mines & Minerals</h2>
            <div className="divider divider-left" />
            <p>Vasantharagam Mines & Minerals was established with a singular vision: to become the most trusted source of high-quality construction minerals in India. Headquartered in Coimbatore, Tamil Nadu, we have grown steadily over the last 5+ years into a reliable mineral supplier serving contractors, builders, and industrial clients.</p>
            <p style={{ marginTop: '16px' }}>Our operations span mineral extraction, crushing, screening, quality testing, and delivery — all managed in-house to ensure consistency and reliability. We currently supply three core products: M-Sand, P-Sand, and Limestone, sourced from our licensed quarry sites in Tamil Nadu.</p>
            <div className="about-ov-highlights">
              {[
                { label: 'Established', value: '2019' },
                { label: 'Headquarters', value: 'Coimbatore, TN' },
                { label: 'Core Products', value: '3 Product Lines' },
                { label: 'Markets', value: 'Pan-India' },
              ].map(h => (
                <div key={h.label} className="about-ov-highlight">
                  <strong>{h.value}</strong>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-ov-img-wrap">
            <img src="/mining_hero.png" alt="Our operations" className="about-ov-img" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}><TrendingUp size={13} /> Our Journey</div>
            <h2>Growing Together, Step by Step</h2>
            <div className="divider" />
          </div>
          <div className="timeline">
            {[
              { year: '2019', title: 'Company Founded', desc: 'Vasantharagam Mines & Minerals was established in Coimbatore, Tamil Nadu, with the aim of supplying quality minerals to the local construction industry.' },
              { year: '2020', title: 'First Quarry Operations', desc: 'Launched our first active quarry operations for M-Sand production, meeting growing demand from local builders and contractors.' },
              { year: '2021', title: 'P-Sand Product Launch', desc: 'Expanded our product portfolio by adding P-Sand (Plastering Sand) — designed for fine finishing in residential and commercial projects.' },
              { year: '2022', title: 'Limestone Mining', desc: 'Entered the limestone minerals segment, supplying to cement manufacturers, industrial processors, and agricultural users.' },
              { year: '2023', title: 'Capacity Expansion', desc: 'Upgraded crushing and screening equipment, significantly increasing production capacity to 50,000+ MT per year.' },
              { year: '2024+', title: 'Pan-India Growth', desc: 'Expanding supply reach across Tamil Nadu and neighboring states, with focus on bulk supply partnerships and long-term B2B contracts.' },
            ].map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="vision-mission">
        <div className="container vm-grid">
          <div className="vm-card vision-card">
            <div className="vm-icon"><Target size={32} /></div>
            <h3>Our Vision</h3>
            <p>To become a trusted and leading supplier of quality minerals and construction materials across India, creating sustainable value for our customers, employees, communities, and the environment.</p>
          </div>
          <div className="vm-card mission-card">
            <div className="vm-icon"><TrendingUp size={32} /></div>
            <h3>Our Mission</h3>
            <ul className="vm-list">
              {[
                'Deliver consistent, high-quality minerals on every order',
                'Adopt advanced processing technology for better products',
                'Ensure reliable, on-time supply to support our clients\' projects',
                'Build long-term partnerships based on trust and transparency',
                'Operate responsibly with minimal environmental impact',
                'Invest in our people and the communities where we operate',
              ].map((m, i) => (
                <li key={i}><CheckCircle size={14} /> {m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}><Heart size={13} /> Core Values</div>
            <h2>What We Stand For</h2>
            <div className="divider" />
          </div>
          <div className="values-grid">
            {[
              { icon: '⚖️', title: 'Integrity', desc: 'We operate with complete honesty and transparency in everything we do.' },
              { icon: '🏆', title: 'Quality', desc: 'Uncompromising standards in every tonne of mineral we produce and deliver.' },
              { icon: '🤝', title: 'Reliability', desc: 'Our customers can depend on us for consistent supply, time after time.' },
              { icon: '🦺', title: 'Safety', desc: 'The safety of our workers and communities is non-negotiable.' },
              { icon: '🌱', title: 'Sustainability', desc: 'Responsible mining that protects the environment for future generations.' },
              { icon: '👥', title: 'Customer Focus', desc: 'We listen, understand, and deliver exactly what our customers need.' },
              { icon: '📈', title: 'Continuous Improvement', desc: 'Always seeking better ways to improve our processes, products, and service.' },
            ].map((val, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{val.icon}</span>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="leadership-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}><Users size={13} /> Leadership</div>
            <h2>The People Behind Our Success</h2>
            <div className="divider" />
            <p>Our leadership team brings together deep domain expertise in mineral extraction, processing, and supply chain management.</p>
          </div>
          <div className="leadership-grid">
            {[
              { name: 'Mr. Vasantha Kumar', role: 'Founder & Chairman', bio: 'A visionary entrepreneur with deep roots in the minerals industry, Mr. Vasantha Kumar founded the company with a mission to bring quality and transparency to the mineral supply chain. He oversees strategic direction and long-term growth.' },
              { name: 'Operations Head', role: 'Head of Mining & Operations', bio: 'Overseeing all quarry and mining operations, this leader ensures that production quality and environmental compliance are maintained at the highest level across all sites.' },
              { name: 'Commercial Head', role: 'Sales & Customer Relations', bio: 'Driving growth through strong client relationships, competitive pricing, and reliable supply commitments. Manages all B2B partnerships and large-scale project supplies.' },
            ].map((leader, i) => (
              <div key={i} className="leader-card">
                <div className="leader-avatar">
                  <span>{leader.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                </div>
                <div className="leader-info">
                  <h4>{leader.name}</h4>
                  <div className="leader-role">{leader.role}</div>
                  <p>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Work With Us?</h2>
          <p>Let's build something great together. Contact our team for product inquiries, bulk orders, and partnerships.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
            <Link to="/products" className="btn btn-secondary">View Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
