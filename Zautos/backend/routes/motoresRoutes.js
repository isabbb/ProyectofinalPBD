const express = require('express');
const router = express.Router();
const Carro = require('../modals/carrosModel');

// Obtener todos los carros
router.get('/obtenerTodos', async (req, res) => {
    try {
        const carros = await Carro.find()
            .populate('id_motor')        // Para traer los datos del motor
            .populate('id_propietario'); // Para traer los datos del propietario
        res.json(carros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Agregar un nuevo carro
router.post('/addCarro', async (req, res) => {
    try {
        const carro = new Carro(req.body);
        await carro.save();
        res.status(201).json(carro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Editar un motor
router.put('/editarMotor/:id', async (req, res) => {
    try {
        const motorActualizado = await Motor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!motorActualizado) {
            return res.status(404).json({ message: "Motor no encontrado" });
        }
        res.json(motorActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un motor
router.delete('/eliminarMotor/:id', async (req, res) => {
    try {
        const motorEliminado = await Motor.findByIdAndDelete(req.params.id);
        if (!motorEliminado) {
            return res.status(404).json({ message: "Motor no encontrado" });
        }
        res.json({ message: "Motor eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buscar motor por dos parámetros
router.get('/buscarMotor', async (req, res) => {
    try {
        const { tipo, potencia } = req.query; // Se esperan parámetros en la URL
        const motores = await Motor.find({ tipo, potencia });
        
        if (motores.length === 0) {
            return res.status(404).json({ message: "No se encontraron motores con esos criterios" });
        }
        res.json(motores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;






