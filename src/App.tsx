import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Experts from '@/pages/Experts';
import Contact from '@/pages/Contact';
import Securite from '@/pages/services/Securite';
import Maintenance from '@/pages/services/Maintenance';
import Cloud from '@/pages/services/Cloud';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cyber-black text-white font-sans">

        <Header />

        {/* flex-grow pousse le footer vers le bas et prend tout l'espace disponible */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/cybersecurite" element={<Securite />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;