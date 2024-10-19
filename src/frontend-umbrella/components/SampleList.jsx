import React, { useState, useEffect } from 'react';
import muestraService from '../services/muestraService';  // Asegúrate de importar el servicio correctamente

const SampleList = () => {
    const [muestras, setMuestras] = useState([]);

    useEffect(() => {
        // Obtener las muestras cuando el componente se monte
        muestraService.getAllMuestras('bioquimico')
            .then(response => {
                setMuestras(response.data);  // Actualizar el estado con las muestras obtenidas
            })
            .catch(error => {
                console.error("Error al obtener las muestras: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Muestras</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {muestras.map((muestra, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <h2>{muestra.nombre}</h2>
                        <p><strong>Categoría:</strong> {muestra.category}</p>
                        <p><strong>Forma de Dosificación:</strong> {muestra.dosageForm}</p>
                        <p><strong>Fuerza:</strong> {muestra.strength}</p>
                        <p><strong>Fabricante:</strong> {muestra.manufacturer}</p>
                        <p><strong>Indicación:</strong> {muestra.indication}</p>
                        <p><strong>Clasificación:</strong> {muestra.classification}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SampleList;
