// src/components/ChartActions.jsx
import React, { useState } from 'react';
import graficoService from '../services/graficoService';

function ChartActions() {
    const [graficoId, setGraficoId] = useState('');
    const [graficoData, setGraficoData] = useState({
        datosProcesados: {},
        grupoMuestrasId: null,
    });

    const handleCreateGrafico = () => {
        graficoService.createGrafico(graficoData)
            .then(response => {
                alert(`Gráfico creado con ID: ${response.data}`);
                setGraficoData({ datosProcesados: {}, grupoMuestrasId: null });
            })
            .catch(error => {
                console.error('Error al crear el gráfico:', error);
            });
    };

    const handleUpdateGrafico = () => {
        if (!graficoId) {
            alert('Proporcione el ID del gráfico que desea actualizar.');
            return;
        }
        graficoService.updateGrafico(graficoId, graficoData)
            .then(() => {
                alert(`Gráfico ${graficoId} actualizado correctamente.`);
            })
            .catch(error => {
                console.error('Error al actualizar el gráfico:', error);
            });
    };

    const handleDeleteGrafico = () => {
        if (!graficoId) {
            alert('Proporcione el ID del gráfico que desea eliminar.');
            return;
        }
        graficoService.deleteGrafico(graficoId)
            .then(() => {
                alert(`Gráfico ${graficoId} eliminado correctamente.`);
            })
            .catch(error => {
                console.error('Error al eliminar el gráfico:', error);
            });
    };

    const handleProcessGraficos = () => {
        graficoService.procesarGraficos()
            .then(() => {
                alert('Los gráficos se están procesando.');
            })
            .catch(error => {
                console.error('Error al procesar los gráficos:', error);
            });
    };

    return (
        <div style={styles.container}>
            <h2>Acciones de Gráficos</h2>
            <div style={styles.actionContainer}>
                <input
                    type="text"
                    placeholder="ID del gráfico"
                    value={graficoId}
                    onChange={e => setGraficoId(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleUpdateGrafico} style={styles.button}>Actualizar Gráfico</button>
                <button onClick={handleDeleteGrafico} style={styles.button}>Eliminar Gráfico</button>
            </div>
            <div style={styles.actionContainer}>
                <button onClick={handleCreateGrafico} style={styles.button}>Crear Gráfico</button>
                <button onClick={handleProcessGraficos} style={styles.button}>Procesar Gráficos</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
    },
    actionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    input: {
        padding: '8px',
        marginRight: '10px',
        borderRadius: '4px',
        border: '1px solid #bdc3c7',
    },
    button: {
        padding: '10px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default ChartActions;
