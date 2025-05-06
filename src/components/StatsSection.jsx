import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const stats = [
  { icon: BusinessIcon, value: '28+', label: 'Years of experience' },
  { icon: SettingsIcon, value: '100+', label: 'Services We Offers' },
  { icon: PublicIcon, value: '5+', label: 'Countries Operations' },
  { icon: GroupIcon, value: '100+', label: 'Professionals' },
  { icon: EmojiEmotionsIcon, value: '1500+', label: 'Happy Clients' }
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
        py: 8,
        backgroundColor: '#f5f5f5',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50px',
          background: 'linear-gradient(to bottom right, transparent 49%, #f5f5f5 50%)'
        }
      }}
    >
      <Container>
        <Typography
          variant="h2"
          className="title-item"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 2,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '1.5rem', md: '2.5rem' },
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
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '0.8rem', md: '1rem' },
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
          {translations['Firm Description']}
        </Typography>
        <br/>
        <br/>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(5, 1fr)'
            },
            gap: 4,
            textAlign: 'center'
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
                  '&.animate': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }}
              >
                <Icon
                  sx={{
                    fontSize: 48,
                    color: '#4CAF50',
                    mb: 2
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    mb: 1
                  }}
                >
                  {animatedValues[index] + '+'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    fontWeight: 500
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