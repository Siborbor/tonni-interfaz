import App from "./App.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import EscojeTuProducto from "./pages/EscojeTuProducto.jsx";
import EscojeTuSabor from "./pages/EscojeTuSabor.jsx";

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
    element: <EscojeTuSabor/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
