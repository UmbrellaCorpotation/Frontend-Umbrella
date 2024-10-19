import React, { useEffect, useState } from 'react';
import graficoService from '../services/graficoService';

function GraficoComponent() {
    const [graficos, setGraficos] = useState([]);

    useEffect(() => {
        graficoService.getAllGraficos()
            .then(response => setGraficos(response.data))
            .catch(error => console.error('Error al obtener los gráficos:', error));
    }, []);

    if (!graficos.length) {
        return <p>No hay gráficos disponibles.</p>;
    }

    return (
        <div>
            <h2>Gráficos</h2>
            <ul>
                {graficos.map(grafico => (
                    <li key={grafico.id}>
                        Gráfico {grafico.id}: {Object.keys(grafico.datosProcesados).join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GraficoComponent;

