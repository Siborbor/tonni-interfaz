module.exports = (sequelize, DataTypes) => {
  const Topping = sequelize.define(
    "Topping",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "toppings",
      timestamps: true,
      createdAt: "creado_en",
      updatedAt: false,
    }
  );

  Topping.associate = (models) => {
    Topping.belongsTo(models.Producto, {
      foreignKey: "producto_id",
      as: "producto",
    });
    Topping.hasMany(models.PedidoTopping, {
      foreignKey: "topping_id",
      as: "pedido_toppings",
    });
  };

  return Topping;
};
