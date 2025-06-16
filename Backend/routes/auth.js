const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");
const router = express.Router();
const {JWT_SECRET} = process.env;
const verificarToken = require('../middlewares/auth');

router.post("/register", async (req, res) => {
  try {
    const { nombre, correo, edad, password } = req.body;

    if (!nombre || !correo || !edad || !password) {
      return res.status(400).json({ message: "Faltan datos requeridos." });
    }

    // Verificar si correo ya existe
    const userExists = await Usuario.findOne({ where: { correo } });
    if (userExists) {
      return res.status(400).json({ message: "Correo ya registrado." });
    }

    // Hashear password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Crear usuario
    const nuevoUsuario = await Usuario.create({
      nombre,
      correo,
      edad,
      passwordHash,
    });

    return res
      .status(201)
      .json({ message: "Usuario registrado correctamente." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { correo, password } = req.body;
    if (!correo || !password) {
      return res.status(400).json({ message: "Faltan datos requeridos." });
    }

    // Buscar usuario
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Verificar password
    const isMatch = await bcrypt.compare(password, usuario.passwordHash);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Crear JWT
    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.json({ token, message: "Login exitoso." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor." });
  }
});


router.get('/perfil', verificarToken, async (req, res) => {

  return res.json({
    message: 'Acceso autorizado al perfil',
    usuario: req.usuario
  });
});

module.exports = router;
