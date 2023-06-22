import {useNavigate } from "react-router-dom";
import BotonHome from "../svg components/BotonHome";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import OpcionTwoCardHome from "../svg components/OpcionTwoCardHome";
import LogoGriego from "../svg components/LogoGriego";
import LogoAlmendras from "../svg components/LogoAlmendras";
import LogoLeche from "../svg components/LogoLeche";
import { motion } from "framer-motion";

const CabezeraInterfaz = ({producto}) => {
  const navigate = useNavigate();
  return (
    <div>
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
          <p style={{color: producto=="Griego" ? "#fff" : "#001D85"}}>Volver al inicio</p>
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
    </div>
  );
};

export default CabezeraInterfaz;
