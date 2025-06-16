
const { sequelize } = require('./models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a la base de datos.');
    await sequelize.close();
    console.log('🔒 Conexión cerrada correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error.message);
  }
})();
