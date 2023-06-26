import BottomBannerHome from "../svg components/BottomBannerHome";
import FraseThanks from "../svg components/FraseThanks";
import TopBannerHome from "../svg components/TopBannerHome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogotonniWhite from "../svg components/LogotonniWhite";

const Thanks = () => {
  const navigate = useNavigate();

   useEffect(() => {
     const tiempoEspera = 5500;
     const ejecutarDespuesDeTiempo = () => {
       navigate("/", { replace: true });
     };
     const timeoutId = setTimeout(ejecutarDespuesDeTiempo, tiempoEspera);
     //Limpia el timeout cuando el componente se desmonte
     return () => clearTimeout(timeoutId);
   }, []); 

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
          <div className="logoTonniWhite">
            <LogotonniWhite />
          </div>
        </motion.div>
        <motion.div
          className="contenedor_frase"
          style={{ width: "80vw" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.3 }}
        >
          <FraseThanks />
        </motion.div>
        <motion.div
          className="floating flotante contenedor_deco1"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.5 }}
        >
          <img src="/src/assets/frutilladeco.png" alt="" />
        </motion.div>
        <motion.div
          className="floating flotante contenedor_deco2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
        >
          <img src="/src/assets/chispa1.png" alt="" />
        </motion.div>
        {/* <motion.div
          className="flotante contenedor_deco3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
        >
          <img src="/src/assets/almendra1.png" alt="" />
        </motion.div> */}
        {/* <motion.div
          className="floating flotante contenedor_deco4"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 1}}
        >
          <img src="/src/assets/arandano.png" alt="" />
        </motion.div> */}
        <motion.div
          className="floating flotante contenedor_deco5"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.9 }}
        >
          <img src="/src/assets/frutilladeco.png" alt="" />
        </motion.div>
        <motion.div
          className="floating flotante contenedor_deco6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
        >
          <img src="/src/assets/chispa2.png" alt="" />
        </motion.div>
        <motion.div
          className="floating flotante contenedor_deco7"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
        >
          <img src="/src/assets/almendra2.png" alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Thanks;
