import logo from "../../assets/logo.png";
import userImg from "../../assets/user-image.jpg";
import estrela from "../../assets/estrela.svg";
import lapis from "../../assets/lapis.svg";
import saida from "../../assets/saida.svg";
import { useState } from "react";
import Modal from "react-modal";

export const HeaderDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modaAvaliablelIsOpen, setAvaliableModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
    },
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openAvaliableModal = () => {
    setAvaliableModalIsOpen(true);
  };

  const closeAvaliableModal = () => {
    setAvaliableModalIsOpen(false);
  };

  return (
    <>
      <header className="flex h-20 justify-around gap-40 items-center border-b-2 border-solid border-gray-900">
        <img src={logo} alt="shape-logo" className=" w-21 h-7" />
        <div className="flex flex-col items-end gap-0 group h-12 justify-center relative">
          <img
            src={userImg}
            alt="usuário-foto"
            className=" w-8 h-8 rounded-full border-2 border-solid border-button-gradient-1 cursor-pointer z-10"
          />

          <div className="bg-grey-4 w-44 rounded-md absolute mt-40 invisible group-hover:visible group">
            <div className="p-2">
              <span className="text-xs font-medium">@user.name</span>
            </div>
            <div className=" flex flex-col bg-grey-4 rounded-md">
              <figure className="flex p-1.5">
                <img src={lapis} alt="Editar Perfil" />
                <span
                  className="pl-1.5 text-xs font-medium cursor-pointer"
                  onClick={openModal}
                >
                  Editar perfil
                </span>
              </figure>

              <figure className="flex p-1.5">
                <img src={estrela} alt="Avaliar" />
                <span
                  className="pl-1.5 text-xs font-medium cursor-pointer"
                  onClick={openAvaliableModal}
                >
                  Avaliar
                </span>
              </figure>

              <figure className="flex p-1.5">
                <img src={saida} alt="Sair da conta" />
                <span className="pl-1.5 text-xs font-medium cursor-pointer">
                  Sair da conta
                </span>
              </figure>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          className="absolute"
        >
          <form className="flex items-start flex-col p-10 gap-5 bg-bg-form w-96 min-h-full rounded-md">
            <div className="min-w-full flex justify-center">
              <h1 className="text-xl text-white">Editar Perfil</h1>
            </div>

            <label htmlFor="user" className="text-grey-4 text-xs">
              Usuário
            </label>
            <input
              type="text"
              id="user"
              placeholder="Usuário"
              className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent outline-purple-1 outline"
            />

            <label htmlFor="email" className="text-grey-4 text-xs">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent outline-purple-1 outline"
            />

            <label htmlFor="password" className="text-grey-4 text-xs">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent outline-purple-1 outline"
            />

            <label htmlFor="img" className="text-grey-4 text-xs">
              Imagem
            </label>
            <input
              type="text"
              id="img"
              placeholder="Imagem"
              className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent outline-purple-1 outline"
            />

            <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
              Editar
            </button>
          </form>
        </Modal>

        <Modal
          isOpen={modaAvaliablelIsOpen}
          onRequestClose={closeAvaliableModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          className="absolute"
        >
          <form className="flex items-start flex-col p-10 gap-5 bg-bg-form w-96 min-h-full rounded-md">
            <div className="min-w-full flex justify-center">
              <h1 className="text-xl text-white">Avalie o Shape!</h1>
            </div>

            <label htmlFor="user" className="text-grey-4 text-xs">
              Qual seu feedback?
            </label>
            <input
              type="text"
              id="user"
              placeholder="Feedback"
              className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent outline-purple-1 outline"
            />
            <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
              Avaliar
            </button>
          </form>
        </Modal>
      </header>
    </>
  );
};
