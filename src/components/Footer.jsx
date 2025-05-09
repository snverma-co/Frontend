import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#0072bc',
  color: '#fff',
  padding: theme.spacing(8, 0, 4),
  position: 'relative',
  backgroundImage: 'linear-gradient(135deg, #0072bc 0%, #00a0e3 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: '#fff',
    opacity: 0.2
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '12px',
  '&:hover': {
    color: '#fff',
    transform: 'translateY(-3px) scale(1.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
  },
  '& svg': {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'rotate(360deg)'
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1.5),
  fontSize: '0.95rem',
  fontWeight: 500,
  position: 'relative',
  '&:hover': {
    color: '#fff',
    paddingLeft: theme.spacing(1.5),
    opacity: 0.8,
    '& svg': {
      color: '#fff',
      transform: 'scale(1.2)'
    }
  },
  '& svg': {
    transition: 'all 0.3s ease',
    marginRight: theme.spacing(1.5),
    color: 'rgba(255, 255, 255, 0.8)'
  }
}));

const Footer = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
              S N VERMA & CO.
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 3, 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: 1.8,
              fontSize: '1rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              We are prominent Chartered Accountants in India offering comprehensive accounting and financial services.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIconButton component="a" href="#" target="_blank">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton component="a" href="#" target="_blank">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton component="a" href="#" target="_blank">
                <LinkedInIcon />
              </SocialIconButton>
              <SocialIconButton component="a" href="#" target="_blank">
                <YouTubeIcon />
              </SocialIconButton>
              <SocialIconButton component="a" href="#" target="_blank">
                <InstagramIcon />
              </SocialIconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 600,
              fontSize: '1.2rem',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Contact Information
            </Typography>
            <FooterLink href="#">
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              H-5, 2nd Floor, Above Yes Bank, Model Town 3, New Delhi - 110009
            </FooterLink>
            <FooterLink href="tel:+911148560000">
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              IND: +91-11-48560000
            </FooterLink>
            <FooterLink href="tel:+16468447244">
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              USA: +1-646-844-7244
            </FooterLink>
            <FooterLink href="tel:+442070480613">
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              UK: +44-2070480613
            </FooterLink>
            <FooterLink href="tel:+78001009689">
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              Russia: +7(800)100-96-89
            </FooterLink>
            <FooterLink href="mailto:info@snvcas.com">
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              info@snvcas.com
            </FooterLink>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 600,
              fontSize: '1.2rem',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Quick Links
            </Typography>
            <FooterLink onClick={() => { navigate('/'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Home</FooterLink>
            <FooterLink onClick={() => { navigate('/company'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>About Us</FooterLink>
            <FooterLink onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Services</FooterLink>
            <FooterLink onClick={() => { navigate('/careers'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Careers</FooterLink>
            <FooterLink onClick={() => { navigate('/knowledge'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Knowledge & Events</FooterLink>
            <FooterLink onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Contact Us</FooterLink>
            <FooterLink onClick={() => { navigate('/terms'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Terms & Conditions</FooterLink>
            <FooterLink onClick={() => { navigate('/privacy'); window.scrollTo(0, 0); }} sx={{ cursor: 'pointer' }}>Privacy Policy</FooterLink>
          </Grid>
        </Grid>

        <Box sx={{ 
          mt: 8, 
          pt: 3, 
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)'
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500, letterSpacing: '0.5px' }}>
            © {new Date().getFullYear()} S N VERMA & CO. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;