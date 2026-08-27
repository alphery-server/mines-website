import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Operations from './pages/Operations';
import Quality from './pages/Quality';
import GlobalPresence from './pages/GlobalPresence';
import Logistics from './pages/Logistics';
import Sustainability from './pages/Sustainability';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '5rem', color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>404</h1>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/global-presence" element={<GlobalPresence />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
