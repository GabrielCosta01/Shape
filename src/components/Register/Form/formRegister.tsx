import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { ButtonLoginRegister } from "../../Button/ButtonLoginRegister";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

interface IData {
  username: string;
  email: string;
  image: string;
  password: string;
}

export default function FormRegister() {
  const schemaRegister = yup.object().shape({
    username: yup.string().required("Insira o usuario"),
    email: yup
      .string()
      .required("Insira o Email")
      .email("Insira um email válido"),
    image: yup.string().required("Insira a Imagem"),
    password: yup
      .string()
      .required("Cadastre a senha")
      .min(6, "Minimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schemaRegister),
  });

  function dataRegister(data: IData) {
    api
      .post("signup", data)
      .then((response) => console.log("RegistroComSucesso =>", response))
      .catch((error) => console.log("Registro com erro =>", error));
  }

  return (
    <section>
      <form className="flex  flex-col" onSubmit={handleSubmit(dataRegister)}>
        <label className=" flex flex-col mb-8 relative">
          <input
            className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
             border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
             transition duration-250 valid:border-button-register
             "
            type="text"
            required
            {...register("username")}
          />
          <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
            Usuario
          </span>

          <span className="text-msg-error text-[1rem]">
            {errors.username && errors.username.message}
          </span>
        </label>

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

        <label className=" flex flex-col mb-8 relative ">
          <input
            className="w-[17.188rem] h-[2.438rem] text-white   border-2 px-4
            border-border-Inputs bg-transparent rounded focus:border-button-register outline-none
            transition duration-250 valid:border-button-register
            "
            type="text"
            required
            {...register("image")}
          />

          <span className="text-white text-sm input-text text-opacity-60	 absolute left-0 top-2.5  mx-4 transition duration-250 ">
            Imagem (URL)
          </span>

          <span className="text-msg-error text-[1rem]">
            {errors.image && errors.image.message}
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
          text={"Criar conta"}
          style={
            "bg-button-register w-[17.188rem] h-[2.563rem] text-xs  rounded-md	font-semibold shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 hover:ease-out	duration-300 text-white	"
          }
        />
      </form>
    </section>
  );
}
