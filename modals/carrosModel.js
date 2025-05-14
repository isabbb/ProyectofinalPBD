const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    anio: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    id_motor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'motores', 
    },
    id_propietario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'propietarios', 
    }
});

module.exports = mongoose.model('carros', carroSchema);







