import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const teamMembers = [
    {
      name: 'S N VERMA',
      role: 'Founder',
      image: '/team-photo.jpg'
    },
    {
      name: 'VIPIN VERMA',
      role: 'Managing Director',
      image: '/team-photo.jpg'
    }
  ];

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      ref={ref}
      sx={{
        py: 8,
        background: '#f5f5f5'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h2}
          variants={itemVariants}
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: 6,
            fontWeight: 'bold',
            fontFamily: '"Playfair Display", serif',
            textAlign: 'center'
          }}
        >
        
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="center" sx={{ maxWidth: '1200px', mx: 'auto', flexWrap: { xs: 'wrap', md: 'nowrap' }, px: { xs: 1, sm: 2 } }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ flex: { xs: '0 0 100%', md: 1 }, mb: { xs: 2, md: 0 } }}>
              <Card
                component={motion.div}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    height: { xs: 300, sm: 350, md: 400 },
                    objectFit: 'cover',
                    borderRadius: { xs: '8px 8px 0 0', md: '16px 16px 0 0' },
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    backgroundColor: 'transparent'
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      fontWeight: 500
                    }}
                  >
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '20px 50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 6px 25px rgba(25, 118, 210, 0.35)',
              transition: 'all 0.3s ease',
              marginTop: '-20px'
            }}
          >
            Meet Our Team
          </motion.button>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;