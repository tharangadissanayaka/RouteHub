import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch all tours
export const getTours = async () => {
    try {
      const response = await axios.get(`${API_URL}/packages`);
      console.log('Tours fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching tours:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

// Add a new tour
export const addTour = async (tourData) => {
  try {
    const response = await axios.post(`${API_URL}/packages`, tourData);
    return response.data;
  } catch (error) {
    console.error('Error adding tour:', error);
    throw error;
  }
};


//Fetch a specific tour by ID
export const getTourById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/packages/${id}`);
        return response.data;
    } catch (error) {
        console.error('❌ Failed to fetch tour:', error);
        throw error;
    }
};

// Update a tour
export const updateTour = async (id, tourData) => {
  try {
    const response = await axios.put(`${API_URL}/packages/${id}`, tourData);
    return response.data;
  } catch (error) {
    console.error('Error updating tour:', error);
    throw error;
  }
};

//Delete a tour by ID
export const deleteTour = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/packages/${id}`);
        console.log("API Response:", response.data);
    } catch (error) {
        console.error('Failed to delete tour:', error);
        throw error;
    }
};
