const express = require('express');
const router = express.Router();
const Propietario = require('../modals/propietariosModel');

// Obtener todos los propietarios
router.get('/obtenerTodos', async (req, res) => {
    try {
        const propietarios = await Propietario.find();
        res.json(propietarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Agregar un nuevo propietario
router.post('/addPropietario', async (req, res) => {
    try {
        const propietario = new Propietario(req.body);
        await propietario.save();
        res.status(201).json(propietario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Editar un propietario
router.put('/editarPropietario/:id', async (req, res) => {
    try {
        const propietarioActualizado = await Propietario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!propietarioActualizado) {
            return res.status(404).json({ message: "Propietario no encontrado" });
        }
        res.json(propietarioActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Eliminar un propietario
router.delete('/eliminarPropietario/:id', async (req, res) => {
    try {
        const propietarioEliminado = await Propietario.findByIdAndDelete(req.params.id);
        if (!propietarioEliminado) {
            return res.status(404).json({ message: "Propietario no encontrado" });
        }
        res.json({ message: "Propietario eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Buscar por dos parametros 
router.get('/buscarPropietario', async (req, res) => {
    try {
        const { nombre, ciudad } = req.query; // Se esperan parámetros en la URL
        const propietarios = await Propietario.find({ nombre, ciudad });
        
        if (propietarios.length === 0) {
            return res.status(404).json({ message: "No se encontraron propietarios con esos criterios" });
        }
        res.json(propietarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;





