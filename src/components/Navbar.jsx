import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Vision & Mission', path: '/about#vision' },
      { label: 'Leadership', path: '/about#leadership' },
    ],
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'All Products', path: '/products' },
      { label: 'M-Sand', path: '/products/m-sand' },
      { label: 'P-Sand', path: '/products/p-sand' },
      { label: 'Limestone', path: '/products/limestone' },
    ],
  },
  {
    label: 'Operations',
    path: '/operations',
    children: [
      { label: 'Mining & Operations', path: '/operations' },
      { label: 'Quality & Technology', path: '/quality' },
      { label: 'Logistics & Supply', path: '/logistics' },
    ],
  },
  {
    label: 'Company',
    path: '/sustainability',
    children: [
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Global Presence', path: '/global-presence' },
      { label: 'Industries', path: '/industries' },
      { label: 'Projects', path: '/projects' },
      { label: 'Certifications', path: '/certifications' },
    ],
  },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container navbar-topbar-inner">
          <span>📍 Othakkal Mandapam, Coimbatore 641 032</span>
          <div className="navbar-topbar-right">
            <a href="tel:+919791611143"><Phone size={13} /> 97916 11143</a>
            <a href="mailto:info@vasantharagammines.in">info@vasantharagammines.in</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} ref={dropdownRef}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="url(#nLogoGrad)" />
                <path d="M18 6L30 28H6L18 6Z" fill="rgba(255,255,255,0.9)" />
                <circle cx="18" cy="20" r="5" fill="url(#nLogoGrad2)" />
                <defs>
                  <linearGradient id="nLogoGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#F5A623" />
                    <stop offset="100%" stopColor="#FF6B35" />
                  </linearGradient>
                  <linearGradient id="nLogoGrad2" x1="13" y1="15" x2="23" y2="25">
                    <stop offset="0%" stopColor="#1A0A00" />
                    <stop offset="100%" stopColor="#3D1F00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">Vasantharagam</span>
              <span className="navbar-logo-sub">Mines & Minerals</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.label} className="navbar-item">
                {item.children ? (
                  <>
                    <button
                      className={`navbar-link navbar-dropdown-trigger ${activeDropdown === item.label ? 'active' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`chevron ${activeDropdown === item.label ? 'open' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="navbar-dropdown" onMouseLeave={() => setActiveDropdown(null)}>
                        {item.children.map((child) => (
                          <NavLink key={child.path} to={child.path} className="navbar-dropdown-item">
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink to={item.path} className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact" className="btn btn-primary navbar-cta">
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button className="navbar-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="navbar-mobile">
            {navItems.map((item) => (
              <div key={item.label} className="navbar-mobile-item">
                <NavLink to={item.path} className="navbar-mobile-link">
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="navbar-mobile-sub">
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path} className="navbar-mobile-sublink">
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
