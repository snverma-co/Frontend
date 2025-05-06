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
            <Route path="/gst-calculator" element={<Box><PageTitle title="GST Calculator" description="Free GST Calculator tool by S N Verma & Co. Calculate GST rates, input tax credit, and total tax liability easily." /><GSTCalculator /></Box>} />
            <Route path="/income-tax-calculator" element={<Box><PageTitle title="Income Tax Calculator" description="Calculate your income tax liability with our free Income Tax Calculator. Get accurate tax calculations as per latest Indian tax laws." /><IncomeTaxCalculator /></Box>} />
            <Route path="/tds-calculator" element={<Box><PageTitle title="TDS Calculator" description="Calculate TDS (Tax Deducted at Source) accurately with our free TDS Calculator. Know your tax deductions as per Income Tax Act." /><TDSCalculator /></Box>} />
            <Route path="/contact" element={<Box><PageTitle title="Contact Us" description="Contact S N Verma & Co., your trusted CA firm in Delhi. Get expert consultation for all your accounting, tax, and business advisory needs." /><ContactUsPage /></Box>} />
            <Route path="/company" element={<Box><PageTitle title="About Our Company" description="Learn about S N Verma & Co., a leading chartered accountancy firm in Delhi with years of expertise in providing comprehensive financial services." /><FounderPage /></Box>} />
            <Route path="/careers" element={<Box><PageTitle title="Career Opportunities" description="Join S N Verma & Co., a leading CA firm in Delhi. Explore exciting career opportunities in accounting, taxation, and financial advisory services." /><CareersPage /></Box>} />
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
