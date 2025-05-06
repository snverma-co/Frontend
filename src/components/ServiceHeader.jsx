import { Box, Container, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const ServiceHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '400px',
        position: 'relative',
        backgroundImage: 'linear-gradient(135deg, rgba(75, 0, 130, 0.85), rgba(76, 175, 80, 0.85)), url(/testimonials-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        mb: 4,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40px',
          background: 'linear-gradient(to top left, #fff 50%, transparent 50%)'
        }
      }}
    >
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            mb: 2,
            '& .MuiBreadcrumbs-separator': { color: 'white' },
            '& .MuiLink-root': { color: 'white', textDecoration: 'none' }
          }}
        >
          <Link component={RouterLink} to="/">Home</Link>
          <Typography color="white">{title}</Typography>
        </Breadcrumbs>
        
        <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          {title}
        </Typography>
        
        <Button
          variant="contained"
          onClick={() => {
            navigate('/contact');
            window.scrollTo(0, 0);
          }}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45a049' },
            borderRadius: '25px',
            px: 4
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default ServiceHeader;