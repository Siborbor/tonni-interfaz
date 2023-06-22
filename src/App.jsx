import "./Styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import EscojeTuProducto from "./pages/EscojeTuProducto.jsx";
import EscojeTuSabor from "./pages/EscojeTuSabor.jsx";
import EscojeTuSaborTwoStep from "./pages/EscojeTuSaborTwoStep.jsx";
import EscojeTuEndulsante from "./pages/EscojeTuEndulsante.jsx";
import ConfirmaTuPedido from "./pages/ConfirmaTuPedido.jsx";
import Formulario from "./pages/Formulario.jsx";
import Thanks from "./pages/Thanks";
import Pedido from "./pages/Pedido";
import EscojeTuSaborGriego from "./pages/EscojeTuSaborGriego";
import EscojeTuTopping from "./pages/EscojeTuTopping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "tonniOriginal/EscojeTuProducto",
    element: <EscojeTuProducto />,
  },
  {
    path: "tonniOriginal/EscojeTuProducto/EscojeTuSabor",
    element: <EscojeTuSabor />,
  },
  {
    path: "tonni/EscojeTuSaborGriego",
    element:<EscojeTuSaborGriego/>,
  },
  {
    path: "toni/EscojeTutopping",
    element:<EscojeTuTopping/>,
  },
  {
    path: "tonni/EscojeTuProducto/EscojeTuSabor/EscojeTuSaborTwoStep",
    element: <EscojeTuSaborTwoStep />,
  },
  {
    path: "tonni/EscojeTuProducto/EscojeTuSabor/EscojeTuEndulsante",
    element: <EscojeTuEndulsante />,
  },
  {
    path: "tonni/confirmatuPedido",
    element: <ConfirmaTuPedido/>,
  },
  {
    path: "tonni/formulario",
    element: <Formulario/>,
  },
  {
    path: "tonni/thanks",
    element:<Thanks/>,
  },
  {
    path: "tonni/pedido",
    element:<Pedido/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
