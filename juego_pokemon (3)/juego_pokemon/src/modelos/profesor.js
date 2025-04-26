const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Profesor', {
    documento_pro: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    especializacion: DataTypes.STRING,
    correo: DataTypes.STRING
  });
};
