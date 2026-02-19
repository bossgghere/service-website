import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './components/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-[#2176ff] selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/software-development" element={<ServiceDetailPage />} />
            <Route path="/networking-services" element={<ServiceDetailPage />} />
            <Route path="/cloud-architecture" element={<ServiceDetailPage />} />
            <Route path="/data-analytics" element={<ServiceDetailPage />} />
            <Route path="/business-intelligence" element={<ServiceDetailPage />} />
            <Route path="/cyber-security" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
