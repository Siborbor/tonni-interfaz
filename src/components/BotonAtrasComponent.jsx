import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BotonAtras from "../svg components/BotonAtras"

const BotonAtrasComponent = ({color}) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="boton_atras"
        onClick={() => navigate(-1)}
        initial={{ y: 50, opacity: 0, x: "50%" }}
        animate={{ y: -10, opacity: 1, x: "50%" }}
        transition={{ back: "backIn", duration: 0.5 }}
      >
        <BotonAtras color={color}/>
      </motion.div>
    </>
  );
};

export default BotonAtrasComponent;
