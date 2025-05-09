import { Box, Button, Container, Typography } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const JourneySection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      ref={ref}
      sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/journey.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 6,
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          zIndex: 1
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              component={motion.h2}
              variants={itemVariants}
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontFamily: '"Playfair Display", serif',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Start your journey with S N VERMA & Co. <br/>
              today
            </Typography>
            <Typography
              component={motion.p}
              variants={itemVariants}
              variant="h7"
              sx={{ opacity: 0.9 }}>
              IF YOUR BUSINESS IS IN NEED OF A TRUSTED ADVISOR, GET IN TOUCH WITH US TODAY.
            </Typography>
          </Box>
          <Button
            component={motion.button}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotate: [0, -1, 1, -1, 0],
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              transition: {
                scale: {
                  duration: 0.2,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: 0
                }
              }
            }}
            whileTap={{ scale: 0.97 }}
            variant="contained"
            color="inherit"
            size="large"
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
            sx={{
              color: '#1976d2',
              background: 'linear-gradient(45deg, #ffffff 30%, #f5f5f5 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #f5f5f5 30%, #ffffff 90%)',
              },
              px: 4,
              py: 1.5,
              borderRadius: 2,
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            Start a Conversation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JourneySection;