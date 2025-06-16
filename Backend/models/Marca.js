module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define('Marca', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'marcas',
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: false
  });

  Marca.associate = (models) => {
    Marca.hasMany(models.Producto, {
      foreignKey: 'marcaId',
      as: 'productos'
    });
  };

  return Marca;
};


