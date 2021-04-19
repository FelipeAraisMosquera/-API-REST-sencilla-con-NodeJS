const express = require('express'); //importando libreria
const routes = require('./app/controllers/routes')

const app = express(); //creando servidor
app.use(express.json()) //se configura el servidor para el envio y recpcion de json
const PORT = 3000;

app.use('/banco', routes);

//corriendo el servidor ingrese
app.listen(PORT, () => {
    console.log('Escuchando puerto:', PORT);
});