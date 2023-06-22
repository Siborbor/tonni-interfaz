import React, { useEffect, useState } from "react";
import CabezeraPedido from "../svg components/CabezeraPedido";

const DataEjemplo = [
  {
    id: 1,
    tipo: "Semillas",
    producto: "BebidadeAlmendras",
    sabor: "chocolate",
    tipoSabor: undefined,
    endulsante: "sin endulzante",
    estado: "pendiente",
  },
  {
    id: 2,
    tipo: "Original",
    producto: "LecheBlanca",
    sabor: "descremada",
    tipoSabor: "chocolate",
    endulsante: "endulzante natural",
    estado: "pendiente",
  },
  {
    id: 3,
    tipo: "Semillas",
    producto: "BebidadeAlmendras",
    sabor: "banana",
    tipoSabor: undefined,
    endulsante: "endulzante artificial",
    estado: "pendiente",
  },
  {
    id: 4,
    tipo: "Original",
    producto: "LecheBlanca",
    sabor: "deslactosada",
    tipoSabor: "frutilla",
    endulsante: "endulzante artificial",
    estado: "completado",
  },
];

const Pedido = () => {
  const [data, setData] = useState(DataEjemplo);

  const handleClick = (id) => {
    const elementocompletado = data.map((el) => {
      if ((el.id = id)) {
        return { ...el, estado: "completado" };
      }
      return el
    });
    setData(elementocompletado);
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
        <div className="contenedor_datosPedidos">
          {data.map((el, index) => (
            <div key={index} className="pedido">
              <p>
                <strong style={{ color: "#80B7FF" }}>Estado:</strong>
                {el.estado}
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
              {el.endulsante != undefined && (
                <p>
                  <strong>Endulsante:</strong> <br />
                  {el.endulsante}
                </p>
              )}
              {el.estado != "completado" && (
                <button onClick={() => handleClick(el.id)}>
                  Completar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedido;
