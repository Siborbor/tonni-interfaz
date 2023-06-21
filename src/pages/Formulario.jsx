import BotonHome from "../svg components/BotonHome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import CabezeraFormulario from "../svg components/CabezeraFormulario";
import FootFormulario from "../svg components/FootFormulario";

const Formulario = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="contrenedor_formulario">
        <div className="contenedor_cabezera">
          <motion.div
            className="contenedor_botonHome"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.2 }}
          >
            <div onClick={() => navigate("/", { replace: true })}>
              <BotonHome />
            </div>
            <p style={{ color: "white" }}>Volver al inicio</p>
          </motion.div>
          <motion.div
            className="contenedor_logos"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.3 }}
          >
            <OpcionOneCardHome />
          </motion.div>
          <motion.div
            className="decoracion_cabezera"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5 }}
          >
            <CabezeraFormulario />
          </motion.div>
        </div>
        <div className="contenido_formulario">
          <h5>
            ¡Espera!
            <br />
            Queremos saber más de ti.
          </h5>
          <h6>en pocos minutos, tu pedido estará listo.</h6>
          <form>
            <label>nombre</label>
            <input type="text" value="" />
            <label>correo electrónico</label>
            <input type="correo" value=""/>
            <input type="submit" value="enviar" />
          </form>
        </div>
        <div className="decoracion_foot">
            <FootFormulario/>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
