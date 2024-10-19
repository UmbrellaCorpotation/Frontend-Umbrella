import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChartComponent from '../components/Chart';

function ChartsPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Visualización de Gráficos</h1>
            <ChartComponent />
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

ChartsPage.propTypes = {};

export default ChartsPage;
