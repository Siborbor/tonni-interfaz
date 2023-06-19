import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BotonHome from "../svg components/BotonHome";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import OpcionTwoCardHome from "../svg components/OpcionTwoCardHome";
import LogoGriego from "../svg components/LogoGriego";
import LogoAlmendras from "../svg components/LogoAlmendras";
import LogoLeche from "../svg components/LogoLeche";
import { motion } from "framer-motion";
import BotonAtras from "../components/BotonAtrasComponent";
import NumeroDos from "../svg components/Numerodos";

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
        <div className="contenedor_cabezera">
          <motion.div
            className="contenedor_botonHome"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5 }}
          >
            <div onClick={() => navigate("/", { replace: true })}>
              <BotonHome />
            </div>
            <p>Volver al inicio</p>
          </motion.div>
          <motion.div
            className="contenedor_logos"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5 }}
          >
            {producto == "Griego" && (
              <>
                <LogoGriego />
                <OpcionOneCardHome />
              </>
            )}
            {producto == "LecheBlanca" && (
              <>
                <LogoLeche />
                <OpcionOneCardHome />
              </>
            )}
            {producto == "BebidadeAlmendras" && (
              <>
                <LogoAlmendras />
                <OpcionTwoCardHome />
              </>
            )}
          </motion.div>
        </div>
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
