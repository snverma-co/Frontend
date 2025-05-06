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

import { PageTitle } from './components/PageTitle';

const HomePage = () => (
  <Box>
    <PageTitle title="Home" />
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

const ServicePageWrapper = ({ component: Component, title }) => (
  <Box>
    <PageTitle title={title} />
    <Component />
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
            <Route path="/services" element={<ServicePageWrapper component={ServicesPage} title="Audit & Assurance Services" />} />
            <Route path="/services2" element={<ServicePageWrapper component={ServicesPage2} title="Taxation Services" />} />
            <Route path="/services3" element={<ServicePageWrapper component={ServicesPage3} title="Regulatory Advisory Services" />} />
            <Route path="/services4" element={<ServicePageWrapper component={ServicesPage4} title="NGO & Trust Services" />} />
            <Route path="/services5" element={<ServicePageWrapper component={ServicesPage5} title="Accounting Advisory Services" />} />
            <Route path="/services6" element={<ServicePageWrapper component={ServicesPage6} title="Business Setup in India" />} />
            <Route path="/services7" element={<ServicePageWrapper component={ServicesPage7} title="Transaction Advisory Services" />} />
            <Route path="/services8" element={<ServicePageWrapper component={ServicesPage8} title="Business Consultancy Services" />} />
            <Route path="/gst-calculator" element={<Box><PageTitle title="GST Calculator" /><GSTCalculator /></Box>} />
            <Route path="/income-tax-calculator" element={<Box><PageTitle title="Income Tax Calculator" /><IncomeTaxCalculator /></Box>} />
            <Route path="/tds-calculator" element={<Box><PageTitle title="TDS Calculator" /><TDSCalculator /></Box>} />
            <Route path="/contact" element={<Box><PageTitle title="Contact Us" /><ContactUsPage /></Box>} />
            <Route path="/company" element={<Box><PageTitle title="About Our Company" /><FounderPage /></Box>} />
            <Route path="/careers" element={<Box><PageTitle title="Career Opportunities" /><CareersPage /></Box>} />
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
