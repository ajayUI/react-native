// src/services/serpApiService.ts
import axios from 'axios';

const SERP_API_KEY = '9c61a7eedb765deb743a22d76b46f8193ddd4160ed462c36c1e5447fb3c70cfd';
const SERP_API_ENDPOINT = 'https://serpapi.com/search'; // Removed extra spaces and corrected URL

const infoSearchSerpApiService = {
  search: async (query: string) => { // Added type annotation for 'query'
    try {
      const response = await axios.get(SERP_API_ENDPOINT, {
        params: {
          q: query,
          api_key: SERP_API_KEY,
          engine: 'google', // You can change the engine if needed
          // Add any other parameters you need for the search
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  },
};

export default infoSearchSerpApiService;
