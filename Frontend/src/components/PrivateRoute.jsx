import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const PrivateRoute = ( { children } ) => {
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
