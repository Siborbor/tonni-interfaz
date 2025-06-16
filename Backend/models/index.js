const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Marca = require("./Marca")(sequelize, DataTypes);
const Producto = require("./Producto")(sequelize, DataTypes);
const Sabor = require("./Sabor")(sequelize, DataTypes);
const Topping = require("./Topping")(sequelize, DataTypes);
const Endulzante = require("./Endulzante")(sequelize, DataTypes);
const Pedido = require("./Pedido")(sequelize, DataTypes);
const PedidoTopping = require("./PedidoTopping")(sequelize, DataTypes);
const Usuario = require("./Usuario")(sequelize, DataTypes);
const db = {};

db.Usuario = Usuario;
db.PedidoTopping = PedidoTopping;
db.Pedido = Pedido;
db.Endulzante = Endulzante;
db.Topping = Topping;
db.Sabor = Sabor;
db.Producto = Producto;
db.Marca = Marca;

db.sequelize = sequelize;
db.Sequelize = require("sequelize");

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
