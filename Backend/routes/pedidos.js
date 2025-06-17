const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");
const authMiddleware = require("../middlewares/auth");
const rolCheck = require("../middlewares/rolcheck");

// Crear pedido
router.post("/", authMiddleware, pedidoController.crearPedido);

// Obtener todos los pedidos
router.get("/", authMiddleware, pedidoController.obtenerPedidos);

// Actualizar estado del pedido
 router.patch(
   "/:id",
   authMiddleware,
   rolCheck("despachador"),
   pedidoController.actualizarEstadoPedido
);

module.exports = router;
