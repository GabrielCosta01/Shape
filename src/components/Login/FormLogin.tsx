import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserStore } from "../../stores/loginUserStore";
import { schemaLogin } from "../../schemas/loginSchema";
import { ButtonLoginRegister } from "../Button/ButtonLoginRegister";
import { toastStore } from "../../stores/toastStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface IData {
  username: string;
  email: string;
  image: string;
  password: string;
}

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schemaLogin),
  });

  const [registerUser, isLoading, isOk, logout] = loginUserStore((state) => [
    state.loginUser,
    state.isLoading,
    state.isOk,
    state.logout,
  ]);

  const [toast] = toastStore((state) => [state.toast]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOk === 1) {
      toast("Login realizado com sucesso", "success", 2500);
      navigate("/dashboard");
      logout();
    } else if (isOk === 2) {
      toast("Opss... Ocorreu um problema", "error", 2500);
      logout();
    }
  }, [isOk]);

  return (
    <section>
      <form
        className="flex justify-center flex-col"
        onSubmit={handleSubmit(registerUser)}
      >
        <label className=" flex flex-col mb-8 relative">
          <input
            className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
            border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
            transition duration-250 valid:border-button-register
            "
            type="text"
            required
            {...register("email")}
          />

          <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
            E-mail
          </span>
          <span className="text-msg-error text-[1rem]">
            {errors.email && errors.email.message}
          </span>
        </label>

        <label className=" flex flex-col mb-8 relative">
          <input
            className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register valid:border-button-register outline-none
             transition duration-250 input-active
             "
            type="password"
            required
            {...register("password")}
          />

          <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
            Senha
          </span>

          <span className="text-msg-error text-[1rem]">
            {errors.password && errors.password.message}
          </span>
        </label>
        <ButtonLoginRegister
          text={"Login"}
          style={
            "bg-button-register w-[17.188rem] h-[2.563rem] text-xs  rounded-md	font-semibold shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 hover:ease-out	duration-300 text-white	"
          }
          loading={isLoading}
        />
      </form>
    </section>
  );
};

export default FormLogin;
