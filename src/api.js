import axios from 'axios';

// Si existe la variable de entorno la usa, de lo contrario apunta directamente al backend de Render
const API_URL = import.meta.env.VITE_API_URL || 'https://cafeteria-back-end.onrender.com';

export const api = axios.create({
  baseURL: API_URL
});