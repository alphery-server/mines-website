import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './SharedPages.css';

const faqs = [
  { q: 'What products do you supply?', a: 'We supply three core mineral products: M-Sand (Manufactured Sand), P-Sand (Plastering Sand), and Limestone. M-Sand is used for concrete and structural works, P-Sand for plastering and finishing, and Limestone for cement, industrial, and agricultural applications.' },
  { q: 'Where do you operate from?', a: 'Our head office and processing plant is located in Coimbatore, Tamil Nadu (35/5/10 Pachiyana Dever Street, R C Nagar, Othakkal Mandapam, Coimbatore 641 032). We operate licensed quarry sites in Tamil Nadu.' },
  { q: 'What quantities can you supply?', a: 'We can supply from a minimum of 10 MT (single tipper load) up to large bulk orders of 1,000+ MT per month. Our annual production capacity exceeds 50,000 MT. Contact us for long-term supply contracts.' },
  { q: 'Do you provide bulk orders?', a: 'Yes. We specialize in bulk supply for large construction projects, industrial plants, and regular contractors. We can schedule daily or weekly deliveries based on your project requirements. Please contact us to discuss your bulk supply needs.' },
  { q: 'Do you export internationally?', a: 'Currently we focus on the domestic Indian market, primarily Tamil Nadu and neighboring states. For international inquiries, please contact us directly and we will assess the feasibility.' },
  { q: 'What quality standards do your products meet?', a: 'Our M-Sand and P-Sand conform to IS 383:2016 (Indian Standard for Sand). All products are tested in our in-house laboratory and by NABL-accredited external labs. We provide test reports with every supply on request.' },
  { q: 'How can I request a quotation?', a: 'You can request a quotation by: (1) Calling us at 97916 11143 or 98652 13633, (2) Emailing us at info@vasantharagammines.in, or (3) Filling out the Contact/Quote form on this website. We respond within a few hours during business hours.' },
  { q: 'What are your delivery locations?', a: 'We deliver across Tamil Nadu including Coimbatore, Salem, Erode, Namakkal, Tiruppur, Karur, Dindigul, Madurai, Trichy, and Chennai. We also supply to Pondicherry, parts of Kerala, Karnataka, and Andhra Pradesh.' },
  { q: 'What is the minimum order quantity?', a: 'The minimum order quantity is 10 MT (one tipper load). For smaller quantities, please contact us and we will try to accommodate your requirements.' },
  { q: 'How do I know the quality of the material delivered?', a: 'We provide a quality test report with every consignment. Our lab tests include sieve analysis, silt content, fineness modulus, specific gravity, and water absorption. You are also welcome to collect a sample for independent testing before or after delivery.' },
  { q: 'What documents do you provide with each delivery?', a: 'We provide: Delivery Challan, GST Tax Invoice, Quality Test Report (on request), and Weighbridge Slip. All documentation is provided at the time of delivery.' },
  { q: 'Do you have GST registration?', a: 'Yes. Vasantharagam Mines & Minerals is a registered GST supplier. We issue valid GST invoices for all transactions.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-question ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className="faq-question-text">{q}</span>
        {open
          ? <ChevronUp size={18} className="faq-chevron open" />
          : <ChevronDown size={18} className="faq-chevron" />
        }
      </button>
      {open && (
        <div className="faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><HelpCircle size={13} /> FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our products, supply, and operations.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-wrap">
            <div className="section-header">
              <h2>Common Questions</h2>
              <div className="divider" />
            </div>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            <div className="faq-contact-box">
              <h3>Still have questions?</h3>
              <p>Our team is happy to answer any specific questions about our products, supply, or pricing.</p>
              <div className="faq-contact-actions">
                <a href="tel:+919791611143" className="btn btn-primary">📞 Call Us</a>
                <a href="mailto:info@vasantharagammines.in" className="btn btn-secondary">✉️ Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
