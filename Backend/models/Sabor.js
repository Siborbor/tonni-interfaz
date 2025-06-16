module.exports = (sequelize, DataTypes) => {
  const Sabor = sequelize.define('Sabor', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sabores',
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: false
  });

  Sabor.associate = (models) => {
    Sabor.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'producto'
    });

    Sabor.hasMany(models.Pedido, {
      foreignKey: 'sabor_id',
      as: 'pedidos'
    });
  };

  return Sabor;
};
