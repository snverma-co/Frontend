import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalculateIcon from '@mui/icons-material/Calculate';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';

const services = [
  {
    id: 'audit',
    icon: AssignmentIcon,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit and assurance services to ensure financial integrity and compliance'
  },
  {
    id: 'taxation',
    icon: CalculateIcon,
    title: 'Taxation',
    description: 'Expert tax planning, compliance and advisory services for optimal financial outcomes'
  },
  {
    id: 'regulatory',
    icon: GavelIcon,
    title: 'Regulatory Advisory',
    description: 'Strategic guidance on regulatory compliance and corporate governance'
  },
  {
    id: 'ngo',
    icon: BusinessCenterIcon,
    title: 'NGO / Trust',
    description: 'Specialized services for non-profit organizations and trust management'
  },
  {
    id: 'accounting',
    icon: AccountBalanceIcon,
    title: 'Accounting Advisory',
    description: 'Professional accounting solutions and advisory services for business growth'
  },
  {
    id: 'business',
    icon: DescriptionIcon,
    title: 'Setting up Business in India',
    description: 'Complete assistance in business establishment and registration in India'
  },
  {
    id: 'transaction',
    icon: BusinessCenterIcon,
    title: 'Transaction Advisory',
    description: 'Expert guidance on mergers, acquisitions, and business transactions'
  },
  {
    id: 'consultancy',
    icon: AssignmentIcon,
    title: 'Consultancy',
    description: 'Strategic business consulting for sustainable growth and success'
  }
];

const ServicesSection = () => {
  const { translations } = useLanguage();
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Calculate the width for auto-sliding and center position
  useEffect(() => {
    if (carousel.current) {
      const totalWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
      setWidth(totalWidth);
      // Set initial position to center
      x.set(-totalWidth / 2);
    }
  }, []);

  // Auto-play animation from center
  useEffect(() => {
    let interval;
    if (autoPlay && width > 0) {
      controls.start({
        x: [-width / 2, -width, 0, -width / 2],
        transition: {
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }
      });
    }
    return () => controls.stop();
  }, [autoPlay, controls, width]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      id="services"
      className="services-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 8,
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <Typography
          variant="h2"
          className="service-title animate"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#4B0082',
            mb: 2,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '0.8rem', md: '1.8rem' },
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'all 0.6s ease-out',
            '&.animate': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }}
        >
          {translations['Our Services']}
        </Typography>
        <Typography
          variant="h3"
          className="animate"
          sx={{
            textAlign: 'center',
            color: '#333',
            fontWeight: 'bold',
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '0.1s',
            '&.animate': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }}
        >
          Solutions Tailored to Your Needs, Service Perfected
        </Typography>
        <Typography
          variant="h6"
          className="service-desc animate"
          sx={{
            textAlign: 'center',
            color: '#666',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '0.8rem', md: '1rem' },
            opacity: 0,
            transform: 'translateY(-20px)',
            transition: 'all 0.6s ease-out',
            transitionDelay: '0.2s',
            '&.animate': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }}
        >
          We provide real-world solutions to complex business issues through audit and assurance functions, taxation-international and domestic, startup in India, company formation in India and foreign investment in India etc.
        </Typography>
        <Box
          ref={carousel}
          sx={{
            overflow: 'hidden',
            width: '100%',
            cursor: 'grab'
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            style={{
              x,
              display: 'flex',
              gap: '2rem',
              padding: '1rem'
            }}
            onDragStart={() => setAutoPlay(false)}
            onDragEnd={() => setAutoPlay(true)}
            whileTap={{ cursor: 'grabbing' }}
          >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <Card
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  sx={{
                    minWidth: '300px',
                    width: '300px',
                    height: '350px',
                    background: 'linear-gradient(135deg, #2E3B55 0%, #3F51B5 100%)',
                    color: 'white',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    flexShrink: 0,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #3F51B5 0%, #2E3B55 100%)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                      '& .icon': {
                        transform: 'translateZ(20px) scale(1.2)',
                      },
                      '& .title': {
                        transform: 'translateZ(15px)',
                      },
                      '& .description': {
                        transform: 'translateZ(10px)',
                      }
                    }
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Box>
                      <Icon
                        className="icon"
                        sx={{
                          fontSize: 48,
                          color: 'white',
                          mb: 2,
                          transition: 'transform 0.4s ease-out'
                        }}
                      />
                      <Typography
                        className="title"
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: 'white',
                          mb: 2,
                          transition: 'transform 0.4s ease-out',
                          fontSize: { xs: '1.2rem', sm: '1.4rem' },
                          lineHeight: 1.2,
                          height: '2.4em',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {translations[service.title] || service.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        zIndex: 1,
                        '.MuiCard-root:hover &': {
                          opacity: 1,
                          transform: 'translateY(0)'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        <Button
                          variant="contained"
                          sx={{
                            mt: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: '#2E3B55',
                            position: 'relative',
                            overflow: 'hidden',
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'all 0.3s ease-in-out',
                            cursor: 'pointer',
                            zIndex: 2,
                            '.MuiCard-root:hover &': {
                              opacity: 1,
                              transform: 'translateY(0)'
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 1)',
                              transform: 'scale(1.05)',
                              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.4)',
                              cursor: 'pointer'
                            },
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                              transform: 'translateX(-100%)',
                              transition: 'transform 0.6s'
                            },
                            '&:hover::before': {
                              transform: 'translateX(100%)'
                            }
                          }}
                        >
                          <Link 
                            to={service.id === 'audit' ? '/services' : service.id === 'taxation' ? '/services2' : service.id === 'regulatory' ? '/services3' : service.id === 'transaction' ? '/services4' : service.id === 'ngo' ? '/services5' : service.id === 'accounting' ? '/services6' : service.id === 'business' ? '/services7' : '/services8'} 
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            Explore More
                          </Link>
                        </Button>
                        <Box
                          sx={{
                            mt: 2,
                            width: '40px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #4CAF50, #81C784)',
                            borderRadius: '2px',
                            opacity: 0,
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                            mx: 'auto',
                            '.MuiCard-root:hover &': {
                              opacity: 1,
                              transform: 'scaleX(1)'
                            }
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: -10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #4CAF50, #81C784, #4CAF50)',
                            backgroundSize: '200% 100%',
                            borderRadius: '2px',
                            opacity: 0,
                            pointerEvents: 'none',
                            transition: 'all 0.4s ease-in-out',
                            animation: 'gradientShift 2s linear infinite',
                            '@keyframes gradientShift': {
                              '0%': { backgroundPosition: '0% 50%' },
                              '100%': { backgroundPosition: '200% 50%' }
                            },
                            '.MuiCard-root:hover &': {
                              opacity: 1,
                              width: '80px'
                            }
                          }}
                        />
                        <Box
                          className="particle-container"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40px',
                            overflow: 'hidden',
                            opacity: 0,
                            pointerEvents: 'none',
                            transition: 'opacity 0.3s ease-in-out',
                            '.MuiCard-root:hover &': {
                              opacity: 1
                            }
                          }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <Box
                              key={i}
                              sx={{
                                position: 'absolute',
                                width: '4px',
                                height: '4px',
                                background: '#4CAF50',
                                borderRadius: '50%',
                                left: `${20 * i}%`,
                                animation: `particleFloat${i} 1.5s ease-in-out infinite`,
                                '@keyframes particleFloat0': {
                                  '0%, 100%': { transform: 'translateY(0) scale(1)' },
                                  '50%': { transform: 'translateY(-20px) scale(1.2)' }
                                },
                                '@keyframes particleFloat1': {
                                  '0%, 100%': { transform: 'translateY(-10px) scale(1.1)' },
                                  '50%': { transform: 'translateY(-25px) scale(1.3)' }
                                },
                                '@keyframes particleFloat2': {
                                  '0%, 100%': { transform: 'translateY(-5px) scale(1)' },
                                  '50%': { transform: 'translateY(-15px) scale(1.2)' }
                                },
                                '@keyframes particleFloat3': {
                                  '0%, 100%': { transform: 'translateY(-15px) scale(1.2)' },
                                  '50%': { transform: 'translateY(-30px) scale(1.4)' }
                                },
                                '@keyframes particleFloat4': {
                                  '0%, 100%': { transform: 'translateY(-8px) scale(1.1)' },
                                  '50%': { transform: 'translateY(-22px) scale(1.3)' }
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
            );
          })}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;