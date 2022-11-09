import { Link } from "react-router-dom";
import shapeLogo from "../assets/logo.png";
import books from "../assets/Vector.svg";
import { ReactLogo } from "../components/ReactLogo/ReactLogo";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CircleAnimation } from "../components/CirclesAnimation/CirclesAnimation";
import { motion } from "framer-motion";
<<<<<<< HEAD
import Instruction from "../components/Instruction/Instruction";
=======
>>>>>>> 67e4c28ff122bdf36cc117f29ee3bae823b5bd77
import { librariesContainer } from "../stores/libsData";

export const LandingPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const [listLibraries] = librariesContainer((state) => [state.listLibraries]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-bg-page w-auto h-auto min-h-screen text-white  flex flex-col gap-10">
        <header
          className="h-20 px-40 flex flex-row justify-between items-center border-b-2 border-solid border-gray-900"
          data-aos="fade-down"
        >
          <img className="w-15 h-7" src={shapeLogo} alt="Logo Shape" />
          <div className="flex items-center gap-6 font-medium">
            <Link
              to="/login"
              className="shadow-md hover:ease-in duration-200 hover:text-lg"
            >
              Entrar
            </Link>
            <Link
              className="font-medium bg-gradient-to-r from-button-gradient-2 to-button-gradient-1 shadow-md hover:ease-in duration-200 hover:shadow-purple-1/50 px-3 py-1 rounded-lg flex items-center"
              to="/register"
            >
              Cadastrar
            </Link>
          </div>
        </header>

        <main>
          <section className="h-full	flex flex-col justify-around items-center gap-5  z-10">
            <div
              className="flex flex-col justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ReactLogo />
              <div className="flex flex-col justify-center items-center gap-1">
                <img className="w-5/12" src={shapeLogo} alt="logo React" />
                <h3 className="text-lg">for React</h3>
              </div>
            </div>
            <h3
              className="text-lg text-grey-2"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              O seu melhor amigo na configuração do seu ambiente! Seja um
              shapado, configure seu ambiente de desenvolvimento com velocidade
              e facilidade.
            </h3>
            <CircleAnimation />
            <div
              data-aos="fade-up"
              className="max-w-2xl mx-80 mt-52 flex flex-row self-start items-center justify-center gap-1 text-purple-2 text-lg"
            >
              <img src={books} alt="icone livros juntos" className="mb-2" />
              <h4 className="text-center mb-2">Bibliotecas</h4>
            </div>
          </section>
          <section
            className="mt-1 h-heightSection border-b-2 border-t-2 border-solid border-gray-900 flex flex-col"
            data-aos="fade-up"
          >
            <div className=" flex items-center justify-evenly mt-12">
              <h1 className="text-4xl font-semibold" data-aos="fade-right">
                Bibliotecas disponiveis
                <br /> em nosso sistema
              </h1>
              <h2 className="text-grey-2 text-2xl" data-aos="fade-left">
                Bibliotecas que você pode escolher
                <br /> para iniciar seu projeto react
              </h2>
            </div>

            <div
              className="mt-32 flex justify-center items-center"
              data-aos="zoom-in"
            >
              <ul className="mx-40 flex flex-wrap gap-16 justify-center items-center text-2xl w-3/5">
                {listLibraries.map((elem) => (
<<<<<<< HEAD
                  <li
                    className="w-2/12 text-center cursor-default"
                    key={elem.name}
                  >
                    <h1 className="text-grey-2 hover:text-purple-2 hover:ease-in duration-200">
                      {elem.name}
                    </h1>
=======
                  <li className="w-2/12 text-center">
                    <p className="text-grey-2 hover:text-purple-2 hover:ease-in duration-200 cursor-default">
                      {elem.name}
                    </p>
>>>>>>> 67e4c28ff122bdf36cc117f29ee3bae823b5bd77
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Instruction />
        </main>

        <footer className="h-40	 flex gap-4 justify-around items-center relative">
          <img className="w-15 h-7" src={shapeLogo} alt="Logo Shape" />
          <h4 className="text-center text-xs text-grey-3 w-60">
            Projeto criado por estudantes da Kenzie Academy Brasil, como
            finalização do módulo de Front-End.
          </h4>
          <h4 className="text-center text-xs text-grey-3 w-60">
            Criadores: Luis Gabriel Modena - Gabriel Costa - Gabriel Carriel -
            Breno Leite - Wesley Carvalho - Talles Simão
          </h4>
        </footer>
      </div>
    </motion.div>
  );
};
