import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation/login";
import { useEffect } from "react";
import circulo from "../assets/circulo.svg";
import logo from "../assets/logo.png";
import { api } from "../services/api";

interface ILogin {
  email: string;
  password: string;
}
                                    
export const LoginPage = () => {
  const navigate = useNavigate();
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
      navigate("/dashboard");
    }
  }, []);

  const loginUser = (data: ILogin) => {
    api
      .post("/login", data)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex content-center items-center mx-auto">
      <img src={circulo} alt="shape" className="mx-auto w-888 h-888" />
      <form className="absolute flex flex-col h-900 bg-grey-1">
        <button onClick={() => navigate("/")}>
          <img src={logo} alt="home" className="bg-black" />
        </button>

        <input
          className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
             transition duration-250
             "
          type="text"
          {...register("email")}
        />
        <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
          Email
        </span>

        <input
          className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
             transition duration-250
             "
          type="text"
          {...register("password")}
        />
        <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
          Senha
        </span>

        <button type="submit">Log In</button>

        <p>Ainda não possui cadastro ?</p>

        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </form>
    </div>
  );
};