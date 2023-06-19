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

  useEffect(() => {
    setTipo(location.state.tipo);
    setProducto(location.state.producto);
  }, []);

  return (
    <div>
      <div className={`contenedor_Escojetusabor ${producto}`}>
        <CabezeraInterfaz producto={producto}/>
        <div className="contenedor_texto">
            <div className="numero_titulo">
                <NumeroDos/>
                <p>Escoge tu sabor preferido</p>
            </div>
            <div className="numero_subtitulo">
                
            </div>
        </div>
        <BotonAtras color={producto=="LecheBlanca"?"white":"#757677"}/>
      </div>
    </div>
  );
};

export default EscojeTuSabor;
