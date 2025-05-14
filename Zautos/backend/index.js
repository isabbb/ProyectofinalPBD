const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importar routers
const carrosRouter = require('./routes/carrosRoutes');
const motoresRouter = require('./routes/motoresRoutes');
const propietariosRouter = require('./routes/propietariosRoutes');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://isabbb200:admin@cluster0.dggweyg.mongodb.net/Zautos')
    .then(() => console.log('Conectado a la base de datos MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(bodyParser.json());

// Usar rutas

app.use('/api/carros', carrosRouter);
app.use('/api/motores', motoresRouter);
app.use('/api/propietarios', propietariosRouter);

// Levantar el servidor
app.listen(3005, () => {
    console.log('Servidor corriendo en el puerto 3005');
});
