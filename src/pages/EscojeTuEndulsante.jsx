import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import BotonAtras from "../components/BotonAtrasComponent";
import Botonsiguiente from "../svg components/BotonSiguiente";
import { motion } from "framer-motion";
import { LogoLeche } from "../components/LogoLeche";

const EscojeTuEndulsante = () => {
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
  }, []);

  const handleClick = (tipo, producto, sabor, endulsante, tipoSabor) => {
    if (endulsante.length > 0) {
      navigate("/toni/confirmatupedido", {
        state: {
          tipo: tipo,
          producto: producto,
          sabor: sabor,
          tipoSabor: tipoSabor,
          endulsante: endulsante,
        },
      });
    }
  };

  return (
    <div>
      <div
        className="contenedor_escojeTuEndulsante"
        style={{
          backgroundImage: `url('/src/assets/backgroundLeche.jpg')`,
        }}
      >
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor-selects">
          <motion.div
            className={`select_${
              producto == "Bebida de Almendras"
                ? "BebidadeAlmendras"
                : "LecheBlanca"
            }`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.4 }}
          >
            <input
              type="radio"
              name="endulsante"
              id="azúcar"
              value="azúcar"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="azúcar">azúcar</label>
          </motion.div>
          <motion.div
            className={`select_${
              producto == "Bebida de Almendras"
                ? "BebidadeAlmendras"
                : "LecheBlanca"
            }`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
          >
            <input
              type="radio"
              name="endulsante"
              id="stevia"
              value="stevia"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="stevia">stevia</label>
          </motion.div>
          <motion.div
            className={`select_${
              producto == "Bebida de Almendras"
                ? "BebidadeAlmendras"
                : "LecheBlanca"
            }`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
          >
            <input
              type="radio"
              name="endulsante"
              id="sin endulzante"
              value="sin endulzante"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="sin endulzante">
              sin
              <br />
              endulzante
            </label>
          </motion.div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "10px",
            right: "80%",
          }}
        >
          <BotonAtras color={"white"} colorcirculo={"#ffffff4e"} />
        </div>
        <motion.div
          className="boton_siguiente"
          onClick={() =>
            handleClick(tipo, producto, sabor, endulsante, tipoSabor)
          }
          style={{
            display: "flex",
            position: "absolute",
            bottom: "30px",
            right: "29%",
          }}
          initial={{ y: 50, opacity: 0, x: "0px" }}
          animate={{ y: 0, opacity: 1, x: "0px" }}
          transition={{ back: "backIn", duration: 0.5 }}
        >
          <Botonsiguiente color={"white"} colorcirculo={"#ffffff4e"} />
        </motion.div>
        <LogoLeche />
      </div>
    </div>
  );
};

export default EscojeTuEndulsante;
