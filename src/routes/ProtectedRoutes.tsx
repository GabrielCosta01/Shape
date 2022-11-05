import { ReactNode, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { loginUserStore } from "../stores/loginUserStore";

const ProtectedRoutes = ({ children }: any) => {
  const [user, requestUser] = loginUserStore((state) => [
    state.user,
    state.requestUser,
  ]);

  const location = useLocation();

  useEffect(() => {
    requestUser();
  }, []);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
