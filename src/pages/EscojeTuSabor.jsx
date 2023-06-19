import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import NumeroDos from "../svg components/Numerodos";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import dataproductos from "./../data/productos";

const EscojeTuSabor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabores, setSabores] = useState([]);
  const [comboProductos, setComboProductos] = useState(null);

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
    setComboProductos(dataproductos);
  }, []);

  useEffect(() => {
    const getSaborbyProduct = (dataproductos, producto) => {
      if (producto == "Griego") {
        setSabores(dataproductos.Griego.sabor);
      }
      if (producto == "LecheBlanca") {
        setSabores(dataproductos.LecheBlanca.sabor);
      }
      if (producto == "BebidadeAlmendras") {
        setSabores(dataproductos.BebidadeAlmendras.sabor);
      }
    };

    getSaborbyProduct(comboProductos, producto);
  }, [comboProductos]);

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
          <motion.div
            div
            className="numero_subtitulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.4 }}
          >
            <p>(Elige solo 1)</p>
          </motion.div>
        </div>
        <motion.div
          className="contenedor_productos"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
        >
          {sabores.map((el) => (
            <div className="producto">
              <img src={el.imagen} />
              <p>{el.title}</p>
            </div>
          ))}
        </motion.div>
        <BotonAtras color={producto == "LecheBlanca" ? "white" : "#757677"} />
      </div>
    </div>
  );
};

export default EscojeTuSabor;
