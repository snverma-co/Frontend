import axios from 'axios';

const NEWS_API_KEY = '054c906f42244f30ac32cd97a7edff27';
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

export const fetchFinancialNews = async () => {
  try {
    const response = await axios.get(
      `${NEWS_API_BASE_URL}/everything?q=(finance OR accounting OR GST OR VAT OR "chartered accountant")&language=en&sortBy=publishedAt&pageSize=10`,
      {
        headers: {
          'X-Api-Key': NEWS_API_KEY,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0'
        }
      }
    );

    if (!response.data) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.articles.map(article => ({
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