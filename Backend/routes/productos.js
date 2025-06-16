const express = require('express');
const router = express.Router();
const { obtenerProductos } = require('../controllers/productoController');
const verifyToken = require('../middlewares/auth');

router.get('/', verifyToken, obtenerProductos);

module.exports = router;