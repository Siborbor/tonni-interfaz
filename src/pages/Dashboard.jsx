import BottomBannerHome from "../svg components/BottomBannerHome";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import OpcionTwoCardHome from "../svg components/OpcionTwoCardHome";
import TopBannerHome from "../svg components/TopBannerHome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const pressButton = (tonniOpcion) => {
    if(tonniOpcion == "Semillas"){
      navigate("toni/EscojeTuProductoSemilla", {
        state: { tonni: tonniOpcion},
      });
    }else{
      navigate("/tonniOriginal/EscojeTuProducto", {
        state: { tonni: tonniOpcion},
      });
    }
  };

  return (
    <>
      <div className="contenedor_home">
        <motion.div
          className="contenedor_imgTop_home"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <TopBannerHome />
        </motion.div>
        <div className="contenedor_TextoBotones_home">
          <motion.h5
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ circ: "circIn", duration: 0.5, delay: 0.4 }}
            exit={{ y: -100, opacity: 0 }}
          >
            ¡Escoge una opción para empezar!
          </motion.h5>
          <div className="contenedor_tarjeta">
            <motion.div
              className="tarjeta"
              onClick={() => pressButton("Original")}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ circ: "circIn", duration: 0.5, delay: 0.6 }}
              exit={{ y: -100, opacity: 0 }}
            >
              <OpcionOneCardHome />
            </motion.div>
            <motion.div
              className="tarjeta"
              onClick={() => pressButton("Semillas")}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ circ: "circIn", duration: 0.5, delay: 0.7 }}
              exit={{ y: -100, opacity: 0 }}
            >
              <OpcionTwoCardHome />
            </motion.div>
          </div>
        </div>
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

export default Dashboard;
