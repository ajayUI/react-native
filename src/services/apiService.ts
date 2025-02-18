// src/services/apiService.ts
import axios from 'axios';
import { ImageResult } from '../types';

const API_BASE_URL = 'https://api.unsplash.com';

const apiService = {
  searchImages: async (query: string, clientId: string): Promise<ImageResult[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search/photos`, {
        params: {
          query,
          client_id: clientId,
          per_page: 10,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },
};

export default apiService;
