import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import NumeroDos from "../svg components/Numerodos";
import CabezeraInterfaz from "../components/CabezeraInterfaz";

const EscojeTuSabor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");

  const selectColor = (producto) => {
    let color;
    if (producto == "BebidadeAlmendras") {
      color = "#5C7C38";
    }
    if (producto == "LecheBlanca") {
      color = "#001D85";
    }
    if (producto == "Griego") {
      color = "#80B7FF";
    }

    return color;
  };

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
  }, []);

  return (
    <div>
      <div className={`contenedor_Escojetusabor ${producto}`}>
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor_texto">
          <motion.div
            className="numero_titulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.2 }}
          >
            <NumeroDos color={selectColor(producto)} />
            <p style={{ color: selectColor(producto) }}>
              Escoge tu sabor preferido
            </p>
          </motion.div>
          <div className="numero_subtitulo">
            <p>Escoge solo 1</p>
          </div>
        </div>
        <BotonAtras color={producto == "LecheBlanca" ? "white" : "#757677"} />
      </div>
    </div>
  );
};

export default EscojeTuSabor;
