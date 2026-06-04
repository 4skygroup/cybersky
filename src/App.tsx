import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

// 1. Import Dynamique des pages
const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const Experts = lazy(() => import('@/pages/Experts'));
const Contact = lazy(() => import('@/pages/Contact'));
const Securite = lazy(() => import('@/pages/services/Securite'));
const Maintenance = lazy(() => import('@/pages/services/Maintenance'));
const Cloud = lazy(() => import('@/pages/services/Cloud'));
const Equipement = lazy(() => import('@/pages/services/Equipement'));
const Software = lazy(() => import('@/pages/services/Software'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-cyber-black text-white font-sans">
          <Header />
          <main className="grow">
            <ScrollToTop />
            {/* 2. Suspense affiche un loader le temps que la page se télécharge */}
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Chargement...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/cloud" element={<Cloud />} />
                <Route path="/services/cybersecurite" element={<Securite />} />
                <Route path="/services/equipement" element={<Equipement />} />
                <Route path="/services/maintenance" element={<Maintenance />} />
                <Route path="/services/software" element={<Software />} />
                <Route path="/experts" element={<Experts />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;