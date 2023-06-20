import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CabezeraInterfaz from "../components/CabezeraInterfaz";
import BotonAtras from "../components/BotonAtrasComponent";

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
    producto == "LecheBlanca" && setTiposabor(location.state.tipoSabor);
  }, []);

  return (
    <div>
      <div className={`contenedor_escojeTuEndulsante ${producto}`}>
        <CabezeraInterfaz producto={producto} />
        <div className="contenedor-selects">
          <div className="select">
            <input
              type="radio"
              name="endulsante"
              id="endulzante artificial"
              value="endulzante artificial"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="endulsante artificial">endulzante<br/>artificial</label>
          </div>
          <div className="select">
            <input
              type="radio"
              name="endulsante"
              id="endulzante natural"
              value="endulzante natural"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="endulzante natural">endulzante<br/>natural</label>
          </div>
          <div className="select">
            <input
              type="radio"
              name="endulsante"
              id="sin endulzante"
              value="sin endulzante"
              onChange={(e) => setEndulsante(e.target.value)}
            />
            <label htmlFor="sin endulzante">sin<br/>endulzante</label>
          </div>
        </div>
        <BotonAtras color={producto == "LecheBlanca" ? "white" : "#757677"} />
      </div>
    </div>
  );
};

export default EscojeTuEndulsante;
