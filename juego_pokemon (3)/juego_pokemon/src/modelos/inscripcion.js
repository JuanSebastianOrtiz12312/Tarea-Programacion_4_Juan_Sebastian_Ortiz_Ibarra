const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Inscripcion', {
    id_inscripcion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    documento_est: DataTypes.STRING,
    id_materia: DataTypes.INTEGER
  });
};
