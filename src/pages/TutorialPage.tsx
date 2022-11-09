import logo from "../assets/logo.png";
import createShape from "../assets/imgTutor.svg";
import modalShape from "../assets/imgTutor2.svg";
import folderGit from "../assets/imgTutor3.svg";
import terminal from "../assets/imgTutor4.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const TutorialPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <header className="h-20 px-40 flex flex-row justify-between items-center border-b-2 border-solid bg-bg-page border-gray-900  top-0 right-0 left-0">
        <img src={logo} alt="shape" className=" w-21 h-7" />
        <div className="flex gap-5 items-center">
          <a
            className="text-grey-5 font-medium hover:text-purple-2"
            href="#video"
          >
            Video de demonstração
          </a>
          <a
            className="text-grey-5 font-medium hover:text-purple-2"
            href="#create"
          >
            Criando Shape
          </a>
          <a
            className="text-grey-5 font-medium hover:text-purple-2"
            href="#using"
          >
            Utilizando o Shape
          </a>
          <Link
            className="font-medium bg-button-register text-white p-1 px-2 hover:ease-in duration-200 rounded-md shadow-[0_2px_20px_-1px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100"
            to={"/dashboard"}
          >
            Voltar
          </Link>
        </div>
      </header>
      <div className="flex flex-col gap-56 mt-52">
        <div className="flex items-center justify-center flex-col" id="video">
          <div className="">
            <h3 className="text-purple-1 font-semibold text-2xl mb-10 text-center">
              Como utilizar o Shape?
            </h3>
            <iframe
              src="https://player.vimeo.com/video/769156842?h=c6080a1757&loop=1&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="text-grey-5 mt-3">
              Video de demonstração de como se utilizar o Shape.
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-col"
          id="create"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-purple-1 font-semibold text-2xl mb-10 text-center">
              Criando o Shape
            </h3>
            <p
              className="text-grey-5 mt-3 text-center w-1/3"
              data-aos="zoom-in"
            >
              Após você planejar o seu projeto, qual linguagem vai usar, quais
              bibliotecas você irá utilizar, dentre outras coisas. Basta criar o
              seu Shape em nossa plataforma preenchendo todos os campos
              necessários.
            </p>
            <img
              src={createShape}
              alt="crie seu shape"
              className="mt-10"
              data-aos="fade-right"
            />
            <p
              className="text-grey-5 mt-24 text-center w-1/3"
              data-aos="zoom-in"
            >
              Após concluir a criação do Shape, vai aparecer uma notificação pra
              você sobre a criação do seu Shape, basta apenas copiar o Shape
              clicando na palavra “aqui”.
            </p>
            <img
              src={modalShape}
              alt="notificação shape criado"
              className="mt-10"
              data-aos="fade-left"
            />
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-col "
          id="using"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-purple-1 font-semibold text-2xl mb-10 text-center">
              Utilizando o Shape
            </h3>
            <p
              className="text-grey-5 mt-3 text-center w-1/3"
              data-aos="zoom-in"
            >
              Selecione a pasta aonde você deseja iniciar seu projeto, clique
              com o botão direito do mouse, e selecione o terminal Git Bash
              (recomendado), pode se utilizar outros terminais, porém requer uma
              configuração a mais em sua máquina.
            </p>
            <img
              src={folderGit}
              alt="pasta git"
              className="mt-10"
              data-aos="fade-left"
            />
            <p
              className="text-grey-5 mt-24 text-center w-1/3"
              data-aos="zoom-in"
            >
              Cole o comando no terminal que você copiou do Shape criado em
              nossa plataforma, aperte ENTER em seu teclado, para setar o Shape
              em sua maquina, após isso so utilizar o nome do seu Shape para ele
              fazer a configuração do seu ambiente automaticamente
            </p>
            <img
              src={terminal}
              alt="notificação shape criado"
              className="mt-10"
              data-aos="fade-right"
            />
            <h3
              className="text-purple-1 font-semibold text-2xl mb-24 text-center mt-24 w-1/3"
              data-aos="fade-down"
            >
              OBS: O comando com o nome do Shape vai ficar sempre salvo em sua
              máquina, então você pode utiliza-lo em outra pasta para iniciar um
              novo projeto.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
