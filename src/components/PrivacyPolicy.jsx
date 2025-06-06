import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { ContactSection } from './ContactSection';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(135deg, #0072bc 0%, #00a0e3 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '300px',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  '& h3': {
    color: '#0072bc',
    marginBottom: theme.spacing(2)
  }
}));

const PrivacyPolicy = () => {
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
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            lineHeight: 1.1
          }}>
            Privacy Policy
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
            <Typography color="#fff">Privacy Policy</Typography>
          </Breadcrumbs>
        </Container>
      </StyledHeader>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Section>
          <Typography variant="h3" gutterBottom>Introduction</Typography>
          <Typography paragraph>
            S N VERMA & CO. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>Information We Collect</Typography>
          <Typography paragraph>
            We collect information that you voluntarily provide to us when you:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
            <li>Contact us through email or phone</li>
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>How We Use Your Information</Typography>
          <Typography paragraph>
            The information we collect is used to:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and marketing communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>Information Security</Typography>
          <Typography paragraph>
            We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>Third-Party Services</Typography>
          <Typography paragraph>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>Your Rights</Typography>
          <Typography paragraph>
            You have the right to:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </Typography>
        </Section>

        <Section>
          <Typography variant="h3" gutterBottom>Contact Us</Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy or our practices, please contact us at:
          </Typography>
          <Typography paragraph>
            Email: info@snvcas.com<br />
            Phone: +91 9811156389<br />
            Address: H-5, 2nd Floor, Above Yes Bank, Model Town 3, New Delhi - 110009
          </Typography>
        </Section>

        <Section sx={{ mb: 0 }}>
          <Typography variant="h3" gutterBottom>Updates to This Policy</Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          </Typography>
          <Typography paragraph sx={{ fontStyle: 'italic', mt: 4 }}>
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
        </Section>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default PrivacyPolicy;
