import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import NumeroDos from "../svg components/Numerodos";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import dataproductos from "../data/productos";
import { LogoLeche } from "../components/LogoLeche";


const EscojeTuSaborLeche = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabores, setSabores] = useState([]);
  const [background, setBackground] = useState("");
  const [comboProductos, setComboProductos] = useState(null);

  const selectColor = (producto) => {
    let color;
    if (producto == "BebidadeAlmendras") {
      color = "#5C7C38";
    }
    if (producto == "Leche Blanca") {
      color = "#001D85";
    }
    if (producto == "Griego") {
      color = "#fff";
    }

    return color;
  };


  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setComboProductos(dataproductos);
    setBackground(location.state.background);
  }, []);

  useEffect(() => {
    const getSaborbyProduct = (dataproductos, producto) => {
      if (producto == "Griego") {
        setSabores(dataproductos.Griego.sabor);
      }
      if (producto == "Leche Blanca") {
        setSabores(dataproductos.LecheBlanca.sabor);
      }
    };

    getSaborbyProduct(comboProductos, producto);
  }, [comboProductos, producto]);

  const handleClick = (tipo, producto, sabor) => {
    navigate("/toni/EscojeTuProducto/EscojeTuSabor/EscojeTuSaborTwoStep", {
      state: { tipo: tipo, producto: producto, sabor: sabor },
    });
  };

  return (
    <div>
      <div
        className={`contenedor_Escojetusabor`}
        style={{
          backgroundImage: `url(/src/assets/backgroundLeche.jpg)`}}
      >
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor_texto">
          <motion.div
            className="numero_titulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.5 }}
          >
            <NumeroDos color={selectColor(producto)} colornumero={producto=="Griego"?"#001D85": "#fff"} />
            <p style={{ color: selectColor(producto) }}>
            Escoge tu tipo de leche preferida
            </p>
          </motion.div>
          <motion.div
            div
            className="numero_subtitulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
          >
            <p style={{color: "#757677"}}>(elige solo 1)</p>
          </motion.div>
        </div>
        <motion.div
          className="contenedor_productos"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
        >
          {sabores.map((el, index) => (
            <div
              key={index}
              className="producto"
              onClick={() => handleClick(tipo, producto, el.title)}
            >
              <img src={el.imagen} />
              <p style={{color: producto=="BebidadeAlmendras"?"#7B6953":"white" }}>{el.title}</p>
            </div>
          ))}
        </motion.div>
        <BotonAtras color={"white"} colorcirculo={"#ffffff4e"} />
         <LogoLeche/>
      </div>
    </div>
  );
};

export default EscojeTuSaborLeche;
