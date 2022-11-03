import { Link } from "react-router-dom";
import logo from ".././assets/logo.png";
import Degrade from ".././assets/Degrade-Radial-Fundo.png";
import FormRegister from "../components/Register/Form/formRegister";

export default function Register() {
  return (
    <main className="w-screen	h-screen flex items-center	justify-center 	flex-col bg-radial bg-center bg-no-repeat bg-888px		">
      <aside className="flex flex-col  items-center	  max-w-xs  h-[33.25rem] w-[22.25rem]	 bg-bg-formRegister	">
        <nav className=" flex  flex-col">
          {/*    <img src={Degrade} /> */}
          {/* <Link to=""> */}
          <img src={logo} alt="Logo" className=" h-7	 mt-7		mb-2	" />
          {/* </Link> */}
          <p className="text-border-Inputs text-base	 mb-6	">Crie sua conta</p>
        </nav>
        <FormRegister />
      </aside>
    </main>
  );
}
