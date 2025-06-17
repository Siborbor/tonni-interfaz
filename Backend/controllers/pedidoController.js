const {
  Pedido,
  PedidoTopping,
  Usuario,
  Producto,
  Sabor,
  Topping,
  Endulzante,
} = require("../models");

const crearPedido = async (req, res) => {
  try {
    const { usuario_id, producto_id, sabor_id, endulzante_id, toppings } =
      req.body;

    const nuevoPedido = await Pedido.create({
      usuario_id,
      producto_id,
      sabor_id,
      endulzante_id,
      toppings,
      estado: "pendiente",
    });

    if (Array.isArray(toppings)) {
      const toppingsData = toppings.map((topping_id) => ({
        pedido_id: nuevoPedido.id,
        topping_id,
      }));
      await PedidoTopping.bulkCreate(toppingsData);
    }

    // Emitir evento en tiempo real
    const io = req.app.get("io");
    io.emit("nuevo-pedido", {
      id: nuevoPedido.id,
      user: req.user?.nombre || "Usuario",
      producto_id,
      sabor_id,
      endulzante_id,
      toppings,
      estado: "pendiente",
      creado_en: new Date(),
    });

    res.status(201).json({ message: "Pedido creado correctamente" });
  } catch (error) {
    console.error("Error al crear pedido:", error);
    res.status(500).json({ error: "No se pudo crear el pedido" });
  }
};

const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: [
        { model: Usuario, as: "usuario" },
        { model: Producto, as: "producto" },
        { model: Sabor, as: "sabor" },
        { model: Endulzante, as: "endulzante" },
        {
          model: PedidoTopping,
          as: "pedido_toppings",
          include: [{ model: Topping, as: "topping" }],
        },
      ],
      order: [["creado_en", "DESC"]],
    });

     const pedidosFormateados = pedidos.map((pedido) => ({
       id: pedido.id,
       user: pedido.usuario?.nombre || "",
       producto: pedido.producto?.nombre || "",
       sabor: pedido.sabor?.nombre || "",
       endulzante: pedido.endulzante?.nombre || "",
       toppings: pedido.pedido_toppings.map((element) => element.topping?.nombre).filter(Boolean),
       estado: pedido.estado,
     }));

    res.json(pedidosFormateados);
  } catch (error) {
    console.error("Error al obtener pedidos:", error);
    res.status(500).json({ error: "Error al obtener pedidos" });
  }
};

const actualizarEstadoPedido = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    pedido.estado = estado;
    await pedido.save();

    res.json({ message: "Estado del pedido actualizado correctamente" });
  } catch (error) {
    console.error("Error actualizando estado:", error);
    res.status(500).json({ error: "No se pudo actualizar el estado" });
  }
};

module.exports = {
  crearPedido,
  obtenerPedidos,
  actualizarEstadoPedido,
};
