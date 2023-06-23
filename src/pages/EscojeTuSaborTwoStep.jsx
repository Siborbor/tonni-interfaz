import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import dataproductos from "../data/productos";
import NumeroTres from "../svg components/NumeroTres";

const EscojeTuSaborTwoStep = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabor, setSabor] = useState("");
  const [tipoSabor, setTiposabor] = useState([]);

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setSabor(location.state.sabor);
    setTiposabor(dataproductos.LecheBlanca.tipoSabor);
  }, []);

  const handleClick = (tipo, producto, sabor, tipoSaborElegido) => {
    navigate("/toni/EscojeTuProducto/EscojeTuSabor/EscojeTuEndulsante", {
      state: {
        tipo: tipo,
        producto: producto,
        sabor: sabor,
        tipoSabor: tipoSaborElegido,
      },
    });
  };

  return (
    <div>
      <div>
        <div className="contenedor_Escojetusabor "style={{
          backgroundImage: `url('/src/assets/backgroundLeche.jpg')`
        }}>
          <CabezeraInterfaz producto={producto} />
          <div className="contenedor_texto">
            <motion.div
              className="numero_titulo"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.5 }}
            >
              <NumeroTres color="#001D85" />
              <p style={{ color: "#001D85" }}>Escoge tu sabor preferido</p>
            </motion.div>
            <motion.div
              div
              className="numero_subtitulo"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            >
              <p style={{color:"#757677"}}>(Elige solo 1)</p>
            </motion.div>
          </div>
          <motion.div
            className="contenedor_productos"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
          >
            {tipoSabor.map((el, index) => (
              <div
                key={index}
                className="producto"
                onClick={() => handleClick(tipo, producto, sabor, el.title)}
              >
                <img src={el.imagen} />
                <p style={{color:"white"}}>{el.title}</p>
              </div>
            ))}
          </motion.div>
          <BotonAtras color="white" colorcirculo={"#ffffff4e"}/>
        </div>
      </div>
    </div>
  );
};

export default EscojeTuSaborTwoStep;
