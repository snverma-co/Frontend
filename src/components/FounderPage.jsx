import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactSection } from './ContactSection';

const FounderPage = () => {
  const { translations, isRTL } = useLanguage();

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
    <Box
      sx={{
        minHeight: '100vh',
        pt: '80px',
        pb: 0,
        backgroundColor: '#f5f5f5'
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                  borderRadius: '10px',
                  zIndex: 0
                }
              }}
            >
              <Box
                component="img"
                src="/neeraj-bhagat.jpg"
                alt="Neeraj Bhagat"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="overline"
                component={motion.div}
                variants={itemVariants}
                sx={{ color: '#4CAF50', mb: 2, fontWeight: 600 }}
              >
                Founder of S N VERMA & CO.
              </Typography>
              <Typography
                variant="h2"
                component={motion.h1}
                variants={itemVariants}
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: '"Playfair Display", serif',
                  color: '#1a1a1a'
                }}
              >
                Meet S N Verma
              </Typography>
              <Typography
                variant="h6"
                component={motion.div}
                variants={itemVariants}
                sx={{ color: '#4CAF50', mb: 3, fontStyle: 'italic' }}
              >
                Chartered Accountant in Delhi
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
                A reputed Tax Consultant & Chartered Accountant, who has helped many
                individuals/organizations to establish business in India
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
                Neeraj Bhagat is a member of the Institute of Chartered Accountants of India
                (ICAI) since 1997. He has worked with professionally managed corporates in
                the capacity as a consultant. He has experience of handling corporate affairs
                in different areas for over a decade. He has helped many organizations to set
                up business in India and operating it smoothly.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
                Neeraj has vast knowledge and a thorough understanding of Indian laws and
                regulations, as well as the complex corporate taxation system. Neeraj & his
                team have assisted many overseas companies in completing paperwork,
                getting necessary approvals, paying taxes, filing, and much more.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  left: 20,
                  bottom: 20,
                  background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                  borderRadius: '10px',
                  zIndex: 0
                }
              }}
            >
              <Box
                component="img"
                src="/ruchika-bhagat.jpg"
                alt="Ruchika Bhagat"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="overline"
                component={motion.div}
                variants={itemVariants}
                sx={{ color: '#4CAF50', mb: 2, fontWeight: 600 }}
              >
                Managing Director of S N VERMA & CO.
              </Typography>
              <Typography
                variant="h2"
                component={motion.h1}
                variants={itemVariants}
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: '"Playfair Display", serif',
                  color: '#1a1a1a'
                }}
              >
                Meet Vipin Verma
              </Typography>
              <Typography
                variant="h6"
                component={motion.div}
                variants={itemVariants}
                sx={{ color: '#4CAF50', mb: 3, fontStyle: 'italic' }}
              >
                Chartered Accountant in Delhi
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
                Mrs. Ruchika Bhagat graduated from the University of Delhi in the year 1996.
                She became a member of the Institute of Chartered Accountants of India
                (ICAI) in 1998. She is a strategic adviser in setting up businesses in India for
                foreign companies and taking care of its compliance.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
                She specializes in Business Advisory, Tax, Regulatory and Risk Advisory. She is a strategic
                adviser in setting up businesses in India for foreign companies and taking
                care of its compliance.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
                Her professionalism and expertise in serving clients to their satisfaction
                have always been an inspiration for all in the organization. Her extensive
                knowledge and hard work are the pillars of this firm.
                She is a business professional with more than 26 years of experience
                helping other businesses grow and be more profitable. She has a strong and
                genuine passion for business growth and sustainability and has a vast
                knowledge of working with Indian companies as well as many foreign
                companies (from the UK, USA, Italy, China, Korea, USA, UK, Japan, Israel,
                etc).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default FounderPage;