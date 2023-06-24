import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import BotonAtras from "../components/BotonAtrasComponent";
import { motion } from "framer-motion";

const ConfirmaTuPedidoGriego = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabor, setSabor] = useState("");
  const [tipoSabor, setTiposabor] = useState("");
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setSabor(location.state.sabor);
    setTiposabor(location.state.tipoSabor);
    setToppings(location.state.toppings);
  }, []);

  const handleClick = (tipo, producto, sabor, tipoSabor, endulsante) => {
    navigate("/toni/formulario", {
      state: {
        tipo: tipo,
        producto: producto,
        sabor: sabor,
        tipoSabor: tipoSabor,
        endulsante: endulsante,
        toppings: toppings,
      },
    });
  };

  return (
    <>
      <div
        className={`contenedor_confirmatupedido`}
        style={{
          backgroundImage: `url('/src/assets/backgroundGriego.jpg')`,
        }}
      >
        <CabezeraInterfaz producto={producto} />
        <motion.div
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.4 }}
        >
          <p
            style={{
              color: "#fff",
            }}
          >
            Por favor, confírmanos
            <br />
            que esté correcto tu pedido
          </p>
        </motion.div>
        <div
          className="contenedor_pedido"
          style={{
            color: "White",
          }}
        >
          <div className="contenedor_producto">
            <motion.h5
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            >
              Producto
            </motion.h5>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
              src={`/src/assets/${sabor}griego.png`}
            />
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
              style={{
                color: "white",
              }}
            >
              {sabor}
            </motion.p>
          </div>
          <div className="contenedor_mas">
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
            >
              +
            </motion.p>
          </div>
          <div className="contenedor_topping">
            <motion.h5
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            >
              Toppings
            </motion.h5>
            <div className="wrapper_toppings" style={{display: toppings.length <2  ? "flex": "grid"}}>
              {toppings.map((el, key) => (
                <div key={key} className="topping">
                  <motion.img
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
                    src={`/src/assets/${el}.png`}
                  />
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
                    style={{
                      color: "white",
                    }}
                  >
                    {el}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          onClick={() => handleClick(tipo, producto, sabor, tipoSabor)}
          className="boton_confirmar"
          style={{
            backgroundColor: "white",
            color: "#041689",
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 1 }}
        >
          confirmar
        </motion.div>
        <BotonAtras color={"white"} />
      </div>
    </>
  );
};

export default ConfirmaTuPedidoGriego;
