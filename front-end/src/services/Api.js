const baseURL = process.env.NODE_ENV === 'production' 
  ? 'http://backend:3000'  // URL no Docker
  : 'http://localhost:3000';  // URL local

const api = axios.create({
    baseURL: baseURL
});

export default api;