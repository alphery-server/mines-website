import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, CheckCircle, TrendingUp, Globe, Shield,
  Truck, Factory, Award, Users, Leaf, Clock, Star, Building2,
  Layers, FlaskConical, Package, Navigation, Phone
} from 'lucide-react';
import './Home.css';

/* ---------- Animated Counter ---------- */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ---------- Section Fade-in ---------- */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);

  return (
    <main className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/mining_hero.png" alt="Vasantharagam mining site" className="hero-img" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className={`container hero-content ${heroLoaded ? 'hero-loaded' : ''}`}>
          <div className="hero-badge">
            <Award size={13} /> Trusted Mineral Supplier · Est. in Tamil Nadu
          </div>
          <h1 className="hero-title">
            Your Trusted Source<br />
            <span className="hero-title-accent">for Quality Minerals</span>
          </h1>
          <p className="hero-subtitle">
            Vasantharagam Mines & Minerals delivers premium M-Sand, P-Sand, and Limestone
            for construction, infrastructure, and industrial applications across India.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary hero-btn">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary hero-btn">
              Get a Quote
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num"><Counter end={5} suffix="+" /></span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num"><Counter end={3} /></span>
              <span className="hero-stat-label">Product Lines</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num"><Counter end={200} suffix="+" /></span>
              <span className="hero-stat-label">Projects Served</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num"><Counter end={10} suffix="+" /></span>
              <span className="hero-stat-label">Districts Covered</span>
            </div>
          </div>
        </div>
        <a href="#highlights" className="hero-scroll-hint">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* ===== HIGHLIGHTS / NUMBERS ===== */}
      <section id="highlights" className="highlights">
        <div className="container">
          <div className="highlights-grid">
            {[
              { icon: <Clock size={28} />, value: 5, suffix: '+', label: 'Years of Experience', desc: 'In mineral extraction & supply' },
              { icon: <Factory size={28} />, value: 2, suffix: '', label: 'Production Sites', desc: 'Active mining quarry operations' },
              { icon: <Package size={28} />, value: 3, suffix: '', label: 'Core Products', desc: 'M-Sand, P-Sand & Limestone' },
              { icon: <Users size={28} />, value: 200, suffix: '+', label: 'Customers Served', desc: 'Builders, contractors & projects' },
              { icon: <Globe size={28} />, value: 10, suffix: '+', label: 'Districts Reached', desc: 'Across Tamil Nadu & beyond' },
              { icon: <TrendingUp size={28} />, value: 50000, suffix: '+', label: 'MT Annual Capacity', desc: 'Bulk production capability' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-value"><Counter end={item.value} suffix={item.suffix} /></div>
                <div className="highlight-label">{item.label}</div>
                <div className="highlight-desc">{item.desc}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="about-teaser">
        <div className="container about-teaser-grid">
          <FadeIn className="about-teaser-image-wrap">
            <img src="/mining_hero.png" alt="Our quarry operations" className="about-teaser-img" />
            <div className="about-teaser-badge">
              <Award size={18} />
              <div>
                <strong>Quality Assured</strong>
                <span>Every batch tested</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150} className="about-teaser-content">
            <div className="section-label"><Layers size={13} /> Who We Are</div>
            <h2>Building India's Infrastructure<br />From the Ground Up</h2>
            <div className="divider divider-left" />
            <p>
              Vasantharagam Mines & Minerals is a trusted name in the mineral supply industry,
              headquartered in Coimbatore, Tamil Nadu. With 5+ years of experience in responsible
              mineral extraction and processing, we supply high-quality M-Sand, P-Sand, and Limestone
              to builders, contractors, and industrial projects across India.
            </p>
            <p style={{ marginTop: '12px' }}>
              Our operations combine modern crushing and screening technology with rigorous quality
              control, ensuring every tonne meets the highest construction standards.
            </p>
            <div className="about-teaser-points">
              {['Responsible & sustainable mining', 'Consistent quality assurance', 'Reliable bulk supply', 'Timely delivery across Tamil Nadu'].map((pt) => (
                <div key={pt} className="about-teaser-point">
                  <CheckCircle size={16} className="about-check" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-dark" style={{ marginTop: '28px' }}>
              Know More About Us <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="products-section">
        <div className="container">
          <FadeIn className="section-header">
            <div className="section-label"><Package size={13} /> Our Products</div>
            <h2>Premium Mineral Products</h2>
            <div className="divider" />
            <p>We supply three core mineral products — each processed, tested, and delivered to meet your exact construction and industrial requirements.</p>
          </FadeIn>
          <div className="products-grid">
            {[
              {
                img: '/msand_product.png',
                name: 'M-Sand',
                full: 'Manufactured Sand',
                desc: 'Crushed from granite rocks using advanced VSI technology. A superior alternative to river sand for concrete works.',
                applications: ['Concrete Work', 'RCC Structures', 'Foundations', 'Plastering'],
                path: '/products/m-sand',
                tag: 'Most Popular',
              },
              {
                img: '/psand_product.png',
                name: 'P-Sand',
                full: 'Plastering Sand',
                desc: 'Fine-grained sand manufactured specifically for plastering applications, providing a smooth and durable finish.',
                applications: ['Wall Plastering', 'Ceiling Work', 'Interior Finishing', 'Block Masonry'],
                path: '/products/p-sand',
                tag: 'Best for Finishing',
              },
              {
                img: '/limestone_product.png',
                name: 'Limestone',
                full: 'Limestone Minerals',
                desc: 'High-quality limestone extracted from our mines. Used in cement production, industrial processing, and agriculture.',
                applications: ['Cement Industry', 'Steel Plants', 'Industrial Use', 'Agriculture'],
                path: '/products/limestone',
                tag: 'Industrial Grade',
              },
            ].map((product, i) => (
              <FadeIn key={i} delay={i * 120} className="product-card">
                <div className="product-card-img-wrap">
                  <img src={product.img} alt={product.name} className="product-card-img" />
                  <span className="product-card-tag">{product.tag}</span>
                </div>
                <div className="product-card-body">
                  <div>
                    <div className="product-card-label">{product.full}</div>
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-desc">{product.desc}</p>
                    <div className="product-card-apps">
                      {product.applications.map(app => (
                        <span key={app} className="product-app-tag">{app}</span>
                      ))}
                    </div>
                  </div>
                  <Link to={product.path} className="btn btn-outline product-card-btn">
                    View Product <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-dark">View All Products <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="capabilities-section">
        <div className="container">
          <FadeIn className="section-header">
            <div className="section-label"><Factory size={13} /> Our Capabilities</div>
            <h2>End-to-End Mineral Operations</h2>
            <div className="divider" />
            <p>From exploration to delivery, we control every step of the supply chain to guarantee quality and reliability.</p>
          </FadeIn>
          <div className="capabilities-grid">
            {[
              { icon: <Navigation size={24} />, title: 'Mining & Extraction', desc: 'Responsible extraction using modern equipment from our licensed quarry sites.' },
              { icon: <Factory size={24} />, title: 'Mineral Processing', desc: 'Advanced VSI crushing and screening to produce consistent grade products.' },
              { icon: <Layers size={24} />, title: 'Crushing & Screening', desc: 'Multi-stage crushing and screening to achieve precise particle size distributions.' },
              { icon: <FlaskConical size={24} />, title: 'Quality Testing', desc: 'In-house laboratory testing for every batch — grading, silt, FM, and more.' },
              { icon: <Package size={24} />, title: 'Storage & Handling', desc: 'Covered storage facilities to maintain product quality and prevent contamination.' },
              { icon: <Truck size={24} />, title: 'Transportation', desc: 'Own fleet of trucks for reliable, on-time delivery to your project site.' },
              { icon: <Globe size={24} />, title: 'Pan-India Supply', desc: 'Serving customers across Tamil Nadu and neighboring states with bulk supply.' },
            ].map((cap, i) => (
              <FadeIn key={i} delay={i * 70} className="capability-card">
                <div className="capability-icon">{cap.icon}</div>
                <h4 className="capability-title">{cap.title}</h4>
                <p className="capability-desc">{cap.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <FadeIn className="why-content">
              <div className="section-label"><Star size={13} /> Why Choose Us</div>
              <h2>The Vasantharagam Advantage</h2>
              <div className="divider divider-left" />
              <p>We don't just supply minerals — we deliver confidence. Our commitment to quality, consistency, and customer satisfaction makes us the preferred choice for construction and industrial buyers.</p>
              <div className="why-points">
                {[
                  { icon: <Shield size={20} />, title: 'Consistent Quality', desc: 'Every batch tested to IS standards before dispatch.' },
                  { icon: <TrendingUp size={20} />, title: 'Large Production Capacity', desc: '50,000+ MT annual capacity with scalable output.' },
                  { icon: <Truck size={20} />, title: 'On-Time Delivery', desc: 'Dedicated logistics for reliable, punctual delivery.' },
                  { icon: <CheckCircle size={20} />, title: 'Competitive Pricing', desc: 'Direct-from-source pricing — no middlemen.' },
                  { icon: <Award size={20} />, title: 'Expert Team', desc: '5+ years of minerals expertise guiding every order.' },
                  { icon: <Leaf size={20} />, title: 'Responsible Sourcing', desc: 'Licensed, compliant, and eco-conscious operations.' },
                ].map((pt, i) => (
                  <div key={i} className="why-point">
                    <div className="why-point-icon">{pt.icon}</div>
                    <div>
                      <strong>{pt.title}</strong>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200} className="why-visual">
              <img src="/mining_hero.png" alt="Mining operations" className="why-img" />
              <div className="why-exp-badge">
                <span className="why-exp-num">5+</span>
                <span className="why-exp-label">Years of<br />Excellence</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="industries-section">
        <div className="container">
          <FadeIn className="section-header">
            <div className="section-label"><Building2 size={13} /> Industries We Serve</div>
            <h2>Powering Every Sector</h2>
            <div className="divider" />
            <p>Our minerals are the foundation for some of India's most demanding industries.</p>
          </FadeIn>
          <div className="industries-grid">
            {[
              { icon: '🏗️', name: 'Construction', desc: 'Residential and commercial buildings' },
              { icon: '🛣️', name: 'Infrastructure', desc: 'Roads, bridges and highways' },
              { icon: '🏭', name: 'Cement', desc: 'Raw materials for cement production' },
              { icon: '⚙️', name: 'Manufacturing', desc: 'Industrial mineral applications' },
              { icon: '🔩', name: 'Steel', desc: 'Limestone for steel manufacturing' },
              { icon: '⚡', name: 'Energy', desc: 'Industrial and utility projects' },
              { icon: '🌾', name: 'Agriculture', desc: 'Soil amendment applications' },
              { icon: '🏘️', name: 'Real Estate', desc: 'Large-scale housing projects' },
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 60} className="industry-card">
                <span className="industry-icon">{ind.icon}</span>
                <h4 className="industry-name">{ind.name}</h4>
                <p className="industry-desc">{ind.desc}</p>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/industries" className="btn btn-outline">Learn More <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY TEASER ===== */}
      <section className="sustainability-teaser">
        <div className="container sustainability-grid">
          <FadeIn className="sust-content">
            <div className="section-label light"><Leaf size={13} /> Sustainability</div>
            <h2>Mining Responsibly,<br />Building Sustainably</h2>
            <div className="divider divider-left" />
            <p>
              At Vasantharagam Mines & Minerals, we believe sustainable mining is not just an obligation
              — it's our responsibility to the land, the communities, and future generations.
            </p>
            <div className="sust-pillars">
              {['Responsible extraction practices', 'Environmental land restoration', 'Worker safety & welfare', 'Community development', 'Dust & waste management'].map((p) => (
                <div key={p} className="sust-pillar">
                  <Leaf size={14} /> {p}
                </div>
              ))}
            </div>
            <Link to="/sustainability" className="btn btn-secondary" style={{ marginTop: '28px' }}>
              Our Sustainability Story <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={200} className="sust-visual">
            <div className="sust-cards-grid">
              {[
                { icon: <Leaf size={32} />, label: 'Eco-Friendly', sub: 'Land restoration' },
                { icon: <Shield size={32} />, label: 'Worker Safety', sub: 'Zero harm policy' },
                { icon: <Users size={32} />, label: 'Community', sub: 'Local employment' },
                { icon: <Globe size={32} />, label: 'Compliance', sub: 'Licensed & certified' },
              ].map((s, i) => (
                <div key={i} className="sust-card">
                  <div className="sust-card-icon">{s.icon}</div>
                  <strong>{s.label}</strong>
                  <span>{s.sub}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="home-cta">
        <div className="container home-cta-inner">
          <FadeIn>
            <div className="home-cta-label"><Star size={14} /> Ready to Partner?</div>
            <h2 className="home-cta-title">Looking for a Reliable<br />Mineral Supply Partner?</h2>
            <p className="home-cta-desc">
              Contact us today for bulk pricing, product specifications, and delivery schedules.
              We're ready to supply your next project.
            </p>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn-primary cta-btn">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary cta-btn">
                <Phone size={16} /> Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
