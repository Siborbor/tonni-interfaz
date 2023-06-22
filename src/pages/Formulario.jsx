import BotonHome from "../svg components/BotonHome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import CabezeraFormulario from "../svg components/CabezeraFormulario";
import FootFormulario from "../svg components/FootFormulario";

let initial = { nombre: "", correo: "" };
const pedido = {
  tipo: "",
  producto: "",
  sabor: "",
  tipoSabor: "",
  endulsante: "",
};

const Formulario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataform, setDataform] = useState(initial);
  const [dataPedido, setDataPedido] = useState(pedido);

  useEffect(() => {
    setDataPedido({
      ...dataPedido,
      tipo: location.state.tipo,
      producto: location.state.producto,
      sabor: location.state.sabor,
      tipoSabor: location.state.tipoSabor,
      endulsante: location.state.endulsante,
    });
  }, []);

  const handleChange = (e) => {
    setDataform({ ...dataform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataform);
    console.log(dataPedido);
  };

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
          <motion.h5
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.3 }}
          >
            ¡Espera!
            <br />
            Queremos saber más de ti.
          </motion.h5>
          <motion.h6
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.5 }}
          >
            en pocos minutos, tu pedido estará listo.
          </motion.h6>
          <motion.form
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ back: "backIn", duration: 0.5, delay: 0.7 }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>nombre</label>
            <input
              type="text"
              name="nombre"
              required
              autoComplete="off"
              value={dataform.name}
              onChange={(e) => handleChange(e)}
            />
            <label>correo electrónico</label>
            <input
              type="email"
              name="correo"
              autoComplete="off"
              required
              value={dataform.correo}
              onChange={(e) => handleChange(e)}
            />
            <input type="submit" value="enviar" />
          </motion.form>
        </div>
        <div className="decoracion_foot">
          <FootFormulario />
        </div>
      </div>
    </div>
  );
};

export default Formulario;
