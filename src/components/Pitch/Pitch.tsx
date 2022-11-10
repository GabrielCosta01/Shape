import { FcIdea } from "react-icons/fc";
import { FaReact, FaDev } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Pitch = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div
      className="flex items-center justify-center flex-col border-t-2 border-solid border-gray-900 mt-52"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="flex flex-col w-8/12 mt-8" data-aos="zoom-in">
        <h1
          className="text-left text-4xl font-semibold mt-8"
          data-aos="fade-right"
        >
          Configure o Seu Ambiente <br /> De Desenvolvimento
        </h1>

        <h3 className="text-grey-2 text-lg mt-2" data-aos="fade-right">
          Comece agora a configurar mais rapidamente o seu ambiente de
          desenvolvimento com o Shape!
        </h3>
      </div>

      <ul className="flex flex-wrap gap-4 justify-center  xl:w-9/12 2xl:w-8/12 mt-10">
        <li
          className="flex flex-col justify-between  w-80 h-40 bg-gradient-to-r from-bg-page to-purple-1 rounded-md p-4"
          data-aos="fade-right"
        >
          <FcIdea color="yellow" />
          <h2 className="text-xl ">Por quê o shape?</h2>
          <span className="text-xs text-grey-3 h-2/3">
            O shape te ajuda a configurar o ambiente de desenvolvimento muito
            mais rápido do que o comum. No shape, toda vez que você quiser criar
            um projeto, você fará isso com apenas um comando, trazendo agilidade
            e facilidade para a sua vida.
          </span>
        </li>

        <li
          className="flex flex-col justify-between w-80 h-40 bg-purple-1 rounded-md p-4 "
          data-aos="zoom-in"
        >
          <FaDev color="green" />
          <h2 className="text-xl">Para quem é o shape?</h2>
          <span className="text-xs text-grey-3  h-2/3">
            O shape é para você que é desenvolvedor e hoje pensa em criar um
            novo projeto, para você que está olhando para a tela do computador
            pensando qual lib deve instalar antes de codar.
          </span>
        </li>

        <li
          className="flex flex-col justify-between w-80 h-40 bg-gray-500 rounded-md bg-gradient-to-r from-purple-1 to-bg-page p-4"
          data-aos="fade-left"
        >
          <AiFillWarning color="red" />
          <h2 className="text-xl">Como estar no shape?</h2>
          <span className="text-xs text-grey-3  h-2/3">
            Basta você se cadastrar e logar na plataforma do shape, digitar o
            nome do comando, suas configurações, gerar o seu shape e colar no
            terminal. Ficou com dúvida?{" "}
            <Link className="text-purple-2" to={"/tutorial"}>
              Assista aqui um vídeo tutorial!
            </Link>
          </span>
        </li>

        <li
          className="flex flex-col justify-between w-80 h-40 bg-gray-500 rounded-md p-4 bg-gradient-to-r from-bg-page to-purple-1"
          data-aos="fade-up-right"
        >
          <MdOutlineVolunteerActivism color="pink" />
          <h2 className="text-xl">O shape está em evolução?</h2>
          <span className="text-xs text-grey-3  h-2/3">
            A equipe Shape não para! O shape está em constante crescimento, com
            ideias e novas configurações possíveis. Novidades em breve!
          </span>
        </li>

        <li
          className="flex flex-col justify-between w-80 h-40 bg-gray-500 rounded-md p-4 bg-gradient-to-r from-purple-1 to-bg-page"
          data-aos="fade-up-left"
        >
          <FaReact color="cyan" />
          <h2 className="text-xl">Qual o foco do shape?</h2>
          <span className="text-xs text-grey-3  h-2/3">
            Hoje o foco do shape é totalmente react.js! Porém, o shape está em
            constante crescimento, além de novas funcionalidades, pode surgir
            suporte para novos frameworks e libs, quem sabe?
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pitch;
