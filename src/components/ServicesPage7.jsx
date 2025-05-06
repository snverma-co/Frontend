import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import ServiceHeader from './ServiceHeader';
import { ContactSection } from './ContactSection';

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  border: '1px solid #eee',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    borderColor: '#4CAF50'
  }
}));

const ServicesPage7 = () => {
  const { translations } = useLanguage();

  const services = [
    {
      title: 'Business Structure Advisory',
      description: 'Expert guidance on choosing the right business structure (Private Limited, LLP, Branch Office, etc.).'
    },
    {
      title: 'Company Registration',
      description: 'Complete assistance in company registration process with ROC and other authorities.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Support in obtaining necessary licenses, permits, and regulatory approvals.'
    },
    {
      title: 'Tax Registration',
      description: 'Assistance in GST registration, PAN/TAN, and other tax-related registrations.'
    },
    {
      title: 'Foreign Investment Advisory',
      description: 'Guidance on FDI regulations, FEMA compliance, and investment structuring.'
    },
    {
      title: 'Location Analysis',
      description: 'Support in selecting optimal business location and understanding local regulations.'
    },
    {
      title: 'Banking Setup',
      description: 'Assistance in opening business bank accounts and establishing banking relationships.'
    },
    {
      title: 'Post-Registration Support',
      description: 'Ongoing support for compliance, filing returns, and maintaining statutory records.'
    }
  ];

  return (
    <>
      <ServiceHeader title="Setting up Business in India" />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard elevation={0}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      color: '#333',
                      fontWeight: 600,
                      fontFamily: '"Playfair Display", serif'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                      fontSize: '1.1rem'
                    }}
                  >
                    {service.description}
                  </Typography>
                </ServiceCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
        <ContactSection />
      </>
    );
  };

export default ServicesPage7;