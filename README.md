# Marvel Web Challenge

## Descripción

Este proyecto es una aplicación web diseñada para consultar y gestionar personajes de Marvel. Está desarrollado con **Vite** para una construcción rápida y eficiente, y utiliza **React con TypeScript** para el frontend.

## En acción

Para ver marvel-challenge en acción clona el repositorio y corre localmente:

```bash
git clone https://github.com/juliacanas/marvel-challenge.git
cd marvel-challenge
npm install
```

## Vistas

Consta de dos vistas:

1. **LISTADO DE PERSONAJES** con la posibilidad de buscar por el nombre del personaje, así como añadirlos a favoritos. Esta misma vista permite mostrar los personajes favoritos guardados y buscarlos también por nombre.

2. **DETALLE DE PERSONAJE** que muestra el nombre, la imagen y una breve descripción del personaje seleccionado, así como la posiblidad de añadirlo a favoritos. Y una lista de los comics relativos a ese personaje ordenados por fecha de lanzamiento

## Estructura de Carpetas

```text

├── /src
│   ├── /assets ---> Imagen del Logo
│   ├── /components ---> Componentes reutilizables de React
│   ├── /constants ---> archivo con todas las constantes del proyecto
│   ├── /context ---> Manejo de estados globales
│   ├── /hooks ---> Custom hooks para lógica reutilizable
│   ├── /icons ---> svg en formato componente
│   ├── /layouts ---> Componentes que persisten en toda la web
│   ├── /mappers ---> Mappers para pasar dtos a client types
│   ├── /pages ---> Vistas de la aplicación
│   ├── /routes ---> Configuración de rutas
│   ├── /services ---> Configuración y llamadas a API
│   ├── /styles ---> Estilos globales
│   ├── /tests ---> Utils de Testing Library y Vitest
│   └── /types ---> Dtos de las entidades de Marvel y tipos del lado de cliente
├── App.tsx
├── main.tsx
```

## API Marvel

Para el desarrollo de esta muestra, se ha usado la API de Marvel. Se puede visitar su doc aquí: [su documentación](https://developer.marvel.com/documentation/getting_started)

## Tecnologías Clave y su Propósito

🎨 **Frontend (UI & Estado)**

- **React** (react, react-dom) → Librería principal para construir la interfaz.
- **React Router** (react-router-dom) → Para manejar la navegación entre páginas.
- **Styled Components** (styled-components) → Para estilos CSS en JS.

🚡 **Gestión de Estado y API**

- **TanStack React Query** (@tanstack/react-query) → Manejo eficiente de datos y caché para llamadas a APIs.
- **Axios** (axios) → Cliente HTTP para interactuar con la API de Marvel.
- **React Context API** Opción ligera para compartir estado global evitando el prop drilling.

🛠️ **Herramientas de Desarrollo**

- **Vite** (vite) → Herramienta rápida de bundling y desarrollo.
- **TypeScript** (typescript) → Mejora la seguridad del código con tipado estático.
- **ESLint & Prettier** (eslint, prettier) → Linter y formateador de código.
- **Husky & Lint-Staged** (husky, lint-staged) → Corre verificaciones de código antes de los commits.
- **Vitest & Testing Library** (vitest, @testing-library/react) → Framework para pruebas unitarias.

## Proyecto en producción

<a href="https://marvel-challenge-chi.vercel.app/">marvel-challenge.vercel.app</a>
