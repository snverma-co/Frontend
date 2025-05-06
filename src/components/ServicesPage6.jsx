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

const ServicesPage6 = () => {
  const { translations } = useLanguage();

  const services = [
    {
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping services to maintain accurate financial records and transactions.'
    },
    {
      title: 'Financial Statements Preparation',
      description: 'Expert preparation of balance sheets, income statements, and cash flow statements.'
    },
    {
      title: 'Accounting System Setup',
      description: 'Implementation and configuration of accounting systems tailored to your business needs.'
    },
    {
      title: 'Financial Analysis',
      description: 'Comprehensive financial analysis and reporting for informed decision-making.'
    },
    {
      title: 'Payroll Management',
      description: 'Complete payroll processing and management services.'
    },
    {
      title: 'Accounts Receivable/Payable',
      description: 'Efficient management of accounts receivable and payable processes.'
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning and forecasting services for business growth.'
    },
    {
      title: 'Compliance & Reporting',
      description: 'Ensuring compliance with accounting standards and regulatory requirements.'
    }
  ];

  return (
    <>
      <ServiceHeader title="Accounting Advisory Services" />
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

export default ServicesPage6;