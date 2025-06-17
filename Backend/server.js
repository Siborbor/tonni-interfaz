const http = require('http');
const socketIO = require('socket.io');
const app = require('./app');
const sequelize = require('./config/db');

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*', // permite que el frontend se conecte
    methods: ['GET', 'POST', 'PATCH'],
  },
});


app.set('io', io);

io.on('connection', (socket) => {
  console.log('🟢 Cliente conectado vía WebSocket');

  socket.on('disconnect', () => {
    console.log('🔴 Cliente desconectado');
  });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // sincroniza los modelos con la base de datos, creando o actualizando tablas según sea necesario
    console.log('✅ Base de datos conectada y sincronizada');

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
}

startServer();
