import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitContactForm } from '../api/formHandlers';
import ThankYou from './ThankYou/ThankYou';
import { motion } from 'framer-motion';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  padding: '15px 40px',
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.1rem',
  border: 0,
  '&:hover': {
    background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(33,150,243,0.3)'
  },
  '&:active': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 15px rgba(33,150,243,0.2)'
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}));



const AnimatedBox = styled(Box)(({ theme, isVisible = false, delay = 0 }) => ({
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

export const ContactSection = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: ''
  });
  const [selectedLabel, setSelectedLabel] = useState(null);
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

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    } else if (name === 'phone') {
      const phoneRegex = /^[0-9+\-\s()]{10,}$/;
      if (!phoneRegex.test(value)) {
        error = 'Please enter a valid phone number';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSelectedLabel(name);

    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    try {
      const response = await submitContactForm({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services || 'Other',
        message: formData.message,
        createdAt: new Date()
      });
      if (response.success) {
        setShowThankYou(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          services: '',
          message: ''
        });
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
      console.error('Form submission error:', error);
    }
  };

  if (showThankYou) {
    return <ThankYou message="Thank you for reaching out. We will get back to you shortly." />;
  }

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: { xs: 10, md: 14 }, 
        background: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 0, md: '0 0 60px 60px' },
        boxShadow: '0 10px 30px rgba(0,97,255,0.2)',
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

          <Grid item xs={12} md={5} sx={{ position: 'relative', zIndex: 1 }}>
            <AnimatedBox isVisible={isVisible} delay={0} sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '500px', mx: 'auto' }}>
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
                S N VERMA & CO.
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '1px',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  lineHeight: 1.2,
                  textTransform: 'uppercase',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                CHARTERED ACCOUNTANTS
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '-0.5px',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.8))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                We'd Love TO HEAR FROM YOU
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: 'rgba(255,255,255,0.95)',
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '-0.5px',
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
                  lineHeight: 1.2,
                  fontWeight: 500
                }}
              >
                We're here to help You
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.8,
                  maxWidth: '400px',
                  mx: { xs: 'auto', md: 0 },
                  fontWeight: 400,
                  letterSpacing: '0.5px'
                }}
              >
                Schedule time to talk with an expert matched to your Accounting and tax related needs.
              </Typography>
            </AnimatedBox>
          </Grid>
          
          <Grid item xs={12} md={7} sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3.5,
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '35px',
                padding: { xs: '40px', sm: '50px', md: '60px' },
                boxShadow: '0 35px 70px rgba(0,0,0,0.2), 0 15px 25px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(20px)',
                maxWidth: '1200px',
                mx: 'auto',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: '1px solid rgba(255,255,255,0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                  borderRadius: 'inherit',
                  transition: 'opacity 0.3s ease-in-out'
                },
                '&:hover': {
                  boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 20px 30px rgba(0,0,0,0.15)',
                  transform: 'translateY(-8px)',
                  borderColor: 'rgba(255,255,255,0.5)',
                  '&::before': {
                    opacity: 0.8
                  }
                }
              }}
            >
          <AnimatedBox isVisible={isVisible} delay={400}>
            <TextField
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              error={!!errors.fullName}
              helperText={errors.fullName}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.4)',
                    boxShadow: '0 15px 35px rgba(33,150,243,0.15)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.6)',
                    boxShadow: '0 18px 40px rgba(33,150,243,0.2)',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '18px 24px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0.9,
                    fontWeight: 400
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={500}>
            <TextField
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.4)',
                    boxShadow: '0 15px 35px rgba(33,150,243,0.15)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.6)',
                    boxShadow: '0 18px 40px rgba(33,150,243,0.2)',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '18px 24px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0.9,
                    fontWeight: 400
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={600}>
            <TextField
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              error={!!errors.phone}
              helperText={errors.phone}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.4)',
                    boxShadow: '0 15px 35px rgba(33,150,243,0.15)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.6)',
                    boxShadow: '0 18px 40px rgba(33,150,243,0.2)',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '18px 24px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0.9,
                    fontWeight: 400
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={700}>
            <TextField
              fullWidth
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              error={!!errors.company}
              helperText={errors.company}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.4)',
                    boxShadow: '0 15px 35px rgba(33,150,243,0.15)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.6)',
                    boxShadow: '0 18px 40px rgba(33,150,243,0.2)',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '18px 24px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0.9,
                    fontWeight: 400
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={800}>
            <TextField
              fullWidth
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="Services You Are Interested In"
              error={!!errors.services}
              helperText={errors.services}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.4)',
                    boxShadow: '0 15px 35px rgba(33,150,243,0.15)',
                    transform: 'translateY(-2px)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.6)',
                    boxShadow: '0 18px 40px rgba(33,150,243,0.2)',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '18px 24px',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&::placeholder': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0.9,
                    fontWeight: 400
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={900}>
            <TextField
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              multiline
              rows={4}
              error={!!errors.message}
              helperText={errors.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  transition: 'all 0.3s ease-in-out',
                  border: '2px solid transparent',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.3)',
                    boxShadow: '0 10px 30px rgba(33,150,243,0.1)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(33,150,243,0.5)',
                    boxShadow: '0 12px 35px rgba(33,150,243,0.15)'
                  }
                }
              }}
            />
          </AnimatedBox>

          <AnimatedBox isVisible={isVisible} delay={1000}>
            <StyledButton 
              type="submit" 
              variant="contained"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  transition: 'all 0.3s ease-in-out',
                  border: '2px solid transparent',
                  '&:hover': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  },
                  '&.Mui-focused': {
                    backgroundColor: '#fff',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }
                }, mt: 2 }}
            >
              Submit
            </StyledButton>
          </AnimatedBox>
        </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
