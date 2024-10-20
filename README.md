
(https://github.com/UmbrellaCorpotation/Frontend-Umbrella.git)

# Frontend del Proyecto de Gestión de Muestras y Gráficos

Este es el **frontend** del proyecto, desarrollado en **React**. Proporciona una interfaz gráfica para gestionar y visualizar muestras bioquímicas y gráficos.

## 1. Funcionalidades Principales

- **Visualización de gráficos**: Ver gráficos en diferentes formatos (barra, circular, línea).
- **Visualización de muestras**: Representación gráfica de las muestras y sus atributos correspondientes
- **Gestión de Muestras**: Crear, editar y eliminar muestras bioquímicas.
- **Gestión de Gráficos**: Crear, editar y eliminar gráficos generados a partir de muestras procesadas.

## 2. Estructura del Proyecto

El frontend se organiza en los siguientes componentes:

### 2.1. Componentes Principales

- **ChartComponent**: Muestra los gráficos en distintos formatos.
- **GraficoComponent**: Lista los gráficos y permite seleccionarlos para visualizar.
- **ChartActions**: Permite realizar acciones CRUD sobre los gráficos.
- **SampleList**: Lista de muestras bioquímicas disponibles.
- **SampleForm**: Formulario para crear o actualizar muestras.

### 2.2. Servicios

- **graficoService**: Servicio que interactúa con la API REST para gestionar los gráficos.
- **muestraService**: Servicio que interactúa con la API REST para gestionar las muestras.

## 3. Componentes
### 4.1. ChartComponent
Este componente es responsable de renderizar los gráficos utilizando Chart.js. Los gráficos pueden mostrarse en formato de barra, línea o circular, según la selección del usuario.

### 4.2. GraficoComponent
Este componente lista los gráficos obtenidos desde el backend y permite la selección de uno para su visualización.

### 4.3. ChartActions
Proporciona un conjunto de botones y formularios para crear, actualizar y eliminar gráficos desde el frontend.

### 4.4. SampleList y SampleForm
Componentes dedicados a la gestión de muestras bioquímicas, permitiendo su creación, edición y visualización en forma de lista.
