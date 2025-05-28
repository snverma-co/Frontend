import { Box, Container, Typography, Button, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Removed PlayArrowIcon
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageContainer = styled(Box, { // Renamed from VideoThumbnail for clarity
  shouldComponentUpdate: (props) => true,
})(({ theme, isVisible = false, ...props }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // Maintains 16:9 aspect ratio
  backgroundColor: '#e0e0e0', // Placeholder background for images
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  // cursor: 'pointer', // Removed cursor pointer as it's not a video
  transform: `translateX(${isVisible ? '0' : '-100%'})`,
  opacity: isVisible ? 1 : 0,
  transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-in',
  // '&:hover .playButton': { // Removed hover effect for play button
  //   transform: 'translate(-50%, -50%) scale(1.1)'
  // }
  marginBottom: theme.spacing(2), // Add some margin between stacked images
}));

// Removed PlayButton styled component
// const PlayButton = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '80px',
//   height: '80px',
//   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//   borderRadius: '50%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   transition: 'transform 0.3s ease',
//   '& svg': {
//     fontSize: '40px',
//     color: '#4CAF50'
//   }
// }));

const ContentBox = styled(Box, {
  shouldComponentUpdate: (props) => true,
})(({ theme, isVisible = false, ...props }) => ({
  transform: `translateX(${isVisible ? '0' : '100%'})`,
  opacity: isVisible ? 1 : 0,
  transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s ease-in',
  willChange: 'transform, opacity'
}));


const AboutSection = () => {
  const { translations, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);
  const expandedContentRef = useRef(null); // Ref for the expanded content
  const navigate = useNavigate();

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

  const toggleReadMore = () => {
    const currentlyCollapsing = showMore; // True if we are about to collapse
    setShowMore(!showMore);

    if (!currentlyCollapsing) { // If expanding (showMore will be true AFTER setShowMore)
      // Scroll to the start of the expanded content after a short delay for rendering
      setTimeout(() => {
        expandedContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300); // Adjust delay as needed for Collapse transition
    } else {
      // If collapsing, scroll to the top of the sectionRef (the whole About section)
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <Box ref={sectionRef} sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'center'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {showMore && (
              <>
                <ImageContainer isVisible={isVisible} sx={{ mb: 2 }}>
                  <Box
                    component="img"
                    src="/Corporate-Interior-Design-Creating-Spaces-That-Inspire.jpeg" // Placeholder
                    alt="Additional Image 1"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </ImageContainer>
                <ImageContainer isVisible={isVisible} sx={{ mb: 2 }}>
                  <Box
                    component="img"
                    src="/shutterstock_1718050765-min-scaled.jpg" // Placeholder
                    alt="Additional Image 2"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </ImageContainer>
              </>
            )}
            <ImageContainer isVisible={isVisible}>
              <Box
                component="img"
                src="/premium_photo-1683120730432-b5ea74bd9047.jpeg"
                // Existing image, formerly video thumbnail
                alt="Main Company Image"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Removed PlayButton */}
            </ImageContainer>
            {showMore && (
              <ImageContainer isVisible={isVisible} sx={{ mt: 2 }}>
                <Box
                  component="img"
                  src="/360_F_294692075_lHznNpWRsFYNvyjCt5QNElzU8vddCOao.jpg" // Placeholder
                  alt="Additional Image 3"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </ImageContainer>
            )}
          </Box>

          <ContentBox isVisible={isVisible} sx={{ textAlign: isRTL ? 'right' : 'left' }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#4CAF50',
                fontWeight: 600,
                mb: 2
              }}
            >
              SERVING OUR VALUED CLIENTS FOR MORE THAN 55+ YEARS
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              S N VERMA & Co.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#666',
                mb: 3,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              {translations['Your Trusted Partner in Financial Excellence Since 1970']}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 4,
                lineHeight: 1.8
              }}
            >
              For over 55 years, S N Verma & Co., a premier Chartered Accountant firm, has been a beacon of trust, expertise, and innovation in the financial and taxation landscape. Established in 1970, we have built an enduring legacy of delivering tailored, high-quality solutions to businesses, individuals, and organizations across diverse sectors. Our commitment to excellence and client-centric approach has made us a preferred partner for navigating the complexities of finance and compliance.
            </Typography>

            {!showMore && (
              <Button onClick={toggleReadMore} variant="contained" sx={{ mt: 2, mb: 2, backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#388E3C' } }}>
                {translations['Read More'] || 'Read More'}
              </Button>
            )}

            <Collapse in={showMore} timeout="auto" unmountOnExit>
              <Box ref={expandedContentRef} sx={{ mt: showMore ? 4 : 0 }}> {/* Added ref here */}
                <Typography
                  variant="h6"
                  sx={{
                    color: '#333',
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: '"Playfair Display", serif'
                  }}
                >
                  Our Expertise
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 2,
                    lineHeight: 1.8
                  }}
                >
                  At S N Verma & Co., we offer a comprehensive suite of services backed by decades of experience and a deep understanding of evolving regulations. Our areas of expertise include:
                </Typography>
                
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#666' }}>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Direct & Indirect Taxation:</strong> Strategic solutions for tax optimization and compliance.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Audit & Assurance:</strong> Reliable services ensuring financial integrity and transparency.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Business Advisory:</strong> Expert guidance for growth, strategy, and operational efficiency.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Corporate Law & Compliance:</strong> Navigating legal frameworks with precision and care.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>GST & Indirect Taxes:</strong> Comprehensive support for Goods and Services Tax matters.
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#333',
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: '"Playfair Display", serif'
                  }}
                >
                 Why Choose S.N. Verma & Co.?
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#666' }}>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Legacy of Trust:</strong> Over five decades of proven excellence in financial services.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Expert Team:</strong> A dedicated group of seasoned professionals with in-depth knowledge across domains.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Strong Network:</strong> Collaborations with top professionals in legal, financial, and regulatory fields to provide holistic solutions.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Client-Centric Approach:</strong> Tailored strategies to meet your unique needs, ensuring peace of mind and sustainable growth.
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    <strong>Innovative Solutions:</strong> Leveraging cutting-edge tools and insights to stay ahead in a dynamic financial world.
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 2,
                    lineHeight: 1.8
                  }}
                >
                 Whether you’re a startup seeking robust financial foundations, an established business navigating complex tax regimes, or an individual planning for wealth creation, S N Verma & Co. is your trusted partner. We combine experience, precision, and innovation to empower your financial journey.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 2,
                    lineHeight: 1.8
                  }}
                >
                 Let’s Build Your Success Together
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 2,
                    lineHeight: 1.8
                  }}
                >
                 <strong>S.N. Verma & Co.</strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 2,
                    lineHeight: 1.8
                  }}
                >
                <strong> – where expertise meets trust, and your success is our priority.</strong>
                </Typography>
                <Button onClick={toggleReadMore} variant="contained" sx={{ mt: 2, backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#388E3C' } }}>
                  {translations['Read Less'] || 'Read Less'}
                </Button>
              </Box>
            </Collapse>
          </ContentBox>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;