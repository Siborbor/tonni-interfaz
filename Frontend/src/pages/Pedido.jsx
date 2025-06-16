import { useEffect, useState } from "react";
import CabezeraPedido from "../svg components/CabezeraPedido";
const Pedido = () => {
  const [data, setData] = useState([]);
  const apiUrl = "https://api.shaketonibar.111.com.ec/api/pedido";

  useEffect(() => {
    function ordenarAsc(p_array_json, p_key) {
      p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
      });
    }

    function ordenarDesc(p_array_json, p_key) {
      ordenarAsc(p_array_json, p_key);
      p_array_json.reverse();
    }

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const newData = await response.json();
          ordenarAsc(newData, "id");
          ordenarDesc(newData, "id");
          console.log(newData);
          setData(newData);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const colorEstadoPedido = (estado) => {
    if (estado == "pendiente") {
      return "#FF313D";
    } else if (estado == "en proceso") {
      return "#DF9801";
    } else if (estado == "completado") {
      return "#11189B";
    } else {
      return "black";
    }
  };

  const handlePedido = (id, pedido, estado) => {
    console.log(id);
    const putData = {
      user: pedido.user,
      correo: pedido.correo,
      tipo: pedido.tipo,
      producto: pedido.producto,
      sabor: pedido.sabor,
      tiposabor: pedido.tipoSabor,
      endulzante: pedido.endulsante,
      toppings: pedido.toppings,
      estado: estado,
    };
    console.log(putData);

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(putData),
    };

    fetch(`https://api.shaketonibar.111.com.ec/api/pedidos/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        //Manipular los datos de la respuesta
        console.log(data);
      })
      .catch((error) => {
        //Manejar cualquier error de la solicitud
        console.log("Ocurrió un error:", error);
      });
  };

  return (
    <div>
      <div className="contenedor_pedidos">
        <div className="contenedor_cabezera_pedidos">
          <CabezeraPedido />
        </div>
        <div className="contenedor_titulo_pedidos">
          <p>Pedidos</p>
        </div>
        <div className="contenedor_colores">
          <div className="colores">
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#F2E2D1",
              }}
            ></div>
            <p>batidos</p>
          </div>
          <div className="colores">
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#C7E3FE",
              }}
            ></div>
            <p>yogurt con toppings</p>
          </div>
        </div>
        <div className="contenedor_datosPedidos">
          {data.map((el, index) => (
            <div
              key={index}
              className="pedido"
              style={{
                backgroundColor:
                  el.producto == "Griego" ? "#C7E3FE" : "#F2E2D1",
              }}
            >
              <p style={{ fontSize: "1.8vw" }}>
                <strong style={{ color: colorEstadoPedido(el.estado) }}>
                  estado:
                </strong>
                {el.estado}
              </p>
              <p>
                <strong>id pedido:</strong> <br /> {el.id}
              </p>
              <p>
                <strong>nombre:</strong> <br /> {el.user}
              </p>
              <p>
                <strong>producto:</strong> <br /> {el.producto}
              </p>
              <p>
                <strong>
                  {el.producto == "Leche Blanca" ? "tipo de leche" : "sabor"}
                </strong>{" "}
                <br /> {el.sabor}
              </p>
              {el.tiposabor != undefined && (
                <p>
                  <strong>sabor:</strong>
                  <br /> {el.tiposabor}
                </p>
              )}
              {el.endulzante != undefined && (
                <p>
                  <strong>endulzante:</strong> <br />
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
                  <button
                    className="boton_comensar"
                    style={{ backgroundColor: colorEstadoPedido(el.estado) }}
                    onClick={() => handlePedido(el.id, el, "en proceso")}
                  >
                    Empezar pedido
                  </button>
                </div>
              )}
              {el.estado == "en proceso" && (
                <div className="contenedor_boton">
                  <button
                    className="boton_comensar"
                    style={{ backgroundColor: colorEstadoPedido(el.estado) }}
                    onClick={() => handlePedido(el.id, el, "completado")}
                  >
                    Finalizar pedido
                  </button>
                </div>
              )}
              {el.estado == "completado" && (
                <div className="contenedor_boton">
                  <button
                    className="boton_comensar"
                    style={{ backgroundColor: colorEstadoPedido(el.estado) }}
                    onClick={() => handlePedido(el.id, el, "entregado")}
                  >
                    Entregar pedido
                  </button>
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
