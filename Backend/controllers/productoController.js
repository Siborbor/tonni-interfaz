const { Producto, Marca, Sabor, Topping, Endulzante } = require("../models");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [
        {
          model: Marca,
          as: "marcas",
        },
        {
          model: Sabor,
          as: "sabores",
        },
        {
          model: Topping,
          as: "toppings",
        },
        {
          model: Endulzante,
          as: "endulzantes",
        },
      ],
    });

    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

module.exports = {
  obtenerProductos,
};
