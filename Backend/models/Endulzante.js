module.exports =  (sequelize, DataTypes) => {
  const Endulzante = sequelize.define('Endulzante', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'endulzantes',
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: false
  });

  Endulzante.associate = (models) => {
    Endulzante.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'producto'
    });

    Endulzante.hasMany(models.Pedido, {
      foreignKey: 'endulzante_id',
      as: 'pedidos'
    });
  };

  return Endulzante;
};
