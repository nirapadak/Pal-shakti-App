import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

const UserRoute = ({ children }) => {
  const { token, user } = getAuth();

  if (!token) return <Navigate to="/register" />;

  if (user?.role !== "0") {
    return <Navigate to="/admin" />; // block admin
  }

  return children;
};

export default UserRoute;
