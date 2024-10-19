// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><Link to="/" style={styles.link}>Inicio</Link></li>
                <li style={styles.li}><Link to="/samples" style={styles.link}>Muestras</Link></li>
                <li style={styles.li}><Link to="/charts" style={styles.link}>Gráficos</Link></li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        backgroundColor: '#2c3e50',
        padding: '10px',
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    li: {
        margin: '0 10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
