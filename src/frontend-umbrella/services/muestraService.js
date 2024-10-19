import axios from 'axios';

// Asegúrate de que la URL del backend está correcta
const API_URL = 'http://localhost:8080/api/muestra';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const muestraService = {
    // Obtener una muestra específica por su ID
    getMuestra: (id) => api.get(`/${id}`),

    // Crear una nueva muestra del tipo especificado con los datos proporcionados
    createMuestra: (tipo, data) => api.post(`/${tipo}`, data),

    // Actualizar una muestra existente con ID y tipo especificado
    updateMuestra: (id, tipo, data) => api.put(`/${id}/${tipo}`, data),

    // Eliminar una muestra existente por su ID y tipo
    deleteMuestra: (id, tipo) => api.delete(`/${id}/${tipo}`),

    // Crear múltiples muestras a la vez (lote) para el tipo especificado
    createMuestrasBatch: (tipo, data) => api.post(`/batch/${tipo}`, data),

    // Procesar y agrupar las muestras
    procesarYAgruparMuestras: () => api.post('/procesar'),

    // Obtener todas las muestras de un tipo especificado
    getAllMuestras: (tipo) => api.get(`/${tipo}/all`)
};

export default muestraService;

