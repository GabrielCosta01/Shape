import handleModalStore from "../../stores/handleModalStore";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { loginUserStore } from "../../stores/loginUserStore";
import { IoClose } from "react-icons/io5";

export interface IEditProfile {
  email: string;
  image: string;
  username: string;
  password: string;
}

const EditProfileModal = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
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

  const { register, handleSubmit } = useForm<IEditProfile>();
  const [editProfile, modalIsOpen, closeModal] = handleModalStore((state) => [
    state.editProfile,
    state.modalIsOpen,
    state.closeModal,
  ]);
  const [user] = loginUserStore((state) => [state.user]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <form
        className="flex items-start flex-col p-8 gap-5 bg-bg-form w-96 min-h-full rounded-md"
        onSubmit={handleSubmit(editProfile)}
      >
        <div className="min-w-full flex justify-between">
          <h1 className="text-xl text-white">Editar Perfil</h1>
          <IoClose
            onClick={closeModal}
            className="text-white text-3xl cursor-pointer"
          />
        </div>

        <label htmlFor="user" className="text-grey-4 text-xs">
          Usuário
        </label>
        <input
          type="text"
          id="user"
          placeholder="Usuário"
          defaultValue={user?.username}
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("username")}
        />

        <label htmlFor="email" className="text-grey-4 text-xs">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          defaultValue={user?.email}
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("email")}
        />

        <label htmlFor="img" className="text-grey-4 text-xs">
          Imagem
        </label>
        <input
          type="text"
          id="img"
          placeholder="Imagem"
          defaultValue={user?.image}
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("image")}
        />
        <label htmlFor="password" className="text-grey-4 text-xs">
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          required
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("password")}
        />

        <div className="w-2/4 flex items-center gap-1">
          <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
            Editar
          </button>
          <button
            onClick={closeModal}
            className="min-w-full h-10 mt-2 bg-grey-1  text-base font-medium text-white rounded shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
          >
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
