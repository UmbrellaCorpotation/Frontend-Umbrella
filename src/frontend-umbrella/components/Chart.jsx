import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import graficoService from '../services/graficoService';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

function ChartComponent() {
    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState('bar');
    const [graficos, setGraficos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        graficoService.getAllGraficos()
            .then(response => {
                const data = response.data;
                setGraficos(data.slice(0, 9)); // Mostrar solo los primeros 9 gráficos
                if (data.length > 0) {
                    procesarGrafico(data[0]);
                }
            })
            .catch(error => {
                console.error('Error al obtener los gráficos:', error);
            });
    }, []);

    const procesarGrafico = (grafico) => {
        if (!grafico || !grafico.datosProcesados) return;

        const labels = Object.keys(grafico.datosProcesados);
        const values = Object.values(grafico.datosProcesados);

        const formattedData = {
            labels,
            datasets: [
                {
                    label: `Gráfico: ${grafico.id}`,
                    data: values,
                    backgroundColor: 'rgba(75,192,192,0.6)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };

        setChartData(formattedData);
    };

    const handleGraficoChange = (e) => {
        const selectedGrafico = graficos.find(g => g.id === parseInt(e.target.value, 10));
        procesarGrafico(selectedGrafico);
    };

    const handleChartTypeChange = (e) => {
        setChartType(e.target.value);
    };

    const renderChart = () => {
        if (!chartData) {
            return <p style={styles.noData}>Cargando datos del gráfico...</p>;
        }

        switch (chartType) {
            case 'pie':
                return <Pie data={chartData} options={chartOptions} />;
            case 'line':
                return <Line data={chartData} options={chartOptions} />;
            case 'bar':
            default:
                return <Bar data={chartData} options={chartOptions} />;
        }
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Datos Procesados' },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.controlsContainer}>
                <div style={styles.control}>
                    <label htmlFor="graficoSelect" style={styles.label}>Seleccionar Gráfico:</label>
                    <select id="graficoSelect" onChange={handleGraficoChange} style={styles.select}>
                        {graficos.map(grafico => (
                            <option key={grafico.id} value={grafico.id}>
                                {`Gráfico ${grafico.id}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={styles.control}>
                    <label htmlFor="chartType" style={styles.label}>Tipo de Gráfico:</label>
                    <select id="chartType" value={chartType} onChange={handleChartTypeChange} style={styles.select}>
                        <option value="bar">Barra</option>
                        <option value="pie">Circular</option>
                        <option value="line">Línea</option>
                    </select>
                </div>
            </div>

            <div style={styles.chart}>
                {renderChart()}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    controlsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    control: {
        flex: 1,
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '250px',
    },
    label: {
        marginBottom: '5px',
        fontSize: '16px',
        color: '#2c3e50',
    },
    select: {
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #bdc3c7',
    },
    chart: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    noData: {
        fontSize: '18px',
        textAlign: 'center',
        marginTop: '20px',
        color: '#7f8c8d',
    },
};

export default ChartComponent;
