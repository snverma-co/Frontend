import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AnimatedBox = styled(Box)(({ theme, 'data-visible': isVisible = false, delay = 0 }) => ({
  transform: `translateY(${isVisible ? '0' : '50px'})`,
  opacity: isVisible ? 1 : 0,
  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, opacity 0.8s ease-in-out ${delay}ms`,
  willChange: 'transform, opacity',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 6s infinite ease-in-out',
    opacity: 0.5,
    pointerEvents: 'none',
    '@keyframes float': {
      '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
      '50%': { transform: 'translate(30px, -30px) rotate(180deg)' }
    }
  }
}));

const FindAccountantSection = () => {
  const { translations, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: { xs: 10, md: 14 }, 
        background: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 0, md: '60px 60px 0 0' },
        boxShadow: '0 -10px 30px rgba(0,97,255,0.2)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }
      }}>
      <Container maxWidth="none" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
            <AnimatedBox data-visible={isVisible} delay={0}>
              <Box
                component="img"
                src="/team-photo.jpg"
                alt="Team Meeting"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '30px',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  }
                }}
              />
            </AnimatedBox>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
            <AnimatedBox data-visible={isVisible} delay={200} sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '500px', mx: 'auto' }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '3px',
                  fontSize: { xs: '2.8rem', sm: '3.2rem', md: '3.8rem' },
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.25)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: { xs: '50%', md: '0' },
                    transform: { xs: 'translateX(-50%)', md: 'none' },
                    width: '100px',
                    height: '5px',
                    background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.3))',
                    borderRadius: '3px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Find a chartered accountant
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  lineHeight: 1.8,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  fontWeight: 400
                }}
              >
                If you're thinking of using the services of an accountant you should look for someone who has a professional qualification; always check what qualifications and experience they have. Appointing an ICAEW Chartered Accountant or regulated firm will ensure you get someone who is qualified, committed and accountable.
              </Typography>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindAccountantSection;