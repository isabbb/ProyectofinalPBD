const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
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
    tipo_motor: {
        type: String,
        required: true,
    },
    combustible: {
        type: String,
        required: true,
    },
    potencia_hp: {
        type: Number,
        required: true,
    },
    transmision: {
        type: String,
        required: true,
    },
    consumo_km_l: {
        type: Number,
        required: true,
    },
    puertas: {
        type: Number,
        required: true,
    },
    traccion: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('motores', motorSchema);



