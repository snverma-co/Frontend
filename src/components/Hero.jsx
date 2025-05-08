import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import NewsSection from './NewsSection';

const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: '80px',
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/grouppic.JPG")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  color: '#fff'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 30px',
  textTransform: 'none',
  fontSize: '1.1rem',
  margin: '10px',
  '&.primary': {
    backgroundColor: '#4CAF50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45a049'
    }
  },
  '&.secondary': {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
  }
}));

const Hero = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { translations, isRTL } = useLanguage();
  const navigate = useNavigate();
  const words = [
    translations['Taxation'],
    translations['Income Statements'],
    translations['Variance Analysis'],
    translations['Audit'],
    translations['Cost Accounting'],
    translations['Forensic Accounting'],
    translations['Ledger'],
    translations['Balance Sheet'],
    translations['Depreciation'],
    translations['Accounting Standards'],
    translations['Financial Statements']
  ];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    if (!words[wordIndex]) return;

    const word = words[wordIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(text => {
          if (text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return '';
          }
          return text.slice(0, -1);
        });
      } else {
        setText(text => {
          if (text === word) {
            setTimeout(() => setIsDeleting(true), pauseTime);
            return text;
          }
          return word.slice(0, text.length + 1);
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <HeroSection className="hero-section" id="home">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <Typography variant="h2" component="h1" sx={{ 
                fontWeight: 800,
                mb: 2,
                textAlign: isRTL ? 'right' : 'left',
                fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                fontFamily: '"Playfair Display", serif',
                '& .highlight': {
                  color: '#4CAF50'
                }
              }}>
                {translations['Manage Your']} <span style={{ color: '#4CAF50', transition: 'color 0.3s ease' }}>{text}</span><br />
                {translations['The Right Way']}
              </Typography>
              <Typography variant="h5" sx={{ 
                mb: 4, 
                textAlign: isRTL ? 'right' : 'left', 
                fontSize: '1.25rem',
                fontFamily: '"Playfair Display", serif'
              }}>
                {translations['Empowering Excellence']}, {translations['Every Step of the Way']}
              </Typography>
              
              <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
                <StyledButton 
                  className="primary" 
                  variant="contained"
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {translations['Our Services']}
                </StyledButton>
                <StyledButton 
                  className="secondary" 
                  variant="outlined"
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo(0, 0);
                  }}
                >
                  {translations["Let's Talk"]}
                </StyledButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <NewsSection />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;