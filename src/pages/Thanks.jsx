import BottomBannerHome from "../svg components/BottomBannerHome";
import FraseThanks from "../svg components/FraseThanks";
import TopBannerHome from "../svg components/TopBannerHome";
import { delay, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tiempoEspera = 4000;
    const ejecutarDespuesDeTiempo = () => {
      navigate("/", { replace: true });
    };
    const timeoutId = setTimeout(ejecutarDespuesDeTiempo, tiempoEspera);
    // Limpia el timeout cuando el componente se desmonte
    return () => clearTimeout(timeoutId);
  }, []); //

  return (
    <>
      <div className="contenedor_home" style={{ backgroundColor: "#001d85" }}>
        <motion.div
          className="contenedor_imgTop_home"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <TopBannerHome color="white" />
        </motion.div>
        <motion.div
          className="contenedor_frase"
          style={{ width: "80vw" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay:0.3}}
        >
          <FraseThanks />
        </motion.div>
        <motion.div
          className="contenedor_imgbotton_home"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <BottomBannerHome />
        </motion.div>
      </div>
    </>
  );
};

export default Thanks;
