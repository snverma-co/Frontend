import { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Card, CardContent, CardMedia, Grid, Button, TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContext';
import SearchIcon from '@mui/icons-material/Search';

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  color: '#555',
  '&.Mui-selected': {
    color: '#4CAF50',
  },
}));

const VideoCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
}));

// Sample video data - replace with actual videos
const videoCategories = {
  'Income Tax': [
    { id: 1, title: 'Folder Creation Tutorial', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1ce2BXpHc5b7ggqYDxkt9VqEPyFU0ULWt/preview' },
    { id: 2, title: 'Steps To Prepare ITR', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1wNiYrMQ0hWWknDz2pt2km6cfl82Ek_0V/preview' },
  
    { id: 3, title: 'To Operate Balance sheet in Busy software', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1vF8xbYnw03qQdEJ8M9J0Cx-q4YP2l0X1/preview' },
  
    { id: 4, title: 'Audit Trail Tutorial', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1QXKbv4dYBgJs1l4xycrgEC37uavtfdjQ/preview' },
    { id: 5, title: 'How to download large size 26AS from Traces', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/12KbJ3KHXKHC4Q5Lf-8Io_byzs1NvOJDX/preview' },
    { id: 6, title: 'How to Import Large size 26AS in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/13uq1-0tAtR46ieh3hmA5kuUvZB1D-N_0/preview' },
  
    { id: 7, title: 'How to Import 26AS, AIS & TIS in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1riDD5sZLZS5XLAPSJGDzsS9WnFeHvpFg/preview' },
    { id: 8, title: 'Common mistakes to be avoided in ITR Genius Feeding (For Company and Firms)', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1FNbFVBdBeFGKaZbA_ms0B4ZKClKSerLd/preview' },
    { id: 9, title: 'Basic Information to be feeded mandatorily', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1l2rGy0KX0ffVmc6t8aDw9CeVu2b8hnHy/preview' },
    { id: 10, title: 'How to fill salary details in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1BkSMCGWzXBpz9U2WsWogGxV62ufdMmS9/preview' },
    { id: 11, title: '(Part 1) How to Fill Form 3CA 3CB', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1DEa7NvQSo_Z-HTqDB9ZYROtrt5u8NBUj/preview' },
    { id: 12, title: '(Clause 1 to 11)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1FGjBdRHC6X8iWptVkN3-hhqY_DnAojAP/preview' },
    { id: 13, title: '(Clause 12 to 21)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1fFscbHnt1x33O9_GwhMbS0NdihHCM_qa/preview' },
    { id: 14, title: '(Clause 22 to 27)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1SeacuzyAcqYCjaufhuNy_hmmQr_tr3st/preview' },
    { id: 15, title: '(Clause 28 to 44)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1Et0fTuivKZXMT1soch23_phz11dCJG8v/preview' },
    { id: 16, title: 'How to fill House Property details in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/14Bv8LfPoFxjy0Q5LcP0aNLohRsVxVEhO/preview' },
    { id: 17, title: 'Part 1-Equity Oriented Securities Capital Gain Feeding in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1z1vdpHMgnJI1ei6xpX3BlLgU8k_VD8qT/preview' },
    { id: 18, title: 'How to Generate Self Assessment Challan save on Income Tax Portal', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'https://drive.google.com/file/d/1npf04btDyaN27agFVCR39BXWqB4Kv77Q/preview' },


  ],
  'GST': [
    { id: 1, title: 'How to File GSTR-1', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1dbpDbF8JjR1MbelQVjuIAjYIs_Z11i4v/preview' },
    { id: 2, title: 'GST Registration (Part-1)', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1d1MJsNtuA3JKADramS0yusjX_SnpG9yK/preview.mp4' },
    { id: 3, title: 'How to Generate JSON file for GSTR-1 (In Case of Busy Software)', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1Jew5WueVB8MXsUFbeUZYyTYP8llAetaW/preview' },
    { id: 4, title: 'How to Generate JSON file for GSTR-1 (In Case Data Sent by Client in Excel)', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1yTcHV5iqlFx_gyqf_WyVZI7DIusJeKzW/preview' },
    { id: 5, title: 'How to Create Challan', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1awDP3d611N4wVGsMGQw6Oyt17swwr1MS/preview' },
    { id: 6, title: 'How to file clarification-existing registration', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/14JrO29NUtLDPO2GuwdoLADKjAcpOJ2zl/preview' },
    { id: 7, title: 'How to download GSTR-1 report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1pzNyyWWAbXLwiJ_L_4YpVogFVIpRhYCk/preview' },
    { id: 8, title: 'How to download GSTR-2B report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1NergxeCBIjyomLRs21zS5_CXMllcJyRm/preview' },
    { id: 9, title: 'How to download GSTR-3B report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1X0P_T0ecZUKL77FD2wlBXRUzxXBSWZ51/preview' },
    { id: 10, title: 'How to file DRC-03', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1AG_8j1TRuzLKOhlxeaUjxVytPTaubH0s/preview' },
    { id: 11, title: 'How to file PMT-09', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1b5_O1uK8FAJjfKytxSau057uocD0Ft3J/preview' },
    { id: 12, title: 'How to furnish LUT', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1ratzvNsBZC1kzD9MurTn3LiLW_ZOSdPb/preview' },
    { id: 13, title: 'Amendment_Core fields', thumbnail: '/GSTthubnail.png', videoUrl: 'https://drive.google.com/file/d/1j0MHBaWYUWWedTk0Q1NhmOoBpd8IVlpw/preview' },
   

    
  ],
  'TDS': [
    // { id: 1, title: 'TDS Deduction Rules', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 2, title: 'TDS Return Filing', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9Wideos/gst/How tgXcQ' },
    // { id: 3, title: 'TDS Compliance for Businesses', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ],

'OTHERS': [
    { id: 1, title: 'How to Download PDF Without a password', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://drive.google.com/file/d/1Q00nBVI7ZBcdxRXTV9dGMxYb-JFRq79y/preview' },
    { id: 2, title: 'Busy 21 Software Tutorial', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://drive.google.com/file/d/1VqN4pZODzhLvCsS1A7ybyYybU6KhXjKt/preview' },
    { id: 3, title: 'Import and Export on ICEGATE (Part1)', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://drive.google.com/file/d/1FSuxUcwYR43CCxr4oX9MWcjKhBKJhT5t/preview' },
    { id: 4, title: 'Import and Export on ICEGATE (Part2)', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://drive.google.com/file/d/1mD_ao8-StVHGrG_UhvqV10cp4wa5sf80/view?usp=sharing' },
    { id: 5, title: 'How To Log In and Import On Icegate 2.0', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://drive.google.com/file/d/1PZg4nEky3Z7TceCnjACjJQoGjaxEt1qP/preview' },
   
  ],
};
const VideosPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { logout } = useAuth();
  
  const categories = Object.keys(videoCategories);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    setSelectedVideo(null);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // Scroll to top of the page when a video is selected
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBackToList = () => {
    setSelectedVideo(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter videos based on search term
  const filteredVideos = videoCategories[categories[currentTab]].filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, color: '#333' }}>
            Educational Videos
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={logout}
            sx={{ borderColor: '#8BC34A', color: '#8BC34A' }}
          >
            Sign Out
          </Button>
        </Box>

        {!selectedVideo ? (
          <>
            <Tabs 
              value={currentTab} 
              onChange={handleTabChange} 
              sx={{ 
                mb: 4,
                '& .MuiTabs-indicator': {
                  backgroundColor: '#8BC34A',
                }
              }}
            >
              {categories.map((category, index) => (
                <StyledTab key={index} label={category} />
              ))}
            </Tabs>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search videos by title..."
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ mb: 4 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {filteredVideos.length === 0 ? (
              <Typography variant="h6" sx={{ textAlign: 'center', my: 4, color: '#666' }}>
                No videos found matching your search.
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {filteredVideos.map((video) => (
                  <Grid item xs={12} sm={6} md={4} key={video.id}>
                    <VideoCard>
                      <CardMedia
                        component="img"
                        height="180"
                        image={video.thumbnail}
                        alt={video.title}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => handleVideoSelect(video)}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                          {video.title}
                        </Typography>
                        <Button 
                          variant="contained" 
                          sx={{ 
                            mt: 2, 
                            bgcolor: '#8BC34A',
                            '&:hover': {
                              bgcolor: '#689F38'
                            }
                          }}
                          onClick={() => handleVideoSelect(video)}
                        >
                          Watch Video
                        </Button>
                      </CardContent>
                    </VideoCard>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        ) : (
          <Box>
            <Button 
              variant="outlined" 
              sx={{ mb: 3, borderColor: '#8BC34A', color: '#8BC34A' }}
              onClick={handleBackToList}
            >
              Back to Videos
            </Button>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              {selectedVideo.title}
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 3 }}>
              <iframe
                src={selectedVideo.videoUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default VideosPage;