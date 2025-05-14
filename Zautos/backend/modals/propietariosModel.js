const mongoose = require('mongoose');

const propietarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    licencia: {
        type: String,
        required: true,
        unique: true,
    },
    tipo_licencia: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('propietarios', propietarioSchema);









