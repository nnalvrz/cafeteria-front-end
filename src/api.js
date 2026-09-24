import axios from 'axios';

// Toma la variable de entorno configurada en Vercel o usa localhost si estás probando en tu máquina
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL
});