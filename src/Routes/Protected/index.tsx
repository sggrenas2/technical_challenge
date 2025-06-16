import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../Hooks/useAuth";

export const Protected = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
