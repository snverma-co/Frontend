import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoThumbnail = styled(Box, {
  shouldComponentUpdate: (props) => true,
})(({ theme, isVisible = false, ...props }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%',
  backgroundColor: '#000',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  cursor: 'pointer',
  transform: `translateX(${isVisible ? '0' : '-100%'})`,
  opacity: isVisible ? 1 : 0,
  transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-in',
  '&:hover .playButton': {
    transform: 'translate(-50%, -50%) scale(1.1)'
  }
}));

const PlayButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80px',
  height: '80px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  '& svg': {
    fontSize: '40px',
    color: '#4CAF50'
  }
}));

const ContentBox = styled(Box, {
  shouldComponentUpdate: (props) => true,
})(({ theme, isVisible = false, ...props }) => ({
  transform: `translateX(${isVisible ? '0' : '100%'})`,
  opacity: isVisible ? 1 : 0,
  transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-in',
  willChange: 'transform, opacity'
}));

const AboutSection = () => {
  const { translations, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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
    <Box ref={sectionRef} sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'center'
        }}>
          <VideoThumbnail isVisible={isVisible}>
            <Box
              component="img"
              src="/team-photo.jpg"
              alt="Company Video Thumbnail"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <PlayButton className="playButton">
              <PlayArrowIcon />
            </PlayButton>
          </VideoThumbnail>

          <ContentBox isVisible={isVisible} sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#4CAF50',
                fontWeight: 600,
                mb: 2
              }}
            >
              {translations['SERVING OUR VALUED CLIENTS FOR MORE THAN 50+ YEARS']}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              S N VERMA & Co.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#666',
                mb: 3,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              {translations['Your Trusted Partner']}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                lineHeight: 1.8
              }}
            >
              {translations['We are prominent Chartered Accountants in India. We offer services in New Delhi and other major cities in India, like accounts outsourcing, auditing, company formation in India, business taxation, corporate compliance, starting business in India, registration of foreign companies, transfer pricing, tax due diligence, taxation of expatriates etc.']}
            </Typography>

            <Button
              variant="contained"
              onClick={() => {
                navigate('/company');
                window.scrollTo(0, 0);
              }}
              sx={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                borderRadius: '25px',
                padding: '10px 30px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s',
                },
                '&:hover': {
                  backgroundColor: '#45a049',
                  transform: 'scale(1.05) rotate(1deg)',
                  boxShadow: '0 6px 20px rgba(76,175,80,0.4)',
                  '&::before': {
                    transform: 'translateX(100%)',
                  }
                },
                '&:active': {
                  transform: 'scale(0.98) rotate(0deg)',
                  boxShadow: '0 2px 10px rgba(76,175,80,0.3)',
                }
              }}
            >
              {translations['Explore More About Us']}
            </Button>
          </ContentBox>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;