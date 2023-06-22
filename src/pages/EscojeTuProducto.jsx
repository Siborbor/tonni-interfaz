import { useState, useEffect } from "react";
import { useLocation,  useNavigate} from "react-router-dom";
import TopBannerEscojeTuProducto from "../svg components/TopBannerEscojeTuProducto";
import { motion } from "framer-motion";
import OpcionTwoCardHome from "../svg components/OpcionTwoCardHome";
import OpcionOneCardHome from "../svg components/OpcionOneCardHome";
import Welcome from "../svg components/Welcome";
import LetraEscojetuproducto from "../svg components/letraEscojetuproducto";
import LetraSelecionatuproducto from "../svg components/LetraSelecionatuproducto";
import ProductoGriego from "../svg components/ProductoGriego";
import ProductoLecheblanca from "../svg components/ProductoLecheBlanca";
import ProductoBebidaAlmendra from "../svg components/ProductoBebidaalmendra";
import BotonAtras from "../components/BotonAtrasComponent";

const EscojeTuProducto = () => {
  //inicialisamos el estado con la props de tipo de leche
  const [tonniTipo, setToniTipo] = useState(null);
  const [background, setBackground] =useState("");
  //utilizamos useLocation para obtener el estado de la pila anterior
  const location = useLocation();
  const navigate = useNavigate();

  //cuando la pantalla se renderiza por primera vez setea el estado de tipo de tonni
  useEffect(() => {
    setToniTipo(location.state.tonni);
    setBackground(location.state.background);
  }, []);

  const pressProduct = (productoSelecionado, background) => {
    if(productoSelecionado=="Griego"){
      navigate("/tonni/EscojeTuSaborGriego", {
        state: { tipo: tonniTipo, producto: productoSelecionado},
      });
    }else{
      navigate("/tonniOriginal/EscojeTuProducto/EscojeTuSabor", {
        state: { tipo: tonniTipo, producto: productoSelecionado, background:background },
      });
    }
    
  };

  return (
    <>
      <div
        className="contenedor_EscojeTuProducto"
        style={{
          backgroundImage:`url(${background})`,
        }}
      >
        {/* contenedor que contiene la cabezera */}
        <motion.div
          className="contenedor_imgTop_home"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5 }}
        >
          {/* contenedor que contiene el logo */}
          <motion.div className="logo_tonniEscojeProducto">
            {tonniTipo == "Original" ? (
              <OpcionOneCardHome />
            ) : (
              <OpcionTwoCardHome />
            )}
            {/* contenedor que contiene la palabra bienvenido*/}
          </motion.div>
          <motion.div className="welcome">
            <Welcome />
          </motion.div>
          {/* contenedor que contiene la palabra el fondo de la cabezera, se renderiza el dolor dependiendo de el tipo de leche*/}
          <TopBannerEscojeTuProducto
            color={tonniTipo == "Original" ? "#001D85" : "#5C7C38"}
          />
        </motion.div>
        {/* contenedor que contiene la frase escoje tu producto*/}
        <motion.div
          className="letra_eligeproducto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.6 }}
        >
          {tonniTipo == "Original" ? (
            <LetraEscojetuproducto />
          ) : (
            <LetraSelecionatuproducto />
          )}
        </motion.div>
        {/* contenedor que contiene los Productos*/}
        <motion.div
          className="contenedor_productos"
          style={{ width: tonniTipo == "Original" ? "77vw" : "40vw" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ back: "backIn", duration: 0.5, delay: 0.8 }}
        >
          {tonniTipo == "Original" ? (
            <>
              <ProductoGriego onClick={() => pressProduct("Griego","/src/assets/backgroundGriego.jpg")} />
              <ProductoLecheblanca
                onClick={() => pressProduct("LecheBlanca","/src/assets/backgroundLeche.jpg")}
              />
            </>
          ) : (
            <ProductoBebidaAlmendra
              onClick={() => pressProduct("BebidadeAlmendras", "/src/assets/backgroundSemillas.png")}
            />
          )}
        </motion.div>
        {/* contenedor que contiene el boton atras */}
        <BotonAtras color={"#757677"}/>
      </div>
    </>
  );
};

export default EscojeTuProducto;
