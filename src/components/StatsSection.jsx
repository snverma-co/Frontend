import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const stats = [
  { icon: BusinessIcon, value: '55+', label: 'Years of experience' },
  { icon: SettingsIcon, value: '50+', label: 'Services We Offers' },
  { icon: PublicIcon, value: '5+', label: 'Countries Operations' },
  { icon: GroupIcon, value: '100+', label: 'Professionals' },
  { icon: EmojiEmotionsIcon, value: '1200+', label: 'Happy Clients' }
];

const StatsSection = () => {
  const { translations, isRTL } = useLanguage();
  const sectionRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('stat-item')) {
              const index = Array.from(document.querySelectorAll('.stat-item')).indexOf(entry.target);
              const targetValue = parseInt(stats[index].value);
              let startValue = 1;
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = (targetValue - startValue) / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                if (currentStep < steps) {
                  setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = Math.round(startValue + (increment * currentStep));
                    return newValues;
                  });
                  currentStep++;
                } else {
                  setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = targetValue;
                    return newValues;
                  });
                  clearInterval(timer);
                }
              }, duration / steps);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const statElements = document.querySelectorAll('.stat-item');
    const titleElement = document.querySelector('.title-item');
    const descElement = document.querySelector('.desc-item');

    statElements.forEach((el) => observer.observe(el));
    if (titleElement) observer.observe(titleElement);
    if (descElement) observer.observe(descElement);

    return () => {
      statElements.forEach((el) => observer.unobserve(el));
      if (titleElement) observer.unobserve(titleElement);
      if (descElement) observer.unobserve(descElement);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        textAlign: 'center',
        py: { xs: 5, sm: 6, md: 8 },  // Adjusted padding for different screen sizes
        backgroundColor: '#f5f5f5',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: { xs: '30px', sm: '40px', md: '50px' },  // Adjusted height for different screen sizes
          background: 'linear-gradient(to bottom right, transparent 49%, #f5f5f5 50%)'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}> {/* Added responsive padding */}
        <Typography
          variant="h2"
          className="title-item"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: { xs: 1, sm: 1.5, md: 2 },  // Adjusted margin for different screen sizes
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },  // Refined font sizes
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },  // Added line height for better readability
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'all 0.6s ease-out',
            '&.animate': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }}
        >
          {translations['Trusted experts. Proven results.']}
          <br />
          {translations['Its kind of our thing']}
        </Typography>
        <Typography
          variant="h6"
          className="desc-item"
          sx={{
            color: '#666',
            mb: { xs: 4, sm: 5, md: 6 },  // Adjusted margin for different screen sizes
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },  // Refined font sizes
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },  // Added line height for better readability
            px: { xs: 1, sm: 2, md: 0 },  // Added horizontal padding for smaller screens
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '0.2s',
            '&.animate': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }}
        >
       S N VERMA & Co is a Chartered Accounting Firm committed to serving our clients as a Trusted Advisor.
        </Typography>
        {/* Removed extra br tags and replaced with proper spacing in the container */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',  // 1 column on mobile
              sm: 'repeat(2, 1fr)',  // 2 columns on tablet
              md: 'repeat(5, 1fr)'   // 5 columns on desktop (unchanged)
            },
            gap: { xs: 3, sm: 3.5, md: 4 },  // Adjusted gap for different screen sizes
            textAlign: 'center',
            mt: { xs: 2, sm: 3, md: 4 }  // Added top margin instead of br tags
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Box
                key={index}
                className="stat-item"
                sx={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${0.1 * index}s`,  // Added staggered animation
                  backgroundColor: { xs: 'rgba(255,255,255,0.7)', md: 'transparent' },  // Added subtle background on mobile
                  borderRadius: { xs: '8px', md: '0' },  // Added rounded corners on mobile
                  padding: { xs: 3, sm: 2, md: 1 },  // Added padding for mobile cards
                  boxShadow: { xs: '0 2px 10px rgba(0,0,0,0.05)', md: 'none' },  // Added subtle shadow on mobile
                  '&.animate': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }}
              >
                <Icon
                  sx={{
                    fontSize: { xs: 40, sm: 44, md: 48 },  // Adjusted icon size for different screens
                    color: '#4CAF50',
                    mb: { xs: 1.5, md: 2 }
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    mb: 1,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }  // Adjusted font size for different screens
                  }}
                >
                  {animatedValues[index] + '+'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    fontWeight: 500,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }  // Adjusted font size for different screens
                  }}
                >
                  {translations[stat.label] || stat.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;