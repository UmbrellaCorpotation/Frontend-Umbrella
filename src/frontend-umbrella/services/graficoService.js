import axios from 'axios';

const API_URL = 'http://localhost:8080/api/graficos';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const graficoService = {
    getGrafico: (id) => api.get(`/${id}`),
    createGrafico: (data) => api.post('/', data),
    updateGrafico: (id, data) => api.put(`/${id}`, data),
    deleteGrafico: (id) => api.delete(`/${id}`),
    getAllGraficos: () => api.get('/'),
    procesarGraficos: () => api.post('/procesar')
};

export default graficoService;
