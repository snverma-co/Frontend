import { Box, Container, Typography, Breadcrumbs, Link, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactSection } from './ContactSection';
import FindAccountantSection from './FindAccountantSection';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '0 15px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-5px)'
  },
  '& svg': {
    fontSize: '2rem',
    color: '#fff'
  }
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(4),
  boxShadow: '0 10px 30px rgba(0, 97, 255, 0.1)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(0, 97, 255, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 97, 255, 0.1) 0%, rgba(96, 239, 255, 0.05) 100%)',
    opacity: 0,
    transition: 'opacity 0.5s ease'
  },
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 97, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    '&::before': {
      opacity: 1
    },
    '& .contact-icon': {
      transform: 'scale(1.1) rotate(10deg)',
      color: '#0061ff'
    }
  }
}));

const ContactUsPage = () => {
  const [mapLoaded, setMapLoaded] = useState(true);

  return (
    <Box>
      <StyledHeader>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ 
            color: '#fff',
            mb: 2,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '3px 3px 6px rgba(0,0,0,0.25)',
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '2.8rem', sm: '3.2rem', md: '3.8rem' },
            lineHeight: 1.1,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '5px',
              background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.3))',
              borderRadius: '3px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }
          }}>
            Contact Us
          </Typography>
          <Breadcrumbs 
            aria-label="breadcrumb"
            sx={{ 
              '& .MuiBreadcrumbs-separator': { color: '#fff' },
              mb: 4,
              '& .MuiBreadcrumbs-ol': {
                justifyContent: 'center'
              }
            }}
          >
            <Link 
              color="inherit" 
              href="/"
              sx={{ 
                color: '#fff',
                textDecoration: 'none',
                '&:hover': { color: '#fff', textDecoration: 'underline' }
              }}
            >
              Home
            </Link>
            <Typography color="#fff">Contact Us</Typography>
          </Breadcrumbs>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
  <IconCircle component="a" href="tel:+1234567890">
    <PhoneIcon />
  </IconCircle>
  <IconCircle component="a" href="mailto:example@example.com">
    <EmailIcon />
  </IconCircle>
  <IconCircle
    onClick={() => {
      if (navigator.share) {
        navigator
          .share({
            title: 'Check this out!',
            text: 'Here is something interesting',
            url: window.location.href,
          })
          .catch((error) => console.log('Error sharing:', error));
      } else {
        alert('Share not supported on this browser.');
      }
    }}
    sx={{ cursor: 'pointer' }}
  >
    <ShareIcon />
  </IconCircle>
</Box>

        </Container>
      </StyledHeader>

      <FindAccountantSection />

      <Box sx={{ py: 8, background: 'linear-gradient(135deg, rgba(0, 97, 255, 0.05) 0%, rgba(96, 239, 255, 0.05) 100%)', position: 'relative', width: '100%' }}>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '500px', borderRadius: { xs: 0, md: '32px' }, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 97, 255, 0.1)' }}>
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.40908947753534!2d77.18442458700574!3d28.707014499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9f8cb6710d%3A0x7e122acf19e48f5a!2sS%20N%20VERMA%20%26%20CO.!5e0!3m2!1sen!2sin!4v1710582787346!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 'inherit' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onError={() => setMapLoaded(false)}
                  />
                ) : (
                  <Box 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#f5f5f5',
                      p: 3,
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Unable to load map. Please check your internet connection or try again later.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactInfo sx={{ backgroundColor: '#ffffff', borderRadius: { xs: 0, md: '32px' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOnIcon className="contact-icon" sx={{ fontSize: '3rem', color: '#0061ff' }} />
                    <Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Our Location</Typography>
                      <Typography variant="body1" sx={{ color: '#666' }}>
                        H-5, 2nd Floor, Above Yes Bank, Model Town - 3, Delhi - 110009
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <PhoneIcon className="contact-icon" sx={{ fontSize: '3rem', color: '#0061ff' }} />
                    <Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Phone Numbers</Typography>
                      <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        IND: +91-11-48560000
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        USA: +1-646-844-7244
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666' }}>
                        UK: +44-2070480613
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <EmailIcon className="contact-icon" sx={{ fontSize: '3rem', color: '#0061ff' }} />
                    <Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Email Address</Typography>
                      <Typography variant="body1" sx={{ color: '#666' }}>
                        info@snvcas.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ContactInfo>
            </Grid>
          </Grid>
          <ContactSection />
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUsPage;