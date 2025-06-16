module.exports = (sequelize, DataTypes) => {
  const PedidoTopping = sequelize.define('PedidoTopping', {
    pedido_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'pedidos',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    topping_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'toppings',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    tableName: 'pedido_topping',
    timestamps: false,
  });

  PedidoTopping.associate = (models) => {
    PedidoTopping.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
    PedidoTopping.belongsTo(models.Topping, { foreignKey: 'topping_id', as: 'topping' });
  };

  return PedidoTopping;
};
