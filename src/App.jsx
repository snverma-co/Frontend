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
import TermsPage from './components/TermsPage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
// import Utilities from './components/Utilities'; // Removed as Utilities page is deleted

import { PageTitle } from './components/PageTitle';
import TeamPage from './components/TeamPage';

const HomePage = () => (
  <Box>
    <PageTitle 
      title="Home"
      description="Top Chartered Accountant firm in Delhi offering expert accounting, taxation, and business advisory services. Get professional CA services tailored to your needs."
    />
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
    <PageTitle 
      title={title}
      description={`Professional ${title} by Delhi's leading CA firm. Expert guidance and solutions for all your financial needs.`}
    />
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
            <Route path="/audit-and-assurance" element={<ServicePageWrapper component={ServicesPage} title="Audit & Assurance Services" />} />
            <Route path="/taxation" element={<ServicePageWrapper component={ServicesPage2} title="Taxation Services" />} />
            <Route path="/regulatory-advisory" element={<ServicePageWrapper component={ServicesPage3} title="Regulatory Advisory Services" />} />
            <Route path="/ngo-and-trust" element={<ServicePageWrapper component={ServicesPage5} title="NGO & Trust Services" />} />
            <Route path="/accounting-advisory" element={<ServicePageWrapper component={ServicesPage6} title="Accounting Advisory Services" />} />
            <Route path="/business-setup-india" element={<ServicePageWrapper component={ServicesPage7} title="Business Setup in India" />} />
            <Route path="/transaction-advisory" element={<ServicePageWrapper component={ServicesPage4} title="Transaction Advisory Services" />} />
            <Route path="/business-consultancy" element={<ServicePageWrapper component={ServicesPage8} title="Business Consultancy Services" />} />
          
           
            <Route path="/contact" element={<Box><PageTitle title="Contact Us" description="Contact S N Verma & Co., your trusted CA firm in Delhi. Get expert consultation for all your accounting, tax, and business advisory needs." /><ContactUsPage /></Box>} />
            <Route path="/company" element={<Box><PageTitle title="About Our Company" description="Learn about S N Verma & Co., a leading chartered accountancy firm in Delhi with years of expertise in providing comprehensive financial services." /><FounderPage /></Box>} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<Box><PageTitle title="Career Opportunities" description="Join S N Verma & Co., a leading CA firm in Delhi. Explore exciting career opportunities in accounting, taxation, and financial advisory services." /><CareersPage /></Box>} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* <Route path="/utilities" element={<Box><PageTitle title="Utilities" description="Various utility tools provided by S N Verma & Co." /><Utilities /></Box>} /> */}
            <Route path="/rates-of-tds" element={<Box><PageTitle title="Rates of TDS" description="Details about Rates of TDS." /><div>Rates of TDS Page - Under Construction</div></Box>} />
            <Route path="/tds-rates-nri" element={<Box><PageTitle title="TDS Rates of N.R.I us 195" description="Details about TDS Rates for N.R.I under section 195." /><div>TDS Rates of N.R.I us 195 Page - Under Construction</div></Box>} />
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
