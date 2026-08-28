import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
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
  const [expandedMobile, setExpandedMobile] = useState({});
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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

  const toggleMobileSub = (label, e) => {
    e.stopPropagation();
    setExpandedMobile((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="navbar-wrapper">
      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container navbar-topbar-inner">
          <div className="navbar-topbar-item">
            <MapPin size={13} className="topbar-icon" />
            <span>Othakkal Mandapam, Coimbatore 641-032</span>
          </div>
          <div className="navbar-topbar-right">
            <a href="tel:+919791611143" className="topbar-link">
              <Phone size={13} />
              <span>97916 11143</span>
            </a>
            <a href="mailto:info@vasantharagammines.in" className="topbar-link">
              <Mail size={13} />
              <span>info@vasantharagammines.in</span>
            </a>
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
                <rect width="36" height="36" rx="10" fill="url(#nLogoGrad)" />
                <path d="M18 7L29 27H7L18 7Z" fill="rgba(255,255,255,0.92)" />
                <circle cx="18" cy="19.5" r="4.5" fill="url(#nLogoGrad2)" />
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
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children);
              const isOpen = activeDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className={`navbar-item ${hasChildren ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    <div className="navbar-dropdown-wrapper">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `navbar-link navbar-dropdown-trigger ${isActive || isOpen ? 'active' : ''}`
                        }
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
                      </NavLink>

                      <div className={`navbar-dropdown ${isOpen ? 'show' : ''}`}>
                        <div className="navbar-dropdown-inner">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className="navbar-dropdown-item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="navbar-dropdown-title">
                                {child.label}
                                <ArrowRight size={12} className="dropdown-arrow" />
                              </span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{item.label}</span>
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA & Hamburger */}
          <div className="navbar-right">
            <Link to="/contact" className="btn btn-primary navbar-cta">
              <span>Get a Quote</span>
            </Link>

            <button
              className="navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-inner">
              {navItems.map((item) => {
                const hasChildren = Boolean(item.children);
                const isExpanded = expandedMobile[item.label];

                return (
                  <div key={item.label} className="navbar-mobile-item">
                    <div className="navbar-mobile-header">
                      <NavLink
                        to={item.path}
                        className="navbar-mobile-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>

                      {hasChildren && (
                        <button
                          className={`navbar-mobile-toggle ${isExpanded ? 'expanded' : ''}`}
                          onClick={(e) => toggleMobileSub(item.label, e)}
                          aria-label={`Toggle ${item.label} sub-menu`}
                        >
                          <ChevronDown size={18} />
                        </button>
                      )}
                    </div>

                    {hasChildren && isExpanded && (
                      <div className="navbar-mobile-sub">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="navbar-mobile-sublink"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="sublink-title">{child.label}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="navbar-mobile-cta">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Get a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
