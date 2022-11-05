import { Navigate } from "react-router-dom";
import { loginUserStore } from "../../stores/loginUserStore";

export const UserLogged = () => {
  const [user] = loginUserStore((state) => [state.user]);

  console.log(user);

  return <>{user ? <Navigate to={"/dashboard"} /> : <Navigate to={"/"} />} </>;
};
