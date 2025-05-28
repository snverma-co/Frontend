import { Box, Container, Typography, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactSection } from './ContactSection';
import { PageTitle } from './PageTitle';

const TeamPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
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
      <PageTitle 
        title="Our Team"
        description="Meet the dedicated professionals at S N Verma & Co., a leading chartered accountancy firm in Delhi with expertise in taxation, audit, and business advisory services."
      />
      
     

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" direction="row-reverse">
          <Grid item xs={40} md={6}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{
                position: 'relative',
                marginTop: '-550px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -30,
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
                src="/senior partner img.jpeg"
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
                Senior Partner of S.N. VERMA & CO.
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
              CA Vipin Verma
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
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
              CA Vipin Verma, a dynamic and visionary leader, is the driving force behind the continued success of S N Verma & Co. With over 30 years of exemplary experience in taxation, auditing, and business advisory, he has elevated the firm to new heights, blending tradition with innovation to deliver unparalleled client satisfaction.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
               A distinguished alumnus of the University of Delhi (1995), CA Vipin Verma earned his membership with the Institute of Chartered Accountants of India (ICAI) in 1996. A rank holder in the CA examinations and a consistent academic topper, his intellectual prowess laid a strong foundation for his illustrious career. Joining S N Verma & Co. in 1992 as an articled assistant, he swiftly rose to the role of partner in 1997, bringing fresh perspectives and transformative systems to the firm.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
               Known for his forward-thinking approach, CA Vipin Verma introduced cutting-edge systems that were a decade ahead of their time, revolutionizing the firm’s operations and setting new industry standards. His passion for excellence and innovation has been a cornerstone of the firm’s growth.


              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
               A prominent figure in the professional community, CA Vipin Verma’s leadership extends beyond the firm. In 2007, at a remarkably young age, he was elected Chairman of NICASA and Treasurer of the Northern India Regional Council (NIRC) of ICAI, showcasing his dynamic leadership. As the founder-convenor of the Shalimar Bagh CPE Study Circle of NIRC of ICAI since 2003, he has spearheaded monthly seminars for over 22 years, fostering knowledge-sharing and professional development among CA peers. His active involvement in prestigious associations, including the ITAT Bar Association and STBA Bar Association of Delhi, underscores his influence in the field.




              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
              Specializing in taxation, audit matters, and business advisory, CA Vipin Verma is a trusted strategic advisor for businesses establishing operations in India and abroad. His extensive knowledge, sharp acumen, and relentless work ethic make him a pillar of S N Verma & Co., ensuring clients receive tailored, result-oriented solutions.






              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
                  With a legacy built on trust, innovation, and client-centric service, CA Vipin Verma continues to lead S N Verma & Co. with the same passion and vision that have defined his remarkable career.
        
            








   






              </Typography>
          
            </Box>
          </Grid>
        </Grid>
      </Container>
 <br></br>
 <br></br>
      <Container maxWidth="lg" sx={{ mb: 10 }} id="second-member">
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
                src="/JAHNAVI.jpeg"
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
CA Jahnavi Verma
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
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
              CA Jahnavi Verma, a third-generation Chartered Accountant, embodies the legacy of excellence at S N Verma & Co. with her youthful dynamism and visionary approach. Graduating from the University of Delhi in 2023, she joined the firm as an articled assistant in 2021 and qualified as a Chartered Accountant in 2024, marking the continuation of the firm’s tradition of professional brilliance.
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ mb: 3, color: '#666', lineHeight: 1.8 }}
              >
              A consistent academic topper, CA Jahnavi Verma brings a blend of intellectual rigor and innovative thinking to the firm. Her expertise in business advisory and tax planning has introduced fresh perspectives, ensuring clients receive cutting-edge solutions tailored to their needs. With a forward-looking vision, she is committed to elevating S N Verma & Co. to new heights, expanding its professional horizons while upholding its core values of trust and excellence.




              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{ color: '#666', lineHeight: 1.8 }}
              >
             As a young and dynamic leader, CA Jahnavi Verma is poised to carry forward the firm’s 55-year legacy with passion, innovation, and an unwavering commitment to client success. Her strategic insights and dedication make her a vital force in shaping the future of S N Verma & Co.




              </Typography>
              <br></br>
            
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

export default TeamPage;