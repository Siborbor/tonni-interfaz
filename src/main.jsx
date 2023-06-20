import App from "./App.jsx";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import EscojeTuProducto from "./pages/EscojeTuProducto.jsx";
import EscojeTuSabor from "./pages/EscojeTuSabor.jsx";
import EscojeTuSaborTwoStep from "./pages/EscojeTuSaborTwoStep.jsx";
import EscojeTuEndulsante from "./pages/EscojeTuEndulsante.jsx";

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
    path: "tonni/EscojeTuProducto/EscojeTuSabor/EscojeTuSaborTwoStep",
    element: <EscojeTuSaborTwoStep />,
  },
  {
    path: "tonni/EscojeTuProducto/EscojeTuSabor/EscojeTuEndulsante",
    element: <EscojeTuEndulsante />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
