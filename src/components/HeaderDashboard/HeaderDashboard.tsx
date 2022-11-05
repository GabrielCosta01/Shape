import logo from "../../assets/logo.png";
import userImg from "../../assets/user-image.jpg";
import estrela from "../../assets/estrela.svg";
import lapis from "../../assets/lapis.svg";
import saida from "../../assets/saida.svg";
import EditProfileModal from "../Modals/EditProfileModal";
import EditAvaliabeModal from "../Modals/EditAvaliabeModal";
import { Link } from "react-router-dom";
import handleModalStore from "../../stores/handleModalStore";

export const HeaderDashboard = () => {
  const [openModal] = handleModalStore((state) => [state.openModal]);
  const [openModalAvaliable] = handleModalStore((state) => [
    state.openModalAvaliable,
  ]);

  const backToHome = () => {
    localStorage.clear();
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
                  onClick={openModalAvaliable}
                >
                  Avaliar
                </span>
              </figure>

              <figure className="flex p-1.5">
                <img src={saida} alt="Sair da conta" />
                <Link
                  to={"/"}
                  onClick={() => backToHome()}
                  className="pl-1.5 text-xs font-medium cursor-pointer"
                >
                  Sair da conta
                </Link>
              </figure>
            </div>
          </div>
        </div>

        <EditProfileModal />
        <EditAvaliabeModal />
      </header>
    </>
  );
};
