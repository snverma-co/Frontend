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
          align="center"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            fontFamily: '"Playfair Display", serif'
          }}
        >
        
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: '1200px', mx: 'auto', flexWrap: 'nowrap', px: 2 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ flex: 1 }}>
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
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: '16px 16px 0 0',
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
              padding: '16px 40px',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(25, 118, 210, 0.25)',
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