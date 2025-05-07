import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchFinancialNews = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/news`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.data || !response.data.articles) {
      throw new Error('Failed to fetch news');
    }

    return response.data.articles.map(article => ({
      id: article.url,
      title: article.title,
      date: new Date(article.publishedAt).toLocaleDateString(),
      url: article.url
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};