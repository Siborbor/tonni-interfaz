module.exports = function rolCheck(requiredRole) {
  return function (req, res, next) {
    if (req.usuario && req.usuario.rol === requiredRole) {
      next();
    } else {
      return res
        .status(403)
        .json({ mensaje: "Acceso denegado: Rol insuficiente" });
    }
  };
};
