import BotonHome from "../svg components/BotonHome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import CabezeraFormulario from "../svg components/CabezeraFormulario";
import FootFormulario from "../svg components/FootFormulario";
import Modal from "react-modal";

let initial = { nombre: "", correo: "" };
const pedido = {
  tipo: "",
  producto: "",
  sabor: "",
  tipoSabor: "",
  endulsante: "",
  toppings: [],
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#001D85",
    borderRadius: "40px",
    padding: "8vw"
  },
};

const Formulario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataform, setDataform] = useState(initial);
  const [dataPedido, setDataPedido] = useState(pedido);
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  const apiUrl = "https://api.shaketonibar.111.com.ec/api/pedido";

  useEffect(() => {
    setDataPedido({
      ...dataPedido,
      tipo: location.state.tipo,
      producto: location.state.producto,
      sabor: location.state.sabor,
      tipoSabor: location.state.tipoSabor,
      endulsante: location.state.endulsante,
      toppings: location.state.toppings,
    });
  }, []);

  const handleChange = (e) => {
    setDataform({ ...dataform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      user: dataform.nombre,
      correo: dataform.correo,
      tipo: dataPedido.tipo,
      producto: dataPedido.producto,
      sabor: dataPedido.sabor,
      tiposabor: dataPedido.tipoSabor,
      endulzante: dataPedido.endulsante,
      toppings:
        dataPedido.toppings == undefined
          ? ""
          : dataPedido.toppings.length == 1
          ? dataPedido.toppings[0]
          : dataPedido.toppings[0] + ", " + dataPedido.toppings[1],
      estado: "pendiente",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    };

    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((data) => {
        //Manipular los datos de la respuesta
        if (data.msg === "200") {
          navigate("/toni/thanks");
        } else {
          openModal();
        }
      })
      .catch((error) => {
        //Manejar cualquier error de la solicitud
        console.log("Ocurrió un error:", error);
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2
          style={{
            color: "white",
            fontFamily: "OakesGroteskBold",
            fontSize: "4.5vw",
          }}
        >
          Solo puedes pedir una vez!
        </h2>
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "white",
            border: "none",
            fontFamily: "SackersGothicStdHeavy",
            color: "#001D85",
            borderRadius: "100px",
            padding: "8px 20px"
          }}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default Formulario;
