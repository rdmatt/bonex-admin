import axios from 'axios';

const API_URL = 'https://bonex-backend-production.up.railway.app/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAdmin = async (email, senha) => {
  // Por enquanto, usa login de comerciante (depois criamos admin separado)
  const response = await api.post('/comerciantes/login', { email, senha });
  if (response.data.token) {
    localStorage.setItem('admin_token', response.data.token);
  }
  return response.data;
};

export const getEntregas = async () => {
  const response = await api.get('/entregas');
  return response.data;
};

export const getComerciantes = async () => {
  // Endpoint não existe ainda, mock por enquanto
  return [];
};

export const getEntregadores = async () => {
  // Endpoint não existe ainda, mock por enquanto
  return [];
};

export const getTiposBag = async () => {
  const response = await api.get('/entregas/tipos/bag');
  return response.data.tipos;
};

export default api;