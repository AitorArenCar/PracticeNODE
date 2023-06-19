const express = require('express');
const app = express();

//process.env.port || 6000   se usa para sacar la variable de entono llamada port, si no se encuentra se usa el puerto indicado a mano
app.set('port', process.env.port || 8000);

//configuracion inicial de la aplicacion
app.use(express.json());

//indicamos donde estarán las rutas
app.use(require('./src/routes/routes'));

app.listen(app.get('port'), ()=>{
    console.log(`Server in port: ${app.get('port')}`);
});