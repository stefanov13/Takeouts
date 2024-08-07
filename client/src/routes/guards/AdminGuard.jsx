import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminGuard = () => {
  const { user } = useAuth();

  return user.email === "test@mail.com" ? <Outlet /> : <Navigate to="/404" />;
};

export default AdminGuard;
