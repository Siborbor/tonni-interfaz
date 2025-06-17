import { useState, useEffect } from "react";
import BottomBannerHome from "../svg components/BottomBannerHome";
import useProductStore from "../stores/useProductStore";
import TopBannerHome from "../svg components/TopBannerHome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/productService";

const Dashboard = () => {
  const navigate = useNavigate();
  const [marcas, setMarcas] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const nameUser = user ? user.nombre : "Usuario";
  const setProductsStore = useProductStore((state) => state.setProducts);
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productos = await getProducts();
        setProductsStore(productos);
        const uniqueMarcas = productos.reduce((acc, prod) => {
          const marca = prod.marcas;
          if (marca && !acc.some((m) => m.id === marca.id)) {
            acc.push(marca);
          }
          return acc;
        }, []);
        setMarcas(uniqueMarcas);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  

  const pressButton = (tonniOpcion, idProducto) => {
    setSelectedProduct(idProducto);
    if (tonniOpcion == "semillas") {
      navigate("/toni/EscojeTuProductoSemilla", {
      });
    } else {
      navigate("/toni/EscojeTuProducto", {
        state: { tonni: tonniOpcion },
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
            transition={{ circ: "circIn", duration: 0.5, delay: 0.2 }}
            exit={{ y: -100, opacity: 0 }}
          >
            Hola, {nameUser} 
          </motion.h5>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ circ: "circIn", duration: 0.5, delay: 0.3 }}
            exit={{ y: -100, opacity: 0 }}
          >
            ¡Escoge una opción para empezar!
          </motion.h2>
          <div className="contenedor_tarjeta">
            {marcas.map((marca) => (
              <motion.div
                key={marca.id}
                className="tarjeta_marca"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ circ: "circIn", duration: 0.7 }}
                exit={{ y: -100, opacity: 0 }}
                onClick={() => pressButton(marca.nombre, marca.id)}
                whileHover={{ scale: 1.05, cursor: "pointer", transition: { duration: 0.2 , ease: "easeInOut" } }}
              >
                <img src={marca.imagen} alt={marca.nombre} loading="lazy" />
              </motion.div>
            ))}
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
