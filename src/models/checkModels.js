const sequelize = require('../config/database'); // Tu conexión a la BD
const fs = require('fs');
const path = require('path');

// Subir un nivel al directorio padre
const modelsPath = path.join(__dirname, '..');

// Cargar modelos dinámicamente
const loadModels = () => {
  const models = {};

  fs.readdirSync(modelsPath).forEach((file) => {
    if (file.endsWith('.js') && file !== 'checkModels.js') { // Evitar que se cargue a sí mismo
      const model = require(path.join(modelsPath, file));
      const modelName = model.name || path.basename(file, '.js');
      models[modelName] = model;
    }
  });

  return models;
};

const models = loadModels();

// Verificación de modelos y conexión
(async () => {
  try {
    console.log('🔍 Verificando conexión a la base de datos...');
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con la base de datos.');

    console.log('🔄 Verificando modelos cargados...');
    console.table(
      Object.keys(models).map((modelName) => ({
        Modelo: modelName,
        Estado: 'Cargado',
      }))
    );

    console.log('🔄 Sincronizando modelos...');
    await sequelize.sync({ alter: true });

    console.log('✅ Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('❌ Ocurrió un error durante la verificación:');
    console.error(error);
  } finally {
    await sequelize.close();
    console.log('🔒 Conexión a la base de datos cerrada.');
  }
})();
