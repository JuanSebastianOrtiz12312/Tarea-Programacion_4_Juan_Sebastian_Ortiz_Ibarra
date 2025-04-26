const express = require('express');
const router = express.Router();
const { registrarProfesor, listarProfesores } = require('../controladores/profesorControlador');

router.post('/registrar', registrarProfesor);
router.get('/listar', listarProfesores);

module.exports = router;
