import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2, MessageSquare, Link2, Camera, ArrowRight } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Vision & Mission', path: '/about#vision' },
    { label: 'Leadership', path: '/about#leadership' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Certifications', path: '/certifications' },
  ],
  products: [
    { label: 'M-Sand (Manufactured Sand)', path: '/products/m-sand' },
    { label: 'P-Sand (Plastering Sand)', path: '/products/p-sand' },
    { label: 'Limestone', path: '/products/limestone' },
    { label: 'All Products', path: '/products' },
  ],
  operations: [
    { label: 'Mining & Extraction', path: '/operations' },
    { label: 'Quality & Technology', path: '/quality' },
    { label: 'Logistics & Supply', path: '/logistics' },
    { label: 'Global Presence', path: '/global-presence' },
  ],
  resources: [
    { label: 'Industries We Serve', path: '/industries' },
    { label: 'Projects', path: '/projects' },
    { label: 'News & Insights', path: '/news' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="url(#fLogoGrad)" />
                <path d="M18 6L30 28H6L18 6Z" fill="white" opacity="0.9" />
                <circle cx="18" cy="20" r="5" fill="url(#fLogoGrad2)" />
                <defs>
                  <linearGradient id="fLogoGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#C17D47" />
                    <stop offset="100%" stopColor="#6B3F1F" />
                  </linearGradient>
                  <linearGradient id="fLogoGrad2" x1="13" y1="15" x2="23" y2="25">
                    <stop offset="0%" stopColor="#F5F0E8" />
                    <stop offset="100%" stopColor="#D4B896" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div className="footer-logo-name">Vasantharagam</div>
                <div className="footer-logo-sub">Mines & Minerals</div>
              </div>
            </div>
            <p className="footer-desc">
              Your Trusted Source for Quality Minerals. Supplying premium M-Sand, P-Sand, and Limestone for construction, infrastructure, and industrial applications across India.
            </p>
            <div className="footer-contact-info">
              <a href="tel:+919791611143" className="footer-contact-item">
                <Phone size={15} />
                <span>97916 11143 / 98652 13633</span>
              </a>
              <a href="mailto:info@vasantharagammines.in" className="footer-contact-item">
                <Mail size={15} />
                <span>info@vasantharagammines.in</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>35/5/10 Pachiyana Dever Street, R C Nagar, Othakkal Mandapam, Coimbatore 641 032</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="footer-social-icon"><Share2 size={16} /></a>
              <a href="#" aria-label="Twitter" className="footer-social-icon"><MessageSquare size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="footer-social-icon"><Link2 size={16} /></a>
              <a href="#" aria-label="Instagram" className="footer-social-icon"><Camera size={16} /></a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-col-links">
              {footerLinks.company.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer-link">
                    <ArrowRight size={12} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-col-links">
              {footerLinks.products.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer-link">
                    <ArrowRight size={12} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-col-title" style={{ marginTop: '24px' }}>Operations</h4>
            <ul className="footer-col-links">
              {footerLinks.operations.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer-link">
                    <ArrowRight size={12} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-col-links">
              {footerLinks.resources.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer-link">
                    <ArrowRight size={12} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="footer-cta-box">
              <p>Need a bulk quote?</p>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Vasantharagam Mines & Minerals. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms & Conditions</Link>
            <span>·</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
