module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      marcaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "marcas",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      tableName: "productos",
      timestamps: true,
      createdAt: "creado_en",
      updatedAt: false,
    }
  );

  Producto.associate = (models) => {
    Producto.belongsTo(models.Marca, {
      foreignKey: "marcaId",
      as: "marcas",
    });
    Producto.hasMany(models.Topping, {
      foreignKey: "producto_id",
      as: "toppings",
    });
    Producto.hasMany(models.Sabor, {
      foreignKey: "producto_id",
      as: "sabores",
    });
    Producto.hasMany(models.Endulzante, {
      foreignKey: "producto_id",
      as: "endulzantes",
    });
    Producto.hasMany(models.Pedido, {
      foreignKey: "producto_id",
      as: "pedidos",
    });
  };

  return Producto;
};
