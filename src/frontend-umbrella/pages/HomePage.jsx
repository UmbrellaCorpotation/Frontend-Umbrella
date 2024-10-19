// src/pages/HomePage.jsx
import React from 'react';
import PropTypes from 'prop-types';

function HomePage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Bienvenido a la Aplicación de Muestras y Gráficos</h1>
            <p style={styles.description}>
                Esta aplicación te permite gestionar tus muestras bioquímicas y visualizar sus datos procesados a través de gráficos interactivos.
            </p>
            <div style={styles.imageContainer}>
                <img
                    src="https://via.placeholder.com/800x400.png?text=Bienvenido"
                    alt="Bienvenido"
                    style={styles.image}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        minHeight: '80vh',
    },
    title: {
        fontSize: '36px',
        marginBottom: '20px',
        color: '#2c3e50',
    },
    description: {
        fontSize: '18px',
        marginBottom: '30px',
        color: '#34495e',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

HomePage.propTypes = {};

export default HomePage;
