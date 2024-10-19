// src/pages/NotFoundPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Página No Encontrada</h1>
            <p style={styles.description}>
                La página que estás buscando no existe. Regresa al <Link to="/" style={styles.link}>inicio</Link>.
            </p>
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
        color: '#e74c3c',
    },
    description: {
        fontSize: '18px',
        color: '#34495e',
    },
    link: {
        color: '#2980b9',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
