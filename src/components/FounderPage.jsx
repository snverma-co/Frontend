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
                src="/Founder Image.jpeg"
                alt="S.N. Verma"
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
    color: '#1a1a1a',
    whiteSpace: 'nowrap',     // Prevent line break
    // overflow: 'hidden',       // Optional: hides overflow text
    textOverflow: 'ellipsis'  // Optional: adds "..." if text overflows
  }}
>
Late Shri CA S.N. Verma
</Typography>

              <Typography
                variant="h6"
                component={motion.div}
                variants={itemVariants}
                sx={{ color: '#4CAF50', mb: 3, fontStyle: 'italic' }}
              >
                Chartered Accountant
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', textAlign: 'justify', lineHeight: 1.8 }}
              >
               The legacy of S N Verma & Co. was built on the vision, dedication, and unparalleled expertise of our founder, Late Shri S. N. Verma. In 1970, with a commitment to excellence and a passion for serving clients, he laid the foundation of our firm, which has grown into a trusted name in the financial and taxation landscape over the past 55 years.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', textAlign: 'justify', lineHeight: 1.8 }}
              >
              Shri S. N. Verma was a true visionary, renowned for his profound knowledge in auditing, taxation, financial planning, and business growth strategies. His ability to navigate complex financial challenges with precision and foresight set a benchmark for excellence. A dedicated professional, he took personal care to resolve every client’s matter, earning their trust and building enduring relationships.


              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', textAlign: 'justify', lineHeight: 1.8 }}
              >
              A true karmayogi, Shri Verma’s tireless work ethic and commitment to integrity shaped the firm’s ethos. Under his leadership, S N Verma & Co. grew into a vast empire of expertise, delivering innovative solutions and fostering sustainable growth for clients across diverse sectors.


              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', textAlign: 'justify', lineHeight: 1.8 }}
              >
              His legacy continues to inspire us every day. At S N Verma & Co., we honor his vision by walking in his footsteps, upholding the values of trust, excellence, and client-first service that he instilled. Shri S. N. Verma’s actions and principles remain the guiding light for our firm, driving us to empower our clients and achieve new heights of success.


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
           
            </Box>
          </Grid>
         
        </Grid>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default FounderPage;