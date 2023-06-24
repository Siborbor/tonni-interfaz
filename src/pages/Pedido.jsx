import { useEffect, useState } from "react";
import CabezeraPedido from "../svg components/CabezeraPedido";
const Pedido = () => {
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost/apiToniBar/public/api/pedido";

  // const handleClick = (id) => {
  //   const elementocompletado = data.map((el) => {
  //     if ((el.id = id)) {
  //       return { ...el, estado: "completado" };
  //     }
  //     return el;
  //   });
  //   setData(elementocompletado);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl); // Reemplaza '/api/data' con la ruta de tu API
        if (response.ok) {
          const newData = await response.json();
          console.log(newData)
          setData(newData);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();

    // Configura un intervalo para consultar los datos cada cierto tiempo
    const interval = setInterval(fetchData, 1000); // Por ejemplo, cada 5 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="contenedor_pedidos">
        <div className="contenedor_cabezera_pedidos">
          <CabezeraPedido />
        </div>
        <div className="contenedor_titulo_pedidos">
          <p>Pedidos</p>
        </div>
        <div className="contenedor_datosPedidos">
          {data.map((el, index) => (
            <div key={index} className="pedido">
              <p>
                <strong style={{ color: "#80B7FF" }}>Estado:</strong>
                {el.estado}
              </p>
              <p>
                <strong>Id Pedido:</strong> <br /> {el.id}
              </p>
              <p>
                <strong>Nombre:</strong> <br /> {el.user}
              </p>
              <p>
                <strong>Producto:</strong> <br /> {el.producto}
              </p>
              <p>
                <strong>Sabor:</strong> <br /> {el.sabor}
              </p>
              {el.tipoSabor != undefined && (
                <p>
                  <strong>Sabor 2:</strong> <br /> {el.tipoSabor}
                </p>
              )}
              {el.endulzante != undefined && (
                <p>
                  <strong>Endulsante:</strong> <br />
                  {el.endulzante}
                </p>
              )}
              {el.toppings != undefined && (
                <p>
                  <strong>toppings:</strong> <br />
                  {el.toppings}
                </p>
              )}
              {el.estado == "pendiente" && (
                <div className="contenedor_boton">
                  <button className="boton_comensar">Comensar pedido</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedido;
