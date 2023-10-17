# Invent-APP

Bienvenido a la aplicación INVENT.Invent es una aplicación de Angular que utiliza la API del panel de administración 1.0. Este es el panel de administración para la empresa intermediaria de envíos de mercancías llamada INVENT. Aquí puedes administrar envíos, empresas transportistas y otros aspectos de tu negocio.

## Características Principales

- **Autenticación**: La aplicación solo permite el acceso a usuarios autenticados. Los usuarios pueden ser administradores o trabajadores.

- **Gestión de Listados**:
  - **Tipos de paquete (Solo Lectura)**: Visualiza los tipos de paquetes disponibles.
  - **Empresas transportistas (CRUD)**: Realiza operaciones de creación, lectura, actualización y eliminación de empresas transportistas.
  - **Tipos de trabajadores (Solo Lectura)**: Visualiza los trabajadores de la empresa.
  - **Envíos registrados**: Crea y gestiona envíos proporcionando detalles como dirección de destino, código postal, remitente, destinatario y peso del envío. El sistema elegirá automáticamente la empresa transportista encargada de realizar el envío y calculará el precio del servicio.

## Notas Adicionales

1. La elección de la empresa transportista se basa en los dos primeros dígitos del código postal.
2. La fórmula de cálculo de precio se aplica según la categoría del envío.
3. La categoría del envío se aplica segun el intervalo de kg del paquete.

## Tecnologías Utilizadas

- Angular: La plataforma de desarrollo en la que se basa la aplicación.
- Angular Material: Un conjunto de componentes y directivas de interfaz de usuario para Angular.
- ESLint: Herramienta de análisis de código estático para mantener el código limpio y legible.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de que tienes Node.js y Angular CLI instalados en tu sistema.

## Configuración y Ejecución

Para configurar y ejecutar la aplicación sigue los siguientes pasos:

Clona este repositorio en tu máquina local:

1. Clona este repositorio en tu máquina local.

git clone https://github.com/AyozeJesus/App-Invent.git

2. Navega hasta el directorio raíz del proyecto:

cd App-Invent

3. Instala las dependencias del proyecto.

- npm install

4 Inicia la aplicación:

- npm start

La aplicación estará disponible en http://localhost:4200/.

## Documentación de la API

Para obtener más detalles sobre cómo interactuar con la API de Invent v1.0, consulta la documentación de la API.
