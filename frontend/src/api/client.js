import axios from 'axios';

// When deployed on Vercel, it calls the Vercel serverless function /api/chat
// In local development, if VITE_API_BASE_URL is set (e.g. to http://localhost:8000/api), it uses that.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60000,
});

/**
 * Send a chat message to the Groq AI backend (Vercel Serverless or Laravel).
 * @param {string} message  - The current user message
 * @param {Array}  history  - Array of {role, content} prior turns (optional)
 */
export const sendChatMessage = async (message, history = []) => {
  try {
    const response = await apiClient.post('/chat', { message, history });
    return response.data;
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
};

export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health Check Error:', error);
    throw error;
  }
};

export default apiClient;
