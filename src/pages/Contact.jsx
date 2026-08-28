import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: 'India',
    product: '', quantity: '', delivery: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><MessageCircle size={13} /> Contact Us</div>
          <h1>Get in Touch</h1>
          <p>Ready to order? Have a question? Our team is here to help you every step of the way.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {[
              {
                icon: <Phone size={24} />,
                title: 'Call Us',
                lines: ['97916 11143', '98652 13633'],
                action: 'tel:+919791611143',
                actionLabel: 'Call Now',
                color: '#C17D47',
              },
              {
                icon: <Mail size={24} />,
                title: 'Email Us',
                lines: ['info@vasantharagammines.in', 'Available Mon–Sat'],
                action: 'mailto:info@vasantharagammines.in',
                actionLabel: 'Send Email',
                color: '#5A6E4A',
              },
              {
                icon: <MessageCircle size={24} />,
                title: 'WhatsApp',
                lines: ['97916 11143', 'Quick response guaranteed'],
                action: 'https://wa.me/919791611143',
                actionLabel: 'Open WhatsApp',
                color: '#25D366',
              },
              {
                icon: <MapPin size={24} />,
                title: 'Visit Us',
                lines: ['35/5/10 Pachiyana Dever St.', 'R C Nagar, Coimbatore 641 032'],
                action: 'https://maps.google.com?q=Coimbatore+641032',
                actionLabel: 'Get Directions',
                color: '#B5533C',
              },
              {
                icon: <Clock size={24} />,
                title: 'Working Hours',
                lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
                color: '#8B5E3C',
              },
            ].map((item, i) => (
              <div key={i} className="contact-card">
                <div className="contact-card-icon" style={{ background: item.color }}>
                  {item.icon}
                </div>
                <div className="contact-card-content">
                  <h4 className="contact-card-title">{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j} className="contact-card-line">{line}</p>
                  ))}
                  {item.action && (
                    <a href={item.action} target={item.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-card-action">
                      {item.actionLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="contact-forms-section">
        <div className="container contact-forms-grid">
          {/* B2B Quote Form */}
          <div className="contact-quote-form">
            <div className="form-card-header">
              <h2>Request a Quote</h2>
              <p>For bulk orders and B2B supply partnerships. We respond within 24 hours.</p>
            </div>
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} />
                <h3>Quote Request Sent!</h3>
                <p>Thank you for your interest. Our team will contact you within 24 hours with a detailed quotation.</p>
                <div className="contact-success-details">
                  <p>Alternatively, call us directly:</p>
                  <a href="tel:+919791611143" className="btn btn-primary" style={{ marginTop: '12px' }}>📞 97916 11143</a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Project</label>
                    <input id="company" name="company" type="text" placeholder="Company or Project Name" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required placeholder="you@company.com" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="product">Product Required *</label>
                    <select id="product" name="product" required value={formData.product} onChange={handleChange}>
                      <option value="">Select a Product</option>
                      <option value="M-Sand">M-Sand (Manufactured Sand)</option>
                      <option value="P-Sand">P-Sand (Plastering Sand)</option>
                      <option value="Limestone">Limestone</option>
                      <option value="Multiple">Multiple Products</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Required Quantity *</label>
                    <input id="quantity" name="quantity" type="text" required placeholder="e.g. 500 MT / 100 loads" value={formData.quantity} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="delivery">Delivery Location *</label>
                    <input id="delivery" name="delivery" type="text" required placeholder="City, District, State" value={formData.delivery} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input id="country" name="country" type="text" value={formData.country} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Any specific grade requirements, timeline, or special instructions..." value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary contact-submit-btn">
                  Submit Quote Request <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right side */}
          <div className="contact-right">
            {/* Map */}
            <div className="contact-map-box">
              <h3>Find Us</h3>
              <div className="contact-map-placeholder">
                <MapPin size={48} />
                <p><strong>Vasantharagam Mines & Minerals</strong></p>
                <p>35/5/10 Pachiyana Dever Street</p>
                <p>R C Nagar, Othakkal Mandapam</p>
                <p>Coimbatore 641 032, Tamil Nadu</p>
                <a href="https://maps.google.com?q=Othakkal+Mandapam+Coimbatore+641032" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '16px' }}>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick contact */}
            <div className="contact-quick-box">
              <h4>Quick Contact</h4>
              <div className="contact-quick-links">
                <a href="tel:+919791611143" className="contact-quick-link">
                  <Phone size={16} />
                  <div><strong>97916 11143</strong><span>Primary</span></div>
                </a>
                <a href="tel:+919865213633" className="contact-quick-link">
                  <Phone size={16} />
                  <div><strong>98652 13633</strong><span>Secondary</span></div>
                </a>
                <a href="mailto:info@vasantharagammines.in" className="contact-quick-link">
                  <Mail size={16} />
                  <div><strong>info@vasantharagammines.in</strong><span>Email</span></div>
                </a>
                <a href="https://wa.me/919791611143" target="_blank" rel="noopener noreferrer" className="contact-quick-link whatsapp">
                  <MessageCircle size={16} />
                  <div><strong>WhatsApp Chat</strong><span>Quick response</span></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
