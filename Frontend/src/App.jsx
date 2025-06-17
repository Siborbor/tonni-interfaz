import "./Styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Páginas
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import EscojeTuProducto from "./pages/EscojeTuProducto";
import EscojeTuProductoSemilla from "./pages/EscojeTuProductoSemilla";
import EscojeTuSaborSemilla from "./pages/EscojeTuSaborSemilla";
import EscojeTuSaborLeche from "./pages/EscojeTuSaborLeche";
import EscojeTuSaborGriego from "./pages/EscojeTuSaborGriego";
import EscojeTuTopping from "./pages/EscojeTuTopping";
import EscojeTuSaborTwoStep from "./pages/EscojeTuSaborTwoStep";
import EscojeTuEndulsante from "./pages/EscojeTuEndulsante";
import EscojeTuEndulsanteSemilla from "./pages/EscojeTuEndulsanteSemilla";
import ConfirmaTuPedido from "./pages/ConfirmaTuPedido";
import ConfirmaTuPedidoGriego from "./pages/ConfirmaTuPedidoGriego";
import ConfirmaTuPedidoSemilla from "./pages/ConfirmaTuPedidoSemilla";
import Formulario from "./pages/Formulario";
import Thanks from "./pages/Thanks";
import Pedido from "./pages/Pedido";
import Register from './pages/Register';

// Rutas protegidas
import ProtectedRoute from "./components/PrivateRoute";
import RoleRoute from "./components/RoleRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/inicio",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuProducto",
    element: (
      <ProtectedRoute>
        <EscojeTuProducto />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuProductoSemilla",
    element: (
      <ProtectedRoute>
        <EscojeTuProductoSemilla />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuSaborSemilla",
    element: (
      <ProtectedRoute>
        <EscojeTuSaborSemilla />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuSaborLeche",
    element: (
      <ProtectedRoute>
        <EscojeTuSaborLeche />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuSaborGriego",
    element: (
      <ProtectedRoute>
        <EscojeTuSaborGriego />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTutopping",
    element: (
      <ProtectedRoute>
        <EscojeTuTopping />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuProducto/EscojeTuSabor/EscojeTuSaborTwoStep",
    element: (
      <ProtectedRoute>
        <EscojeTuSaborTwoStep />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuProducto/EscojeTuSabor/EscojeTuEndulsante",
    element: (
      <ProtectedRoute>
        <EscojeTuEndulsante />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/EscojeTuEndulsantesemilla",
    element: (
      <ProtectedRoute>
        <EscojeTuEndulsanteSemilla />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/confirmatuPedido",
    element: (
      <ProtectedRoute>
        <ConfirmaTuPedido />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/confirmatuPedidoGriego",
    element: (
      <ProtectedRoute>
        <ConfirmaTuPedidoGriego />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/confirmatuPedidoSemilla",
    element: (
      <ProtectedRoute>
        <ConfirmaTuPedidoSemilla />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/formulario",
    element: (
      <ProtectedRoute>
        <Formulario />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/thanks",
    element: (
      <ProtectedRoute>
        <Thanks />
      </ProtectedRoute>
    ),
  },
  {
    path: "toni/pedido",
    element: (
      <ProtectedRoute>
        <RoleRoute role="despachador">
          <Pedido />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
