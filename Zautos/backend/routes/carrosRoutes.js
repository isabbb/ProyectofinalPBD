const express = require('express');
const router = express.Router();
const Carro = require('../modals/carrosModel');

// Obtener todos los carros
router.get('/obtenerTodos', async (req, res) => {
    try {
        const carros = await Carro.find()
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

//Editar un carro
router.put('/editarCarro/:id', async (req, res) => {
    try {
        const carroActualizado = await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!carroActualizado) {
            return res.status(404).json({ message: "Carro no encontrado" });
        }
        res.json(carroActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Eliminar un carro
router.delete('/eliminarCarro/:id', async (req, res) => {
    try {
        const carroEliminado = await Carro.findByIdAndDelete(req.params.id);
        if (!carroEliminado) {
            return res.status(404).json({ message: "Carro no encontrado" });
        }
        res.json({ message: "Carro eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Buscar carro por dos parámetros
router.get('/buscarCarro', async (req, res) => {
    try {
        const { marca, año } = req.query; // Se esperan parámetros en la URL
        const carros = await Carro.find({ marca, año });

        if (carros.length === 0) {
            return res.status(404).json({ message: "No se encontraron carros con esos criterios" });
        }
        res.json(carros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
