const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const authMiddleware = require('../middlewares/auth');

// Crear pedido
router.post('/', authMiddleware, pedidoController.crearPedido);

// Obtener todos los pedidos
router.get('/', authMiddleware, pedidoController.obtenerPedidos);

// Actualizar estado del pedido
router.patch('/:id', authMiddleware, pedidoController.actualizarEstadoPedido);

module.exports = router;