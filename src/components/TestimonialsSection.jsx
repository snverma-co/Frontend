import { Box, Container, Typography, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = styled(Box)(({ theme, isVisible, index }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  position: 'relative',
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  overflow: 'hidden',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
  transitionDelay: `${index * 0.2}s`,
  '&:hover': {
    transform: 'translateY(-5px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    '& .quote-icon': {
      transform: 'rotate(10deg) scale(1.1)',
      color: 'rgba(139, 195, 74, 0.3)'
    }
  }
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  fontSize: '40px',
  color: 'rgba(139, 195, 74, 0.2)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  pointerEvents: 'none'
}));

const testimonials = [
  {
    text: 'Exceptional service! Their expertise in taxation and financial planning has been invaluable for our business growth.',
    rating: 5,
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Ltd'
  },
  {
    text: 'Professional, thorough, and always available when needed. They have been our trusted advisors for years.',
    rating: 5,
    name: 'Priya Sharma',
    company: 'Innovation Corp'
  },
  {
    text: 'Their attention to detail and deep understanding of accounting standards sets them apart from others.',
    rating: 5,
    name: 'Amit Patel',
    company: 'Global Traders'
  },
  {
    text: 'Their international tax expertise helped us expand our operations globally. The team provided invaluable guidance throughout the process.',
    rating: 5,
    name: 'Sarah Chen',
    company: 'Global Ventures Inc'
  },
  {
    text: 'Outstanding audit services! They helped us identify key areas for improvement and strengthened our financial controls.',
    rating: 5,
    name: 'Vikram Malhotra',
    company: 'Retail Solutions Group'
  },
  {
    text: 'Their forensic accounting team helped us resolve complex financial discrepancies. Highly professional and discrete service.',
    rating: 5,
    name: 'Anita Desai',
    company: 'Financial Analytics Ltd'
  }
];

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carousel = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');
  const autoSlideInterval = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carousel.current.offsetLeft);
    setScrollLeft(carousel.current.scrollLeft);
    carousel.current.style.cursor = 'grabbing';
    stopAutoSlide();
    setAutoSlideEnabled(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carousel.current.style.cursor = 'grab';
    setAutoSlideEnabled(true);
    startAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.current.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carousel.current.offsetLeft);
    setScrollLeft(carousel.current.scrollLeft);
    stopAutoSlide();
    setAutoSlideEnabled(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.current.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.current.scrollLeft = scrollLeft - walk;
  };

  const startAutoSlide = () => {
    if (!autoSlideInterval.current && autoSlideEnabled) {
      autoSlideInterval.current = setInterval(() => {
        if (carousel.current) {
          const maxScroll = carousel.current.scrollWidth - carousel.current.clientWidth;
          const currentScroll = carousel.current.scrollLeft;
          const cardWidth = carousel.current.clientWidth / 3;
          
          if (slideDirection === 'right') {
            const newScrollLeft = currentScroll + cardWidth;
            if (newScrollLeft >= maxScroll) {
              setSlideDirection('left');
              carousel.current.scrollLeft = maxScroll;
            } else {
              carousel.current.scrollLeft = newScrollLeft;
            }
          } else {
            const newScrollLeft = currentScroll - cardWidth;
            if (newScrollLeft <= 0) {
              setSlideDirection('right');
              carousel.current.scrollLeft = 0;
            } else {
              carousel.current.scrollLeft = newScrollLeft;
            }
          }
        }
      }, 5000);
    }
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        carousel.current.scrollLeft = 0;
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    if (carousel.current) {
      resizeObserver.observe(carousel.current);
    }

    return () => {
      if (carousel.current) {
        resizeObserver.unobserve(carousel.current);
      }
      stopAutoSlide();
    };
  }, []);

  useEffect(() => {
    startAutoSlide();
    const currentCarousel = carousel.current;
    if (!currentCarousel) return;

    currentCarousel.addEventListener('mousedown', handleMouseDown);
    currentCarousel.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    currentCarousel.addEventListener('touchstart', handleTouchStart);
    currentCarousel.addEventListener('touchmove', handleTouchMove);
    currentCarousel.addEventListener('touchend', handleMouseUp);

    return () => {
      currentCarousel.removeEventListener('mousedown', handleMouseDown);
      currentCarousel.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      currentCarousel.removeEventListener('touchstart', handleTouchStart);
      currentCarousel.removeEventListener('touchmove', handleTouchMove);
      currentCarousel.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: 8,
        background: 'url("/testimonials-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.85) 0%, rgba(232, 237, 242, 0.85) 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: '#333',
            fontFamily: '"Playfair Display", serif',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            '& span': {
              color: '#4CAF50',
              display: 'inline-block',
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
            }
          }}
        >
          What our <span>clients</span> say about us
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: '#666',
            fontFamily: '"Playfair Display", serif',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          Unlike most accounting companies, S N VERMA & Co. is an integrated finance management team.
          From the start, we see ourselves as your partner.
        </Typography>

        <Box
          ref={carousel}
          sx={{
            overflow: 'hidden',
            width: '100%',
            cursor: 'grab',
            position: 'relative',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              padding: '1rem',
              width: 'max-content'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
              isVisible={isVisible}
              index={index}
                sx={{
                  width: { xs: '280px', sm: '320px', md: '360px' },
                  flex: '0 0 auto',
                  mx: 2,
                  minHeight: '300px'
                }}
              >
                <QuoteIcon className="quote-icon" />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: '#555',
                    lineHeight: 1.8,
                    fontStyle: 'italic'
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Rating
                  value={testimonial.rating}
                  readOnly
                  sx={{ mb: 2, color: '#8BC34A' }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#666' }}>
                  {testimonial.company}
                </Typography>
              </TestimonialCard>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;