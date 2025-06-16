module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    estado: {
      type: DataTypes.ENUM('pendiente', 'en proceso', 'completado'),
      defaultValue: 'pendiente',
    },
  }, {
    tableName: 'pedidos',
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: false,
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    Pedido.belongsTo(models.Producto, { foreignKey: 'producto_id', as: 'producto' });
    Pedido.belongsTo(models.Sabor, { foreignKey: 'sabor_id', as: 'sabor' });
    Pedido.belongsTo(models.Endulzante, { foreignKey: 'endulzante_id', as: 'endulzante' });
    Pedido.hasMany(models.PedidoTopping, { foreignKey: 'pedido_id', as: 'pedido_toppings' });
  };

  return Pedido;
};
