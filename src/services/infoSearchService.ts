// src/services/serpApiService.ts
import axios from 'axios';

const SERP_API_KEY = 'SECRETKEY';
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
