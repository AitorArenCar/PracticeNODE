# Practice NODE

Simple proyect where I practiced the use of NODE and JavaScript.

## Project Structure

The project consists of the following folders and files:

- `node_modules`: Contains all the installed libraries.
- `src`: Contains the source code files.
  - `controllers`: Contains the controllers for the routes.
    - `controllersEmployee.js`: File that defines the controller for employee-related routes.
  - `routes`: Contains the route definitions.
    - `routes.js`: File that defines the routes for the application.
- `index.js`: The main file that starts the application.
- `package.json`: File that lists the project dependencies and scripts.
- `package-lock.json`: Generated file that provides version information for the installed packages.

## Controllers

### controllersEmployee.js

```javascript
const controllerRoutesEmployee = {};

controllerRoutesEmployee.getALL = (req, res) => {
    res.json({"Status": "GETALL OK"});
};

controllerRoutesEmployee.getWithID = (req, res) => {
    res.json({"Status": "GETID OK"});
};

controllerRoutesEmployee.create = (req, res) => {
    res.json({"Status": "POST OK"});
};

controllerRoutesEmployee.delete = (req, res) => {
    res.json({"Status": "DELETE OK"});
};

controllerRoutesEmployee.update = (req, res) => {
    res.json({"Status": "PUT OK"});
};

module.exports = controllerRoutesEmployee;
```

## Routes

### routes.js

```javascript
const express = require('express');
const router = express.Router();
const controllerRoutesEmployee = require('../controllers/controllersEmployee');

// Get all
router.get('/list', controllerRoutesEmployee.getALL);

// Get with ID
router.get('/:id', controllerRoutesEmployee.getWithID);

// Create
router.post('/add', controllerRoutesEmployee.create);

// Delete
router.delete('/:id', controllerRoutesEmployee.delete);

// Update
router.put('/:id', controllerRoutesEmployee.update);

module.exports = router;
```

## Usage
npm init -y                 para inicializar el proyecto despues d crear 'index.js'

npm install express         para instalar librerias de express

npm install nodemon -D      para instalar librerias de nodemon para que se reinicie el servidor cada vez que guardemos. -D para que solo sea de depuración

creamos la carpeta 'src' para administrar mejor el proyecto
creamos el archivo 'route.js' dentro de 'src' dentro de archivo llamado 'routes' para administrar las rutas

creamos una carpeta 'controlles' dentro de 'src' para crear loscontroladores de las rutas
creamos el archivo 'controllersEmployee.js' dentro de la carpeta 'controllers0



