import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Styled Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  paddingTop: '80px',
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  transition: 'background-image 1s ease-in-out',
  [theme.breakpoints.down('md')]: {
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }
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
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(150);

  const { translations, isRTL } = useLanguage();
  const navigate = useNavigate();

  const words = [
    translations['ITR’s'],
    translations['GST'],
    translations['TDS'],
    translations['Audit'],
    translations['Financial Planning'],
    translations['Balance Sheet'],
    translations['Wealth Management'],
    translations['Systems']
  ];

  const backgroundImages = [
    '/bgimg.jpg',
    '/diverse-group-young-professionals-are-engaged-their-respective-tasks-computers_1339901-7178.avif',
    '/grouppic.JPG',
    '/premium_photo-1683120730432-b5ea74bd9047.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useRefs to hold current state values to avoid stale closures in timeout
  const loopNumRef = useRef(loopNum);
  const isDeletingRef = useRef(isDeleting);
  const textRef = useRef(text);

  useEffect(() => {
    loopNumRef.current = loopNum;
  }, [loopNum]);

  useEffect(() => {
    isDeletingRef.current = isDeleting;
  }, [isDeleting]);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNumRef.current % words.length;
      const fullText = words[currentIndex];
      let updatedText;

      if (isDeletingRef.current) {
        updatedText = fullText.substring(0, textRef.current.length - 1);
      } else {
        updatedText = fullText.substring(0, textRef.current.length + 1);
      }

      setText(updatedText);

      // Control typing speed and pauses
      let delay = isDeletingRef.current ? 75 : 150;

      if (!isDeletingRef.current && updatedText === fullText) {
        delay = 1000; // pause before deleting
        setIsDeleting(true);
      } else if (isDeletingRef.current && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNumRef.current + 1);
        delay = 500; // pause before typing next word
      }

      setTypingDelay(delay);
    };

    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [text, typingDelay, words]);

  return (
    <HeroSection
      className="hero-section"
      id="home"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImages[currentImageIndex]})`
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  textAlign: isRTL ? 'right' : 'left',
                  fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                  fontFamily: '"Playfair Display", serif',
                  '& .highlight': {
                    color: '#4CAF50'
                  },
                  overflowWrap: 'normal',
                  wordBreak: 'keep-all',
                }}
              >
                {translations['Manage Your']}{' '}
                <span
                  style={{
                    color: '#4CAF50',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                    overflowWrap: 'normal',
                    wordBreak: 'keep-all',
                    display: 'inline-block',
                  }}
                >
                  {text}
                </span><br />
                {translations['The Right Way']}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  textAlign: isRTL ? 'right' : 'left',
                  fontSize: '1.25rem',
                  fontFamily: '"Playfair Display", serif'
                }}
              >
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
            {/* Right grid intentionally left empty */}
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
