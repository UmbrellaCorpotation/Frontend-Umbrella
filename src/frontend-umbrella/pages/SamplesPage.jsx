import React, { useState } from 'react';
import SampleForm from '../components/SampleForm';
import SampleList from '../components/SampleList';
import SampleActions from '../components/SampleActions';

function SamplesPage() {
    const tipo = 'bioquimico';
    const [refresh, setRefresh] = useState(false);

    const handleSuccess = () => setRefresh(!refresh); // Cambiar estado para refrescar la lista

    return (
        <div>
            <h1>Gestión de Muestras ({tipo})</h1>
            <SampleForm tipo={tipo} onSuccess={handleSuccess} />
            <SampleList tipo={tipo} refresh={refresh} />
            <SampleActions tipo={tipo} />
        </div>
    );
}

export default SamplesPage;
