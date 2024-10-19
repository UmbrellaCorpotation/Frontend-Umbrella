import React from 'react';
import muestraService from '../services/muestraService';

function SampleActions({ id, tipo }) {
    const handleUpdate = () => {
        const updatedData = { name: 'Nuevo Nombre', category: 'Nueva Categoría' };
        muestraService.updateMuestra(id, tipo, updatedData)
            .then(() => console.log('Muestra actualizada'))
            .catch(error => console.error('Error al actualizar la muestra:', error));
    };

    const handleDelete = () => {
        muestraService.deleteMuestra(id, tipo)
            .then(() => console.log('Muestra eliminada'))
            .catch(error => console.error('Error al eliminar la muestra:', error));
    };

    const handleBatchCreate = () => {
        const batchData = [
            { name: 'Lote 1', category: 'Lote' },
            { name: 'Lote 2', category: 'Lote' }
        ];
        muestraService.createMuestrasBatch(tipo, batchData)
            .then(() => console.log('Lote de muestras creado'))
            .catch(error => console.error('Error al crear lote de muestras:', error));
    };

    const handleProcess = () => {
        muestraService.procesarYAgruparMuestras()
            .then(() => console.log('Muestras procesadas y agrupadas'))
            .catch(error => console.error('Error al procesar y agrupar muestras:', error));
    };

    return (
        <div>
            <button onClick={handleUpdate}>Actualizar Muestra</button>
            <button onClick={handleDelete}>Eliminar Muestra</button>
            <button onClick={handleBatchCreate}>Crear Muestras en Lote</button>
            <button onClick={handleProcess}>Procesar y Agrupar Muestras</button>
        </div>
    );
}

export default SampleActions;
