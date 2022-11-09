import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimationLoading } from "../components/AnimationsComp/AnimationLoading";
import { loginUserStore } from "../stores/loginUserStore";

export const ProtectedRoutes = () => {

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