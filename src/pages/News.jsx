import { Newspaper } from 'lucide-react';
import './SharedPages.css';

const categoryColors = {
  'Company News': '#C17D47',
  'Product Update': '#5A6E4A',
  'Sustainability': '#4A8F5A',
  'Industry Insight': '#8B5E3C',
};

const news = [
  { date: 'August 2024', category: 'Company News', title: 'Vasantharagam Expands Production Capacity to 50,000 MT/Year', excerpt: 'We have completed a major upgrade to our crushing and screening plant, significantly increasing our annual production capacity to over 50,000 MT. This expansion enables us to serve larger projects and long-term supply contracts.', img: '/mining_hero.png' },
  { date: 'June 2024', category: 'Product Update', title: 'New Limestone Grade Launched for Cement Industry', excerpt: 'We have launched a new high-purity limestone grade (95%+ CaCO₃) specifically developed for cement clinker production. The new grade is available for both spot and contract supply.', img: '/limestone_product.png' },
  { date: 'March 2024', category: 'Sustainability', title: 'Vasantharagam Completes Quarry Rehabilitation Project', excerpt: 'We have successfully completed land rehabilitation at our first mining site, with vegetation restoration and soil stabilization works. This marks a key milestone in our sustainability commitment.', img: '/mining_hero.png' },
  { date: 'January 2024', category: 'Industry Insight', title: 'Why M-Sand is Replacing River Sand in Tamil Nadu', excerpt: "With Tamil Nadu's ban on river sand mining in many districts, M-Sand has emerged as the reliable, IS-compliant alternative. We explore the key differences and why M-Sand is the future of construction.", img: '/msand_product.png' },
  { date: 'October 2023', category: 'Company News', title: 'Successfully Completed Supply for 2,500 MT Township Project', excerpt: 'Vasantharagam Mines & Minerals successfully completed a 2,500 MT supply of M-Sand and P-Sand for a major residential township project in Coimbatore, one of our largest contracts to date.', img: '/psand_product.png' },
  { date: 'July 2023', category: 'Industry Insight', title: 'Understanding P-Sand vs River Sand for Plastering', excerpt: "Plastering Sand (P-Sand) is increasingly preferred by professional builders for its consistent gradation, low silt content, and reliable quality. Here's what you need to know before your next project.", img: '/psand_product.png' },
];

export default function News() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}><Newspaper size={13} /> News & Insights</div>
          <h1>Latest News & Updates</h1>
          <p>Stay updated with company announcements, product updates, and mineral industry insights.</p>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          {/* Featured */}
          <div className="news-featured-grid">
            <div className="news-featured-card">
              <img src={news[0].img} alt={news[0].title} className="news-featured-img" />
              <div className="news-card-body">
                <div className="news-card-meta">
                  <span className="news-category-badge" style={{ background: categoryColors[news[0].category] }}>{news[0].category}</span>
                  <span className="news-date">{news[0].date}</span>
                </div>
                <h3 className="news-card-title">{news[0].title}</h3>
                <p className="news-card-excerpt">{news[0].excerpt}</p>
              </div>
            </div>
            <div className="news-side-cards">
              {news.slice(1, 3).map((n, i) => (
                <div key={i} className="news-side-card">
                  <img src={n.img} alt={n.title} className="news-side-img" />
                  <div className="news-side-body">
                    <div className="news-card-meta">
                      <span className="news-category-badge" style={{ background: categoryColors[n.category] }}>{n.category}</span>
                      <span className="news-date">{n.date}</span>
                    </div>
                    <h4 className="news-side-title">{n.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More articles */}
          <div className="news-more-grid">
            {news.slice(3).map((n, i) => (
              <div key={i} className="news-more-card">
                <img src={n.img} alt={n.title} className="news-more-img" />
                <div className="news-more-body">
                  <div className="news-card-meta">
                    <span className="news-category-badge" style={{ background: categoryColors[n.category] }}>{n.category}</span>
                    <span className="news-date">{n.date}</span>
                  </div>
                  <h4 className="news-card-title" style={{ fontSize: '0.95rem' }}>{n.title}</h4>
                  <p className="news-card-excerpt" style={{ fontSize: '0.82rem', marginTop: '8px' }}>{n.excerpt.slice(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
