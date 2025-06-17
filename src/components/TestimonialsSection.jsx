import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Rating, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Styled testimonial card with animation and hover effect
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
      color: 'rgba(139, 195, 74, 0.3)',
    },
  },
}));

// Quote icon styled
const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  fontSize: '40px',
  color: 'rgba(139, 195, 74, 0.2)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  pointerEvents: 'none',
}));

// Control button styled
const ControlButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
}));

// Testimonials data with full text included
const testimonials = [
  {
    text: 'Exceptional service! Their expertise in taxation and financial planning has been invaluable for our business growth.',
    rating: 5,
    name: 'Subodh Jindal',
    company: 'All India Food Federation INDIA ',
  },
  {
    text: 'Professional, thorough, and always available when needed. They have been our trusted advisors for years.',
    rating: 5,
    name: 'Praveen Jain',
    company: 'Global Plastchem Group',
  },
  {
    text: 'Their attention to detail and deep understanding of accounting standards sets them apart from others.',
    rating: 5,
    name: 'Pooja Agarwal',
    company: 'CFO Brook Field',
  },
  {
    text: 'Their international tax expertise helped us expand our operations globally. The team provided invaluable guidance throughout the process.',
    rating: 5,
    name: 'Sahil Bhatia',
    company: 'Universal Knitwears',
  },
  {
    text: 'Outstanding audit services! They helped us identify key areas for improvement and strengthened our financial controls.',
    rating: 5,
    name: 'Manish Arora (Lawyer of Supreme Court)',
    company: 'Director of ULPC',
  },
  {
    text: 'Their forensic accounting team helped us resolve complex financial discrepancies. Highly professional and discrete service.',
    rating: 5,
    name: 'Anita Desai',
    company: 'Financial Analytics Ltd',
  },
];

// Main testimonials component
const TestimonialsSection = () => {
  // For visibility animation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // For carousel dragging & sliding
  const carousel = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const autoSlideInterval = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Mouse / Touch handlers for drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carousel.current.offsetLeft);
    setScrollLeft(carousel.current.scrollLeft);
    carousel.current.style.cursor = 'grabbing';
    stopAutoSlide();
    setIsPlaying(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carousel.current) carousel.current.style.cursor = 'grab';
    if (autoSlideEnabled) {
      startAutoSlide();
      setIsPlaying(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    carousel.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carousel.current.offsetLeft);
    setScrollLeft(carousel.current.scrollLeft);
    stopAutoSlide();
    setIsPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.current.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.current.scrollLeft = scrollLeft - walk;
  };

  // Handle infinite scroll logic
  const handleInfiniteScroll = () => {
    if (!carousel.current) return;
    
    const container = carousel.current;
    const scrollPosition = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    // If we've scrolled to the end, reset to the beginning
    if (scrollPosition + clientWidth >= scrollWidth - 10) {
      container.scrollTo({
        left: 0,
        behavior: 'auto'
      });
    }
  };

  const startAutoSlide = () => {
    if (!autoSlideInterval.current && autoSlideEnabled) {
      autoSlideInterval.current = setInterval(() => {
        if (!carousel.current) return;
  
        const container = carousel.current;
        const cards = container.querySelectorAll('div > div > div');
        if (!cards.length) return;
  
        const card = cards[0];
        const style = getComputedStyle(card);
        const cardMarginRight = parseInt(style.marginRight || '0', 10);
        const cardWidth = card.offsetWidth + cardMarginRight;
  
        const newScrollLeft = container.scrollLeft + 1; // Scroll 1px at a time for smoother animation
        
        container.scrollTo({
          left: newScrollLeft,
          behavior: 'auto'
        });
        
        // Check if we need to reset for infinite loop
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        }
      }, 16); // Update at 60fps for smoother animation
    }
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopAutoSlide();
      setAutoSlideEnabled(false);
    } else {
      setAutoSlideEnabled(true);
      startAutoSlide();
    }
    setIsPlaying(!isPlaying);
  };

  // Intersection observer to reveal section with animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Reset carousel scroll on resize
  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        carousel.current.scrollLeft = 0;
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    if (carousel.current) resizeObserver.observe(carousel.current);

    return () => {
      if (carousel.current) resizeObserver.unobserve(carousel.current);
      stopAutoSlide();
    };
  }, []);

  // Attach event listeners for dragging and start auto slide
  useEffect(() => {
    if (autoSlideEnabled) {
      startAutoSlide();
    }
    
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
  }, [isDragging, startX, scrollLeft, autoSlideEnabled]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, sm: 7, md: 8 },
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
          background:
            'linear-gradient(135deg, rgba(245, 247, 250, 0.85) 0%, rgba(232, 237, 242, 0.85) 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: { xs: 1, sm: 1.5, md: 2 },
            fontWeight: 600,
            color: '#333',
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem' },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            '& span': {
              color: '#4CAF50',
              display: 'inline-block',
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
            },
          }}
        >
          What our <span>clients</span> say about us
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            color: '#666',
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}
        >
          Unlike most accounting companies, S N VERMA & Co. is an integrated finance management
          team. From the start, we see ourselves as your partner.
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Tooltip title={isPlaying ? "Pause" : "Play"}>
            <ControlButton 
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause testimonials" : "Play testimonials"}
              size="medium"
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </ControlButton>
          </Tooltip>
          
          <Box
            ref={carousel}
            sx={{
              overflow: 'hidden',
              width: '100%',
              cursor: 'grab',
              position: 'relative',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <Box sx={{ 
              display: 'flex',
              gap: { xs: '1rem', sm: '1.5rem', md: '2rem' },
              padding: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
              width: 'max-content',
            }}>
              {/* Original testimonials */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  isVisible={isVisible}
                  index={index % testimonials.length}
                  sx={{
                    width: { xs: '80vw', sm: '320px', md: '360px' },
                    flex: '0 0 auto',
                    minHeight: { xs: '260px', sm: '320px', md: '340px' },
                    padding: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  <QuoteIcon className="quote-icon" sx={{ fontSize: { xs: '28px', sm: '36px', md: '40px' } }} />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1.5, sm: 2.5, md: 3 },
                      color: '#555',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' },
                    }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      mb: { xs: 1, sm: 2, md: 2 },
                      color: '#8BC34A',
                      fontSize: { xs: 18, sm: 22, md: 24 },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#333',
                      mb: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {testimonial.company}
                  </Typography>
                </TestimonialCard>
              ))}
              
              {/* Duplicate the first few testimonials to create the infinite loop effect */}
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard
                  key={`duplicate-${index}`}
                  isVisible={isVisible}
                  index={index}
                  sx={{
                    width: { xs: '80vw', sm: '320px', md: '360px' },
                    flex: '0 0 auto',
                    minHeight: { xs: '260px', sm: '320px', md: '340px' },
                    padding: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  <QuoteIcon className="quote-icon" sx={{ fontSize: { xs: '28px', sm: '36px', md: '40px' } }} />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 1.5, sm: 2.5, md: 3 },
                      color: '#555',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' },
                    }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      mb: { xs: 1, sm: 2, md: 2 },
                      color: '#8BC34A',
                      fontSize: { xs: 18, sm: 22, md: 24 },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#333',
                      mb: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {testimonial.company}
                  </Typography>
                </TestimonialCard>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
