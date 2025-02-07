# Proyecto - Store Management con Express

## Instrucciones

1. Crear un nuevo proyecto de Express.
2. Páginas:
   - Home - Página principal (semi estática) / Landing Page
   - Productos -> Listado de productos (dinámico)
   - Array de productos
   - Productos/:id - Detalle de producto (dinámico)
   - About - Fichero html
3. Crear proyecto con Express
   - Crear server.js
   - Crear app.js
   - Orden de Carpetas
     - public
     - src
       - [models]
       - controllers
       - views
       - routes
       - middlewares
       - errors
4. Fase 2
   1. Añadir Crear un producto con un formulario
   2. Añadir un formulario para editar un producto
   3. Añadir borrar un producto
   4. Persistencia de datos con un fichero JSON

## Crear proyecto Express

1. Crea una carpeta e inicia un proyecto en **Node**: `npm init -y`
2. Instala **TypeScript** y los tipos de **Node**: `npm i -D  typescript @types/node`
3. Crea el fichero **_tsconfig.json_**: `npx tsc --init`
4. Crea el fichero de reglas **_eslintconfig_**: `npm init @eslint/config@latest`
5. Instalamos **Vitest**: `npm install -D vitest`
6. Crea el fichero **_vite.config.js_** para configurar con estas líneas de código:

   ```js
   import { defineConfig } from 'vitest/config';
   export default defineConfig({
     test: {
       include: ['**/*.test.ts'],
       globals: true,
     },
   });
   ```

7. Instala la librería **cross-env**: `npm i cross-env`
8. Instala **dotenv** para trabajar con el fichero **_.env_**
9. Añade los siguientes **scripts** en **_package.json_**:

   - "start": "node dist/index.js"
   - "start:dev": "cross-env NODE_ENV=dev DEBUG=demo\* node --watch --env-file=.env ./dist/index.js"
   - "build": "tsc -w"
   - "test": "vitest run"
   - "test:c": "vitest run --coverage"
   - "lint": "eslint . --ext .ts"

   Opcional: Puedes añadir esta configuración de **prettier**: `"prettier": {"singleQuote": true}`

10. Edita el **_tsconfig.json_** añadiendo lo siguiente:

    - "target": "ESNext"
    - "module": "ESNext"
    - "rootDir": "./src"
    - "moduleResolution": "node10"
    - "outDir": "./dist"
    - "types": ["vitest/globals"]

11. Instala **Express** junto con sus tipos: `npm i express`, `npm i -D @types/express`
12. Instala **debug** y sus tipos para los comentarios en la terminal del **servidor**: `npm i debug`, `npm i -D @types/debug`
13. Instala **morgan** y sus tipos para el control de los middleware: `npm i morgan`, `npm i -D @types/morgan`
14. Instala **cors** y sus tipos para otorgar un middleware **Connect/Express** que se utiliza para habilitar **CORS** y de esa manera evitar los conflictos de intercambio de información entre puertos diferentes: `npm i cors`, `npm i -D @types/cors`
15. Coloca en la terminal `npm run build` para así inicializar tu terminal **build** y otorga la siguiente configuración: Color azul, logo de un reinicio y nombre: **build (tst)**
16. Crea el repositorio de **Git** y realiza el **Initial Commit**

### Simplificación de pasos

1. Crea un proyecto de **Node**: `npm init -y`
2. Cambia el contenido del **_package.json_** con lo siguiente:

   ```JSON
    {
    "name": "{Nombra tu proyecto}",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "start": "node dist/index.js",
        "start:dev": "cross-env NODE_ENV=dev DEBUG=demo* node --watch --env-file=.env ./dist/index.js",
        "build": "tsc -w",
        "test": "vitest run",
        "test:c": "vitest run --coverage",
        "lint": "eslint . --ext .ts"
    },
    "keywords": [],
    "author": "{Coloca tu nombre}",
    "license": "ISC",
    "type": "module",
    "description": "",
    "prettier": {
        "singleQuote": true
    },
    "devDependencies": {
        "@eslint/js": "^9.19.0",
        "@types/cors": "^2.8.17",
        "@types/debug": "^4.1.12",
        "@types/express": "^5.0.0",
        "@types/morgan": "^1.9.9",
        "@types/node": "^22.13.1",
        "eslint": "^9.19.0",
        "globals": "^15.14.0",
        "typescript": "^5.7.3",
        "typescript-eslint": "^8.23.0",
        "vitest": "^3.0.5"
    },
    "dependencies": {
        "cors": "^2.8.5",
        "cross-env": "^7.0.3",
        "debug": "^4.4.0",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "morgan": "^1.10.0"
    }
   }
   ```

3. Escribe el siguiente comando en la terminal: `npm install`
4. Coloca en la terminal `npm run build` para así inicializar tu terminal **build** y otorga la siguiente configuración: Color azul, logo de un reinicio y nombre: **build (tst)**
5. Crea el repositorio de **Git** y realiza el **Initial Commit**
