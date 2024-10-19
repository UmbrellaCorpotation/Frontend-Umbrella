import React, { useState } from 'react';
import muestraService from '../services/muestraService';

function SampleForm({ tipo, onSuccess }) {
    const [form, setForm] = useState({
        name: '',
        category: '',
        dosageForm: '',
        strength: '',
        manufacturer: '',
        indication: '',
        classification: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        muestraService.createMuestra(tipo, form)
            .then(() => {
                onSuccess(); // refrescar la lista
                setForm({
                    name: '',
                    category: '',
                    dosageForm: '',
                    strength: '',
                    manufacturer: '',
                    indication: '',
                    classification: ''
                });
            })
            .catch(error => console.error('Error al crear muestra:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" />
            <input name="dosageForm" value={form.dosageForm} onChange={handleChange} placeholder="Forma de Dosificación" />
            <input name="strength" value={form.strength} onChange={handleChange} placeholder="Fuerza" />
            <input name="manufacturer" value={form.manufacturer} onChange={handleChange} placeholder="Fabricante" />
            <input name="indication" value={form.indication} onChange={handleChange} placeholder="Indicación" />
            <input name="classification" value={form.classification} onChange={handleChange} placeholder="Clasificación" />
            <button type="submit">Crear Muestra</button>
        </form>
    );
}

export default SampleForm;
