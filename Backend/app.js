const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productosRoutes = require('./routes/productos');
const pedidoRoutes = require('./routes/pedidos');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidoRoutes);

module.exports = app;