# Plantilla de Desafío Técnico en React

Este repositorio ofrece una plantilla moderna y minimalista de aplicación React usando Vite y TypeScript. Está diseñada para un desarrollo rápido y para demostrar técnicas escalables de front-end, especialmente en interfaces con muchas imágenes o listas virtualizadas.

## Características

- **React + TypeScript**: Componentes y estructuras de datos fuertemente tipadas.
- **Vite**: Servidor de desarrollo ultra rápido, empaquetado optimizado y recarga en caliente (HMR).
- **Galería de Fotos Virtualizada**: Renderiza eficientemente grandes listas de imágenes desde la [API de Picsum Photos](https://picsum.photos/).
- **Contexto de Autenticación**: Código base para login/logout de usuario y gestión del estado autenticado.
- **ESLint**: Configurado previamente para asegurar calidad de código, con recomendaciones para React, React Hooks y TypeScript.
- **Tailwind CSS**: Utilidades CSS para desarrollo rápido de interfaces (mediante plugin).
- **Cliente Axios**: Cliente HTTP preconfigurado con soporte para autorización basada en tokens.

## Primeros Pasos

### Requisitos Previos

- Node.js (>=18)
- npm o yarn

### Instalación

```bash
git clone https://github.com/sggrenas2/technical_challenge.git
cd technical_challenge
npm install
# o
yarn install
```

### Iniciar el Servidor de Desarrollo

```bash
npm run dev
# o
yarn dev
```

La app estará disponible por defecto en [http://localhost:5173](http://localhost:5173).

Para iniciar sesión puedes consultar [https://dummyjson.com/users](https://dummyjson.com/users), donde encontrarás muchos usuarios válidos.

### Construir para Producción

```bash
npm run build
# o
yarn build
```

Los archivos generados estarán en el directorio `dist/`.

## Estructura del Proyecto

```
technical_challenge/
├── src/
│   ├── components/         # Componentes React (PhotoGallery, PhotoCard, etc.)
│   ├── context/            # Contexto React (AuthContext)
│   ├── Hooks/              # Hooks personalizados (useAuth)
│   ├── lib/                # Cliente Axios preconfigurado
│   ├── services/           # Servicios para llamadas a APIs
│   ├── types/              # Interfaces y tipos de TypeScript
│   ├── utils/              # Funciones utilitarias (llamadas a APIs, etc.)
│   ├── Routes/             # Gestión centralizada de rutas
│   ├── Views/              # Gestión centralizada de vistas
│   ├── index.css           # CSS global (incluye Tailwind)
│   └── main.tsx            # Punto de entrada de la app
├── vite.config.ts          # Configuración de Vite
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Plantilla HTML
└── README.md               # Este archivo
```

## Funcionalidad Principal

- **Galería de Fotos**: Obtiene imágenes desde la API de Picsum Photos en múltiples páginas, las fusiona y las muestra usando una lista virtualizada para mejorar el rendimiento. Los usuarios pueden descargar cada imagen.  
  Debido a las limitaciones de la API (solo maneja 100 fotos por petición), se creó una función utilitaria que llama al endpoint 20 veces para obtener las 2000 imágenes requeridas por el desafío.

- **Autenticación**: Incluye un Contexto de React y un hook para manejar el estado de autenticación, con interfaces de ejemplo para los datos del usuario.  
  Aquí se usa [https://dummyjson.com/](https://dummyjson.com/) para iniciar sesión. La galería de fotos carga sin necesidad de token, pero un pequeño componente llamado "ProfileCard" sí requiere autenticación para obtener la información del usuario.

- **Linting y Formateo**: Configuración lista para usar de ESLint para JavaScript y TypeScript, con reglas recomendadas para proyectos en React.

## Requisitos del Desafío y Cómo los Cumple el Repositorio

1. **Pantalla de Login con Login Falso (200 OK + token falso)**  
   **Desafío**: Se requiere una pantalla de login que acepte email y contraseña, realice un login simulado y reciba un “token-fake”.  
   **Repositorio**: Se implementa un AuthContext y un hook `useAuth` para la lógica de autenticación. El login es simulado y el token se almacena en memoria, cumpliendo con el requisito.

2. **Pantalla de Inicio que se Conecta a API Pública y Muestra 2000 Elementos**  
   **Desafío**: Mostrar 2000 elementos obtenidos de una API pública.  
   **Repositorio**: Se usan 20 llamadas a la API de Picsum Photos (100 imágenes por página) para obtener y mostrar 2000 elementos.

3. **Botón de Logout que Regrese al Login y Limpie la Sesión**  
   **Desafío**: Debe haber un botón para cerrar sesión, volver a la pantalla de login y borrar la sesión.  
   **Repositorio**: La función de logout está en el AuthContext y limpia el estado de autenticación, redirigiendo al usuario al login.

4. **App Responsiva en React + TypeScript (Web & Mobile)**  
   **Desafío**: La aplicación debe ser responsiva y construida con React y TypeScript.  
   **Repositorio**: Usa React con TypeScript y Tailwind CSS para estilos responsivos en web y móvil.

5. **Estilado**  
   **Desafío**: El desarrollador puede elegir la librería de estilos.  
   **Repositorio**: Se usa Tailwind CSS, permitiendo un diseño rápido y responsivo.

6. **README y Documentación**  
   **Desafío**: El repositorio debe incluir README con instrucciones de instalación y documentación.  
   **Repositorio**: El README actual incluye pasos de instalación, dependencias y explicaciones. (Este documento mejora aún más la documentación.)

7. **Token en Memoria**  
   **Desafío**: El token debe almacenarse en memoria y no persistirse.  
   **Repositorio**: El token se mantiene dentro del contexto de React, por lo tanto, solo está en memoria (no se guarda en localStorage/sessionStorage).

8. **Arquitectura de Contexto Público/Privado**  
   **Desafío**: Se debe manejar una arquitectura escalable con áreas públicas (login) y privadas (home), anticipando futuros módulos.  
   **Repositorio**: La app usa React Context para gestionar autenticación y protección de rutas, separando vistas públicas y privadas. La estructura permite añadir módulos fácilmente (como cambio de contraseña o datos de usuario).

9. **Uso de Axios con Token Configurado**  
   **Desafío**: Axios debe usarse para las llamadas a API, incluyendo el token falso en los headers.  
   **Repositorio**: Axios está envuelto en un cliente personalizado que añade el token falso a los headers de cada petición, incluso si la API no lo requiere.

10. **Renderizado Eficiente de Listas**  
   **Desafío**: Se debe argumentar e implementar una forma eficiente de mostrar una lista de 2000 elementos.  
   **Repositorio**: Se usa virtualización con `@tanstack/react-virtual` en la galería de fotos para renderizar solo los elementos visibles, lo cual es la mejor práctica para listas grandes en React.

11. **Logout con Arquitectura de Contexto**  
   **Desafío**: La lógica de logout debe integrarse correctamente con el manejo del contexto.  
   **Repositorio**: El logout se maneja mediante el contexto, reseteando el estado de autenticación, una práctica estándar y escalable.

12. **Propuesta para Mejorar la Eficiencia del Backend**  
   **Desafío**: Se debe proponer una mejora teórica para las llamadas al backend.  
   **Repositorio**: Actualmente se hacen 20 llamadas en paralelo para obtener las 2000 imágenes. Esto se hace por la restricción del desafío, pero una mejora sería tener un endpoint paginado en el servidor, lo cual permitiría hacer menos llamadas. También se sugiere implementar un sistema de caché para evitar sobrecarga y llamadas duplicadas.