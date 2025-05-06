import { Box, Typography, CircularProgress, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchFinancialNews } from '../api/newsApi';

const NewsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  backdropFilter: 'blur(10px)',
  maxHeight: '400px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#4CAF50',
    borderRadius: '4px',
  },
}));

const NewsItem = styled(Box)(({ theme }) => ({
  marginBottom: '15px',
  padding: '10px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  '&:last-child': {
    borderBottom: 'none',
    marginBottom: 0,
  },
}));

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { translations } = useLanguage();

  useEffect(() => {
    const container = document.querySelector('.news-container');
    if (!container || loading || news.length === 0) return;

    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    
    const scroll = () => {
      if (!container.matches(':hover')) {
        setScrollPosition(prev => {
          const newPosition = prev + 0.5;
          if (newPosition > scrollHeight - clientHeight) {
            return 0;
          }
          container.scrollTop = newPosition;
          return newPosition;
        });
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [loading, news]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchFinancialNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress sx={{ color: '#4CAF50' }} />
      </Box>
    );
  }

  return (
    <NewsContainer className="news-container">
      <Typography variant="h6" sx={{ mb: 2, color: '#4CAF50', fontWeight: 600 }}>
        {translations['Latest Updates']}
      </Typography>
      {news.map((item) => (
        <NewsItem key={item.id}>
          <Link href={item.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 0.5, '&:hover': { color: '#4CAF50' } }}>
              {item.title}
            </Typography>
          </Link>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {item.date}
          </Typography>
        </NewsItem>
      ))}
    </NewsContainer>
  );
};

export default NewsSection;