import React from 'react';
import ChartComponent from '../components/Chart';  // Asegúrate de que las rutas sean correctas
import GraficoComponent from '../components/GraficoComponent';  // Asegúrate de que las rutas sean correctas
import ChartActions from '../components/ChartActions';  // Asegúrate de que la ruta sea correcta

function ChartsPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Visualización de Gráficos</h1>
            <ChartActions />  {/* Aquí se agrega ChartActions */}
            <ChartComponent />  {/* Aquí se renderiza ChartComponent */}
            <GraficoComponent />  {/* Aquí se renderiza GraficoComponent */}
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#ecf0f1',
        minHeight: '80vh',
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        color: '#2c3e50',
    },
};

export default ChartsPage;

