import { Box, Container, Typography, TextField, Button, Grid, Paper, Breadcrumbs, Link, CircularProgress } from '@mui/material';
import { ContactSection } from './ContactSection';
import { useState, useRef, useEffect } from 'react';
import ThankYou from './ThankYou/ThankYou';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { submitCareerForm } from '../api/formHandlers';

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/testimonials-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  position: 'relative'
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  '& .MuiLink-root': {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '& .MuiTypography-root': {
    color: '#fff'
  }
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '10px 24px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#1565c0'
  }
}));

const StyledForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(-8),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: 1
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '12px 32px',
  borderRadius: '25px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45a049'
  }
}));

// Advanced Loader Component
const AdvancedLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999,
        backdropFilter: 'blur(8px)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 120,
          height: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress
          size={100}
          thickness={4}
          sx={{
            color: '#2196F3',
            position: 'absolute',
            animation: 'pulse 1.5s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { opacity: 1, transform: 'scale(0.8)' },
              '50%': { opacity: 0.5, transform: 'scale(1)' },
              '100%': { opacity: 1, transform: 'scale(0.8)' },
            },
          }}
        />
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: '#21CBF3',
            position: 'absolute',
            animation: 'pulse 1.5s ease-in-out infinite 0.3s',
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          mt: 3,
          fontWeight: 600,
          color: '#333',
          textAlign: 'center',
          animation: 'fadeInOut 2s ease-in-out infinite',
          '@keyframes fadeInOut': {
            '0%': { opacity: 0.5 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.5 },
          },
        }}
      >
        Processing your application...
      </Typography>
    </Box>
  );
};

const CareersPage = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  const thankYouRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    state: '',
    experience: '',
    position: '',
    resume: '',
    captcha: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    state: '',
    experience: '',
    position: '',
    resume: '',
    captcha: '',
    submit: ''
  });

  const [captchaValue, setCaptchaValue] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10)
  });

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
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
    const { name, value, files } = e.target;
    if (name === 'resume' && files) {
      const file = files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes

      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          resume: 'File size must be less than 5MB'
        }));
        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [name]: reader.result
        }));
        setErrors(prev => ({
          ...prev,
          resume: ''
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Add effect to scroll to thank you message when it appears
  useEffect(() => {
    if (showThankYou && thankYouRef.current) {
      // Use setTimeout to ensure the ThankYou component is rendered
      setTimeout(() => {
        thankYouRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [showThankYou]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    const newErrors = {};
    Object.keys(formData).forEach(field => {
      if (field !== 'captcha') {
        newErrors[field] = validateField(field, formData[field]);
      }
    });

    const expectedAnswer = captchaValue.num1 + captchaValue.num2;
    if (Number(formData.captcha) !== expectedAnswer) {
      newErrors.captcha = 'Please enter the correct captcha value';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      setLoading(false); // Stop loader if validation fails
      return;
    }

    try {
      const formDataWithoutCaptcha = { ...formData };
      delete formDataWithoutCaptcha.captcha;
      const response = await submitCareerForm(formDataWithoutCaptcha);

      if (response.success) {
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          designation: '',
          state: '',
          experience: '',
          position: '',
          resume: '',
          captcha: ''
        });
      } else {
        setErrors(prev => ({
          ...prev,
          submit: response.message || 'Failed to submit form. Please try again.'
        }));
      }

      setCaptchaValue({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'An error occurred while submitting the form'
      }));
    } finally {
      setLoading(false); // Stop loader after try/catch
    }
  };

  if (showThankYou) {
    return <div ref={thankYouRef}><ThankYou message="Thank you for your application. We will review it and get back to you soon." /></div>;
  }

  return (
    <Box sx={{ pb: 8 }}>
      {loading && <AdvancedLoader />}

      <StyledHero>
        <Container>
          <Box sx={{ pt: 4 }}>
            <StyledBreadcrumbs aria-label="breadcrumb">
              <Link href="/" color="inherit">Home</Link>
              <Typography>Careers</Typography>
            </StyledBreadcrumbs>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 8
          }}>
            <Box>
              <Typography variant="h2" sx={{
                mb: 2,
                fontWeight: 700,
                fontFamily: '"Playfair Display", serif'
              }}>
                Careers
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Join our team and be part of something extraordinary
              </Typography>
            </Box>
            <ContactButton
              variant="contained"
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
            >
              Contact Us
            </ContactButton>
          </Box>
        </Container>
      </StyledHero>

      <Container maxWidth="md">
        <StyledForm elevation={3}>
          <Typography variant="h4" align="center" sx={{
            mb: 4,
            color: '#333',
            fontWeight: 600,
            fontFamily: '"Playfair Display", serif'
          }}>
            For career opportunities
          </Typography>
          <Typography variant="h5" align="center" sx={{
            mb: 4,
            color: '#666'
          }}>
            Please Fill The Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.designation}
                  helperText={errors.designation}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.state}
                  helperText={errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.experience}
                  helperText={errors.experience}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Position Applied For"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  error={!!errors.position}
                  helperText={errors.position}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  label="Resume"
                  name="resume"
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.resume}
                  helperText={errors.resume}
                />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                  * File size should be below 5MB
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body1">
                    What is {captchaValue.num1} + {captchaValue.num2}?
                  </Typography>
                  <TextField
                    label="Enter Answer"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ width: '150px' }}
                    error={!!errors.captcha}
                    helperText={errors.captcha}
                  />
                </Box>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <Typography color="error" align="center">
                    {errors.submit}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <StyledButton type="submit" variant="contained">
                  Submit
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </StyledForm>
      </Container>

      <ContactSection />
    </Box>
  );
};

export default CareersPage;
