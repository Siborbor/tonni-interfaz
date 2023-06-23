import "./Styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import EscojeTuProducto from "./pages/EscojeTuProducto.jsx";
import EscojeTuSaborLeche from "./pages/EscojeTuSaborLeche.jsx";
import EscojeTuSaborTwoStep from "./pages/EscojeTuSaborTwoStep.jsx";
import EscojeTuEndulsante from "./pages/EscojeTuEndulsante.jsx";
import ConfirmaTuPedido from "./pages/ConfirmaTuPedido.jsx";
import Formulario from "./pages/Formulario.jsx";
import Thanks from "./pages/Thanks";
import Pedido from "./pages/Pedido";
import EscojeTuSaborGriego from "./pages/EscojeTuSaborGriego";
import EscojeTuTopping from "./pages/EscojeTuTopping";
import ConfirmaTuPedidoGriego from "./pages/ConfirmaTuPedidoGriego";
import EscojeTuProductoSemilla from "./pages/EscojeTuProductoSemilla";
import EscojeTuSaborSemilla from "./pages/EscojeTuSaborSemilla";
import EscojeTuEndulsanteSemilla from "./pages/EscojeTuEndulsanteSemilla";
import ConfirmaTuPedidoSemilla from "./pages/ConfirmaTuPedidoSemilla";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "toni/EscojeTuProducto",
    element: <EscojeTuProducto />,
  },
  {
    path: "toni/EscojeTuProductoSemilla",
    element: <EscojeTuProductoSemilla/>,
  },
  {
    path: "toni/EscojeTuSaborSemilla",
    element: <EscojeTuSaborSemilla/>,
  },
  {
    path: "toni/EscojeTuSaborLeche",
    element: <EscojeTuSaborLeche />,
  },
  {
    path: "toni/EscojeTuSaborGriego",
    element:<EscojeTuSaborGriego/>,
  },
  {
    path: "toni/EscojeTutopping",
    element:<EscojeTuTopping/>,
  },
  {
    path: "toni/EscojeTuProducto/EscojeTuSabor/EscojeTuSaborTwoStep",
    element: <EscojeTuSaborTwoStep />,
  },
  {
    path: "toni/EscojeTuProducto/EscojeTuSabor/EscojeTuEndulsante",
    element: <EscojeTuEndulsante />,
  },
  {
    path: "toni/EscojeTuEndulsantesemilla",
    element: <EscojeTuEndulsanteSemilla/>,
  },
  {
    path: "toni/confirmatuPedido",
    element: <ConfirmaTuPedido/>,
  },
  {
    path: "toni/confirmatuPedidoGriego",
    element: <ConfirmaTuPedidoGriego/>,
  },
  {
    path: "toni/confirmatuPedidoSemilla",
    element: <ConfirmaTuPedidoSemilla/>,
  },
  {
    path: "toni/formulario",
    element: <Formulario/>,
  },
  {
    path: "toni/thanks",
    element:<Thanks/>,
  },
  {
    path: "toni/pedido",
    element:<Pedido/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
