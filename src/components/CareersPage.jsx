import { Box, Container, Typography, TextField, Button, Grid, Paper, Breadcrumbs, Link } from '@mui/material';
import { ContactSection } from './ContactSection';
import { useState } from 'react';
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

const CareersPage = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();
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

  const [captchaValue, setCaptchaValue] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10)
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [name]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expectedAnswer = captchaValue.num1 + captchaValue.num2;
    if (Number(formData.captcha) !== expectedAnswer) {
      alert('Please enter the correct captcha value');
      return;
    }

    try {
      const formDataWithoutCaptcha = { ...formData };
      delete formDataWithoutCaptcha.captcha;
      const response = await submitCareerForm(formDataWithoutCaptcha);

      if (response.success) {
        alert('Form submitted successfully!');
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
        alert(response.message || 'Failed to submit form. Please try again.');
      }

      // Reset captcha
      setCaptchaValue({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <Box sx={{ pb: 8 }}>
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
                />
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
                  />
                </Box>
              </Grid>
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