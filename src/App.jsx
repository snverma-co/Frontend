import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import ServicesPage from './components/ServicesPage';
import ServicesPage2 from './components/ServicesPage2';
import ServicesPage3 from './components/ServicesPage3';
import ServicesPage4 from './components/ServicesPage4';
import ServicesPage5 from './components/ServicesPage5';
import ServicesPage6 from './components/ServicesPage6';
import ServicesPage7 from './components/ServicesPage7';
import ServicesPage8 from './components/ServicesPage8';
import GSTCalculator from './components/GSTCalculator';
import IncomeTaxCalculator from './components/IncomeTaxCalculator';
import TDSCalculator from './components/TDSCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import JourneySection from './components/JourneySection';
import TeamSection from './components/TeamSection';
import ContactIcons from './components/ContactIcons';
import ScrollToTop from './components/ScrollToTop';
import ContactSection from './components/ContactSection';
import ContactUsPage from './components/ContactUsPage';
import FounderPage from './components/FounderPage';
import CareersPage from './components/CareersPage';
import Footer from './components/Footer';

const HomePage = () => (
  <Box>
    <Hero />
    <AboutSection />
    <StatsSection />
    <JourneySection />
    <TeamSection />
    <ServicesSection />
    <TestimonialsSection />
    <NewsletterSection />
    <ContactSection />
  </Box>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services2" element={<ServicesPage2 />} />
            <Route path="/services3" element={<ServicesPage3 />} />
            <Route path="/services4" element={<ServicesPage4 />} />
            <Route path="/services5" element={<ServicesPage5 />} />
            <Route path="/services6" element={<ServicesPage6 />} />
            <Route path="/services7" element={<ServicesPage7 />} />
            <Route path="/services8" element={<ServicesPage8 />} />
            <Route path="/gst-calculator" element={<GSTCalculator />} />
            <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
            <Route path="/tds-calculator" element={<TDSCalculator />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/company" element={<FounderPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <ContactIcons />
          <Footer />
          <ScrollToTop />
        </Box>
      </Router>
    </LanguageProvider>
  );
}

export default App;
