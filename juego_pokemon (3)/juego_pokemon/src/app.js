const express = require('express');
const app = express();
const { sequelize } = require('./baseDatos');

const rutasProfesor = require('./rutas/rutasProfesor');

app.use(express.json());

app.use('/profesor', rutasProfesor);

const PORT = 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar base de datos:', error);
  });
