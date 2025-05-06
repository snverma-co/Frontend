import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitNewsletter } from '../api/formHandlers';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 30px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45a049',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const AnimatedBox = styled(Box)(({ theme, isVisible = false, delay = 0 }) => ({
  transform: `translateY(${isVisible ? '0' : '50px'})`,
  opacity: isVisible ? 1 : 0,
  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, opacity 0.8s ease-in-out ${delay}ms`,
  willChange: 'transform, opacity'
}));

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitNewsletter(email);
      if (response.success) {
        alert(response.message);
        setEmail('');
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('An error occurred while subscribing to the newsletter');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: 8, 
        backgroundColor: '#f5f5f5',
        textAlign: 'center' 
      }}>
      <Container maxWidth="sm">
        <AnimatedBox isVisible={isVisible} delay={0}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#333',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            SIGN UP FOR INSIGHTS
          </Typography>
        </AnimatedBox>
        
        <AnimatedBox isVisible={isVisible} delay={200}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 4,
              color: '#666',
              fontSize: '1.1rem'
            }}
          >
            Get useful latest news & other important update on your email.
          </Typography>
        </AnimatedBox>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AnimatedBox isVisible={isVisible} delay={400}>
            <Box sx={{ width: '100%', display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
                required
                sx={{
                  flexGrow: 1,
                  maxWidth: '400px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    backgroundColor: '#fff',
                  }
                }}
              />
              <StyledButton type="submit" variant="contained">
                Subscribe
              </StyledButton>
            </Box>
          </AnimatedBox>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSection;