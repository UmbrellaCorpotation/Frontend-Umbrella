// src/components/ChartComponent.jsx
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

    useEffect(() => {
        graficoService.getAllGraficos()
            .then(response => {
                const data = response.data;
                if (data.length === 0) {
                    setChartData(null);
                    return;
                }

                const datosProcesados = data[0].datosProcesados;
                const labels = Object.keys(datosProcesados);
                const values = Object.values(datosProcesados);

                const formattedData = {
                    labels,
                    datasets: [
                        {
                            label: 'Datos Procesados',
                            data: values,
                            backgroundColor: [
                                'rgba(75,192,192,0.6)',
                                'rgba(153,102,255,0.6)',
                                'rgba(255,159,64,0.6)',
                                'rgba(255,99,132,0.6)',
                                'rgba(54,162,235,0.6)',
                                'rgba(255,206,86,0.6)',
                                'rgba(75,192,192,0.6)',
                            ],
                            borderColor: [
                                'rgba(75,192,192,1)',
                                'rgba(153,102,255,1)',
                                'rgba(255,159,64,1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                };

                setChartData(formattedData);
            })
            .catch(error => {
                console.error('Error al obtener los gráficos:', error);
            });
    }, []);

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
            <div style={styles.controls}>
                <label htmlFor="chartType" style={styles.label}>Tipo de Gráfico:</label>
                <select id="chartType" value={chartType} onChange={handleChartTypeChange} style={styles.select}>
                    <option value="bar">Barra</option>
                    <option value="pie">Circular</option>
                    <option value="line">Línea</option>
                </select>
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
    controls: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    label: {
        marginRight: '10px',
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
