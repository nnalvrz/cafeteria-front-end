import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cafeteria-back-end.onrender.com' // Reemplaza con tu URL real de Render
});