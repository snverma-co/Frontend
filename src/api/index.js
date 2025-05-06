import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for handling errors
api.interceptors.request.use(
  (config) => {
    // Add any request preprocessing here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle specific error cases
    if (error.response) {
      // Server responded with error status
      if (error.response.status === 426) {
        console.error('API Error: Server requires upgrade. Please check API version compatibility.');
      } else {
        console.error('API Error:', error.response.data);
      }
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error: Unable to reach the server. Please check your connection.');
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;