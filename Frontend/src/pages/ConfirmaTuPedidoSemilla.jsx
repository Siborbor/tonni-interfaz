import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import BotonAtras from "../components/BotonAtrasComponent";
import { motion } from "framer-motion";
import LogoAlmendras from "../svg components/LogoAlmendras";
import EtiquetaAlmendra from "../svg components/EtiquetaAlmendra";

const ConfirmaTuPedidoSemilla = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabor, setSabor] = useState("");
  const [tipoSabor, setTiposabor] = useState("");
  const [endulsante, setEndulsante] = useState("");

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setSabor(location.state.sabor);
    setTiposabor(location.state.tipoSabor);
    setEndulsante(location.state.endulsante);
  }, []);

  const selectColor = (producto) => {
    let color;
    if (producto == "Bebida de Almendras") {
      color = "#5C7C38";
    }
    if (producto == "Leche Blanca") {
      color = "#fff";
    }
    if (producto == "Griego") {
      color = "#0C0080";
    }

    return color;
  };

  const handleClick = (tipo, producto, sabor, tipoSabor, endulsante) => {
    navigate("/toni/formulario", {
      state: {
        tipo: tipo,
        producto: producto,
        sabor: sabor,
        tipoSabor: tipoSabor,
        endulsante: endulsante,
      },
    });
  };

  return (
    <>
      <div
        className={`contenedor_confirmatupedido`}
        style={{
          backgroundImage: `url('/src/assets/backgroundSemillas.png')`,
        }}
      >
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor_logo_almendra">
          <></>
          <motion.div
            className="logo"
            initial={{ y: -50,x:"50%", opacity: 0 }}
            animate={{ y: 0, x:"50%", opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.3 }}
          >
            <LogoAlmendras />
          </motion.div>
          <motion.div
            className="etiqueta"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.3 }}
          >
            <EtiquetaAlmendra />{" "}
          </motion.div>
        </div>
        <motion.div
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.4 }}
        >
          <p
            style={{
              color: producto == "Bebida de Almendras" ? "#5C7C38" : "#001D85",
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
            color: producto == "Bebida de Almendras" ? "#7B6953" : "#001D85",
          }}
        >
          <div className="contenedor_producto">
            <motion.h5
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            >
              bebida
            </motion.h5>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
              src={`/src/assets/BebidadeAlmendras.png`}
            />
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
              style={{
                color: producto == "Bebida de Almendras" ? "#7B6953" : "white",
              }}
            >
              {producto == "Leche Blanca" ? sabor : "almendras"}
            </motion.p>
          </div>
          <div className="contenedor_mas">
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
            >
              +
            </motion.p>
          </div>
          <div className="contenedor_sabor">
            <motion.h5
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            >
              sabor
            </motion.h5>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
              src={`/src/assets/${
                producto == "Leche Blanca" ? tipoSabor : sabor
              }.png`}
            />
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
              style={{
                color: producto == "Bebida de Almendras" ? "#7B6953" : "white",
              }}
            >
              {producto == "Leche Blanca" ? tipoSabor : sabor}
            </motion.p>
          </div>
        </div>
        <motion.div
          className="contenedor_endulsante"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
          style={{
            borderColor:
              producto == "Bebida de Almendras" ? "#5C7C38" : "#041689",
          }}
        >
          <p
            style={{
              color: producto == "Bebida de Almendras" ? "#5C7C38" : "#041689",
            }}
          >
            {endulsante}
          </p>
        </motion.div>
        <motion.div
          onClick={() =>
            handleClick(tipo, producto, sabor, tipoSabor, endulsante)
          }
          className="boton_confirmar"
          style={{
            backgroundColor: selectColor(producto),
            color: producto == "Leche Blanca" ? "#041689" : "#fff",
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 1 }}
        >
          confirmar
        </motion.div>
        <BotonAtras color={producto == "Leche Blanca" ? "white" : "#757677"} />
      </div>
    </>
  );
};

export default ConfirmaTuPedidoSemilla;
