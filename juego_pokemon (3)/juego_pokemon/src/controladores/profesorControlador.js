const Joi = require('joi');
const { Profesor } = require('../baseDatos');

const validadorProfesor = Joi.object({
  documento_pro: Joi.string().min(6).max(20).required(),
  nombre: Joi.string().min(2).max(50).required(),
  apellido: Joi.string().min(2).max(50).required(),
  especializacion: Joi.string().min(2).max(50).required(),
  correo: Joi.string().email().required()
});

const registrarProfesor = async (req, res) => {
  try {
    const { error } = validadorProfesor.validate(req.body, { abortEarly: false });

    if (error) {
      const mensajesErrores = error.details.map(detail => detail.message).join('|');
      return res.status(400).json({ mensaje: 'Errores en la validación', resultado: mensajesErrores });
    }

    const { documento_pro, nombre, apellido, especializacion, correo } = req.body;

    const profesorExistente = await Profesor.findOne({ where: { documento_pro } });

    if (profesorExistente) {
      return res.status(400).json({ mensaje: 'El profesor ya existe', resultado: null });
    }

    const nuevoProfesor = await Profesor.create({ documento_pro, nombre, apellido, especializacion, correo });

    res.status(201).json({ mensaje: 'Profesor creado', resultado: nuevoProfesor });

  } catch (error) {
    res.status(500).json({ mensaje: error.message, resultado: null });
  }
};

const listarProfesores = async (req, res) => {
  try {
    const profesores = await Profesor.findAll();
    res.status(200).json({ mensaje: 'Profesores listados', resultado: profesores });
  } catch (error) {
    res.status(500).json({ mensaje: error.message, resultado: null });
  }
};

module.exports = { registrarProfesor, listarProfesores };
