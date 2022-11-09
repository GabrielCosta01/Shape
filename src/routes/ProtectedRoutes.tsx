import { ReactNode, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { loginUserStore } from "../stores/loginUserStore";

const ProtectedRoutes = ({ children }: any) => {
  const [user, requestUser, isLoadingUser] = loginUserStore((state) => [
    state.user,
    state.requestUser,
    state.isLoadingUser,
  ]);

  const location = useLocation();

  useEffect(() => {
    requestUser();
  }, []);

  return isLoadingUser ? (
    <AnimationLoading />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
