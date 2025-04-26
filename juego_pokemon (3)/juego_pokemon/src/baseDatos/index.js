const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_base_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

const Profesor = require('../modelos/profesor')(sequelize);
const Estudiante = require('../modelos/estudiante')(sequelize);
const Materia = require('../modelos/materia')(sequelize);
const Inscripcion = require('../modelos/inscripcion')(sequelize);

module.exports = { sequelize, Profesor, Estudiante, Materia, Inscripcion };
