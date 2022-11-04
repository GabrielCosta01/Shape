import { Navigate } from "react-router-dom";
import { loginUserStore } from "../../stores/loginUserStore";

export const UserLogged = () => {
  const [isLogged] = loginUserStore((state) => [state.isLogged]);

  return <>{isLogged ? <Navigate to={"/dashboard"} /> : null}</>;
};
