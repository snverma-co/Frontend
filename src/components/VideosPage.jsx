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
    // { id: 1, title: 'Folder Creation Tutorial', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Folder Creation Tutorial.mp4' },
    // { id: 2, title: 'Steps To Prepare ITR', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Steps To Prepare ITR.mp4' },
    // { id: 3, title: 'Busy 21 Software Tutorial', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Busy 21 Software Tutorial.mp4' },
    // { id: 4, title: 'To Operate Balance sheet in Busy software', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/To Operate Balance sheet in Busy software.mp4' },
    // { id: 5, title: 'Import and Export on ICEGATE (Part1)', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Import and Export on ICEGATE (Part1).mp4' },
    // { id: 6, title: 'Import and Export on ICEGATE (Part2)', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Import and Export on ICEGATE (Part2).mp4' },
    // { id: 7, title: 'Audit Trail Tutorial', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Audit Trail Tutorial.mp4' },
    // { id: 8, title: 'How to download large size 26AS from Traces', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How to download large size 26AS from Traces.mp4' },
    // { id: 9, title: 'How to Import Large size 26AS in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How to Import Large size 26AS in Genius.mp4' },
    // { id: 10, title: 'How To Log In and Import On Icegate 2.0', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How To Log In and Import On Icegate 2.0.mp4' },
    // { id: 11, title: 'How to Import 26AS, AIS & TIS in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How to Import 26AS, AIS & TIS in Genius.mp4' },
    // { id: 12, title: 'Common mistakes to be avoided in ITR Genius Feeding (For Company and Firms)', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/13. Common mistakes to be avoided in ITR Genius Feeding (For Company and Firms).mp4' },
    // { id: 13, title: 'Basic Information to be feeded mandatorily', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Basic Information to be feeded mandatorily.mp4' },
    // { id: 14, title: 'How to fill salary details in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How to fill salary details in Genius.mp4' },
    // { id: 15, title: '(Part 1) How to Fill Form 3CA 3CB', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/(Part 1) How to Fill Form 3CA 3CB.mp4' },
    // { id: 16, title: '(Clause 1 to 11)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/(Clause 1 to 11)How to Fill Form 3CD.mp4' },
    // { id: 17, title: '(Clause 12 to 21)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/(Clause 12 to 21)How to Fill Form 3CD.mp4' },
    // { id: 18, title: '(Clause 22 to 27)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/(Clause 22 to 27)How to Fill Form 3CD.mp4' },
    // { id: 19, title: '(Clause 28 to 44)How to Fill Form 3CD', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/(Clause 28 to 44)How to Fill Form 3CD.mp4' },
    // { id: 20, title: 'How to fill House Property details in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/How to fill House Property details in Genius.mp4' },
    // { id: 21, title: 'Part 1-Equity Oriented Securities Capital Gain Feeding in Genius', thumbnail: '/INCOMETAXTHUMBNAIL.png', videoUrl: 'Videos/income tax/Part 1-Equity Oriented Securities Capital Gain Feeding in Genius.mp4' },


  ],
  'GST': [
    // { id: 1, title: 'How to File GSTR-1', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to File GSTR-1.mp4' },
    // { id: 2, title: 'GST Registration (Part-1)', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/GST Registration (Part-1).mp4' },
    // { id: 3, title: 'How to Generate JSON file for GSTR-1 (In Case of Busy Software)', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to Generate JSON file for GSTR-1 (In Case of Busy Software).mp4' },
    // { id: 4, title: 'How to Generate JSON file for GSTR-1 (In Case Data Sent by Client in Excel)', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to Generate JSON file for GSTR-1 (In Case Data Sent by Client in Excel).mp4' },
    // { id: 5, title: 'How to Create Challan', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to Create Challan.mp4' },
    // { id: 6, title: 'How to file clarification-existing registration', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to file clarification-existing registration.mp4' },
    // { id: 7, title: 'How to download GSTR-1 report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to download GSTR-1 report from cleartax.mp4' },
    // { id: 8, title: 'How to download GSTR-2B report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to download GSTR-2B report from cleartax.mp4' },
    // { id: 9, title: 'How to download GSTR-3B report from cleartax', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to download GSTR-3B report from cleartax.mp4' },
    // { id: 10, title: 'How to file DRC-03', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to file DRC-03.mp4' },
    // { id: 11, title: 'How to file PMT-09', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to file PMT-09.mp4' },
    // { id: 12, title: 'How to furnish LUT', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/How to furnish LUT.mp4' },
    // { id: 13, title: 'Amendment_Core fields', thumbnail: '/GSTthubnail.png', videoUrl: 'Videos/gst/Amendment_Core fields.mp4' },
  ],
  'TDS': [
    // { id: 1, title: 'TDS Deduction Rules', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 2, title: 'TDS Return Filing', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 3, title: 'TDS Compliance for Businesses', thumbnail: '/testimonials-bg.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ],

'OTHERS': [
    // { id: 1, title: 'How to Download PDF Without a password', thumbnail: '/testimonials-bg.jpg', videoUrl: 'Videos/others/How to Download PDF Without a password.mp4' },
   
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