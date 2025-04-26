const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Materia', {
    id_materia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  });
};
