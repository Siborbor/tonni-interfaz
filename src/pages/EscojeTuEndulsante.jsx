import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import BotonAtras from "../components/BotonAtrasComponent";
import Botonsiguiente from "../svg components/BotonSiguiente";
import { motion } from "framer-motion";

const EscojeTuEndulsante = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [producto, setProducto] = useState("");
  const [sabor, setSabor] = useState("");
  const [tipoSabor, setTiposabor] = useState("");
  const [endulsante, setEndulsante] = useState("");
  const [rigth, setRigth] = useState("50%");


  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
    setSabor(location.state.sabor);
    producto == "LecheBlanca" && setTiposabor(location.state.tipoSabor);
  }, []);

  useEffect(() => {
    if (endulsante.length > 0) {
      setRigth("80%");
    }
  }, [endulsante]);

  const selectEndulsante = (e) => {
    setEndulsante(e.target.value);
  };

  return (
    <div>
      <div className={`contenedor_escojeTuEndulsante ${producto}`}>
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor-selects">
          <div className={`select_${producto}`}>
            <input
              type="radio"
              name="endulsante"
              id="endulzante artificial"
              value="endulzante artificial"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="endulsante artificial">
              endulzante
              <br />
              artificial
            </label>
          </div>
          <div className={`select_${producto}`}>
            <input
              type="radio"
              name="endulsante"
              id="endulzante natural"
              value="endulzante natural"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="endulzante natural">
              endulzante
              <br />
              natural
            </label>
          </div>
          <div className={`select_${producto}`}>
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
          </div>
        </div>
        <motion.div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "10px",
            right: rigth,
          }}
        >
          <BotonAtras color={producto == "LecheBlanca" ? "white" : "#757677"} />
        </motion.div>
        <div
          className="boton_siguiente"
          style={{
            display: "flex",
            position: "absolute",
            bottom: "30px",
            right: "7%",
          }}
        >
          {endulsante && <Botonsiguiente color={producto == "LecheBlanca" ? "white" : "#757677"}/>}
        </div>
      </div>
    </div>
  );
};

export default EscojeTuEndulsante;
