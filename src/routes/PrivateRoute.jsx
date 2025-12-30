import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

const PrivateRoute = ({ children }) => {
  const { token } = getAuth();
  return token ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
