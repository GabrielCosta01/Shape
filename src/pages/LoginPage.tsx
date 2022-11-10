import { Link } from "react-router-dom";
import logo from ".././assets/logo.png";
import FormLogin from "../components/Login/FormLogin";
import { motion } from "framer-motion";
import { CircleAnimationForms } from "../components/CircleAnimationForms/CirclesAnimation";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="w-screen	h-screen flex items-center	justify-center 	flex-col bg-radial bg-center bg-no-repeat bg-888px		">
        <div className="flex flex-col  items-center	  max-w-xs  w-[22.25rem] pb-5	 bg-bg-formRegister	z-10 rounded-md">
          <figure className=" flex items-center flex-col">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="flex justify-center h-7 ml-3 mt-7		mb-2	"
              />
            </Link>
            <p className="text-grey-1 text-base	 mb-6	">
              Faça login na sua conta
            </p>
          </figure>
          <FormLogin />
          <p className="text-grey-1 text-base	 mb-3 mt-3	">Não possui conta?</p>
          <Link
            to="/register"
            className={
              "bg-grey-1 flex justify-center items-center w-[17.188rem] h-[2.563rem] text-xs  rounded-md	font-semibold shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 hover:ease-out	duration-300 text-white	"
            }
          >
            Cadastrar
          </Link>
        </div>
        <CircleAnimationForms />
      </main>
    </motion.div>
  );
};

export default LoginPage;
