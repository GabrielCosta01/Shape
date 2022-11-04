import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation/login";
import { useEffect } from "react";
import circulo from "../assets/circulo.svg";
import logo from "../assets/logo.png";
import { api } from "../services/api";
import { ClassNames } from "@emotion/react";

interface ILogin {
  email: string;
  password: string;
}
                                    
export const LoginPage = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const token = window.localStorage.getItem("@shape:token");
    if (token) {
      <Navigate to="/dashboard" replace={false} />
    }
  }, []);

  const loginUser = (data: ILogin) => {
    api
      .post("/login", data)
      .then((resp) => {
        localStorage.setItem("@shape:token" , resp.data.accessToken)
        console.log(resp)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex content-center items-center mx-auto">
      <img src={circulo} alt="shape" className="mx-auto"/>
      <form className="absolute top-4 h-[450px] w-96 max-w-[90%] justify-around items-center flex flex-col bg-grey-0 left-[15px]" onSubmit={handleSubmit(loginUser)}>
        <button onClick={() => <Navigate to="/" replace={false} />}>
          <img src={logo} alt="home" className="h-7" />
        </button>

        <input
          className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
             transition duration-250
             "
          type="text"
          {...register("email")}
        />
        <span className=" ">
          Email
        </span>

        <input
          className="w-[17.188rem] h-[2.438rem] text-white border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
             transition duration-250
             "
          type="text"
          {...register("password")}
        />
        <span className="">
          Senha
        </span>

        <button type="submit" className="w-[275px] h-[41px] bg-purple-1 text-grey-4 rounded-md">Log In</button>
 
        <p className="text-grey-1">Ainda não possui cadastro ?</p>

        <button className="text-grey-4 rounded-md bg-grey-1 w-[275px] h-[41px]"  onClick={() => <Navigate to="/register" replace={false} />} >Cadastrar</button>
      </form>
    </div>
  );
};