import { Box, Container, Typography, Paper, Breadcrumbs, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { ContactSection } from './ContactSection';

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(135deg, #0072bc 0%, #00a0e3 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '&::before': {
    content: '"\"',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
}));

const TermsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <Box>
      <StyledHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ 
            color: '#fff',
            mb: 2,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '3px 3px 6px rgba(0,0,0,0.25)',
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            lineHeight: 1.1
          }}>
            Terms and Conditions
          </Typography>
          <Breadcrumbs 
            aria-label="breadcrumb"
            sx={{ 
              '& .MuiBreadcrumbs-separator': { color: '#fff' },
              mb: 4,
              '& .MuiBreadcrumbs-ol': {
                justifyContent: 'center'
              }
            }}
          >
            <Link 
              color="inherit" 
              href="/"
              sx={{ 
                color: '#fff',
                textDecoration: 'none',
                '&:hover': { color: '#fff', textDecoration: 'underline' }
              }}
            >
              Home
            </Link>
            <Typography color="#fff">Terms and Conditions</Typography>
          </Breadcrumbs>
        </Container>
      </StyledHeader>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}
        >
          <Typography
            variant="h4"
            component={motion.h1}
            variants={itemVariants}
            sx={{ mb: 4, fontWeight: 700, color: '#1a1a1a' }}
          >
            Terms and Conditions
          </Typography>

          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            Welcome to S N Verma & Co. By accessing and using our website and services, you agree to be bound by these Terms and Conditions.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            1. Services
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            S N Verma & Co. provides accounting, taxation, and business advisory services. Our services are subject to separate engagement letters and agreements. These terms govern your use of our website and general interaction with our firm.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            2. Professional Standards
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            We maintain high professional standards in accordance with the Institute of Chartered Accountants of India (ICAI) guidelines. Our services are provided with reasonable care and skill, adhering to relevant professional and ethical standards.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            3. Confidentiality
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            We maintain strict confidentiality of all client information. However, we may be required to disclose information if mandated by law or professional obligations.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            4. Intellectual Property
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            All content on this website is the intellectual property of S N Verma & Co. and is protected by copyright laws. You may not reproduce, distribute, or use our content without explicit permission.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            5. Limitation of Liability
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            While we strive to maintain accurate information on our website, we do not warrant its completeness or accuracy. We are not liable for any damages arising from the use of our website or services, except as mandated by law.
          </Typography>

          <Typography
            variant="h6"
            component={motion.h2}
            variants={itemVariants}
            sx={{ mt: 4, mb: 2, color: '#1a1a1a', fontWeight: 600 }}
          >
            6. Governing Law
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
          >
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi, India.
          </Typography>

          <Typography
            variant="body1"
            component={motion.p}
            variants={itemVariants}
            sx={{ mt: 4, color: '#666', lineHeight: 1.8 }}
          >
            For any questions about these Terms and Conditions, please contact us at info@snvcas.com.
          </Typography>
        </Paper>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default TermsPage;