import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import NumeroTres from "../svg components/NumeroTres";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import dataproductos from "../data/productos";
import Botonsiguiente from "../svg components/BotonSiguiente";

const EscojeTuTopping = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabores, setSabores] = useState([]);
  const [dataTopping, setdataTopings] = useState([]);
  const [toppingSelect, setToppingSelect] = useState([]);
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
      color = "#fff";
    }

    return color;
  };

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setSabores(location.state.sabor);
    setComboProductos(dataproductos);
  }, []);

  useEffect(() => {
    setdataTopings(dataproductos.Griego.topic);
    console.log(tipo, producto, sabores);
  }, [comboProductos, producto]);

  const handleSelect = (topping) => {
    if (!toppingSelect.includes(topping) && toppingSelect.length < 2) {
      setToppingSelect([...toppingSelect, topping]);
    } else {
      let newArray = toppingSelect.filter(function (element) {
        return element !== topping;
      });
      setToppingSelect(newArray);
    }
  };

  const handleClik = () => {
    if(toppingSelect.length>0){
      navigate("/toni/confirmatuPedidoGriego", {
        state: { tipo, producto, sabor: sabores, toppings: toppingSelect },
      });
    }
  };

  return (
    <div>
      <div
        className={`contenedor_Escojetusabor`}
        style={{
          backgroundImage: `url(/src/assets/backgroundGriego.jpg)`,
        }}
      >
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor_texto">
          <motion.div
            className="numero_titulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.5 }}
          >
            <NumeroTres
              color={selectColor(producto)}
              colornumero={producto == "Griego" ? "#001D85" : "#fff"}
            />
            <p style={{ color: selectColor(producto) }}>Escoge tus toppings</p>
          </motion.div>
          <motion.div
            div
            className="numero_subtitulo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
          >
            <p style={{ color: producto == "Griego" ? "#fff" : "#757677" }}>
              (elige mínimo 1, máximo 2)
            </p>
          </motion.div>
        </div>
        <motion.div
          className="contenedor_productos"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
        >
          {dataTopping.map((el, index) => (
            <div
              key={index}
              className={`producto ${
                toppingSelect.includes(el.title) ? "select" : "unSelect"
              }`}
              onClick={() => handleSelect(el.title)}
            >
              <img src={el.imagen} />
              <p
                style={{
                  color: producto == "BebidadeAlmendras" ? "#7B6953" : "white",
                }}
              >
                {el.title}
              </p>
            </div>
          ))}
        </motion.div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "10px",
            right: "80%",
          }}
        >
          <BotonAtras color={producto == "LecheBlanca" ? "white" : "#757677"} />
        </div>
        <motion.div
          className="boton_siguiente"
          onClick={() => handleClik()}
          style={{
            display: "flex",
            position: "absolute",
            bottom: "30px",
            right: "6%",
          }}
          initial={{ y: 50, opacity: 0, x: "0px" }}
          animate={{ y: 0, opacity: 1, x: "0px" }}
          transition={{ back: "backIn", duration: 0.5 }}
        >
          <Botonsiguiente
            color={producto == "LecheBlanca" ? "white" : "#757677"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EscojeTuTopping;
