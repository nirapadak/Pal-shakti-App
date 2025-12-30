import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

const AdminRoute = ({ children }) => {
  const { token, user } = getAuth();

  if (!token) return <Navigate to="/register" />;

  if (user?.role !== "1") {
    return <Navigate to="/dashboard" />; // block user
  }

  return children;
};

export default AdminRoute;
