const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productosRoutes = require('./routes/productos');
const pedidoRoutes = require('./routes/pedidos');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(helmet());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error interno del servidor" });
});

module.exports = app;