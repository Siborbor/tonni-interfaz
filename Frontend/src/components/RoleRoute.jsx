import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const RoleRoute = ({ children, role }) => {
  const { user } = useAuthStore();
  return user?.rol === role ? children : <Navigate to="/" />;
};

export default RoleRoute;