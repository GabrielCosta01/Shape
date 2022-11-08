import handleModalStore from "../../stores/handleModalStore";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

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
          required
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
          required
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("email")}
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

        <label htmlFor="img" className="text-grey-4 text-xs">
          Imagem
        </label>
        <input
          type="text"
          id="img"
          placeholder="Imagem"
          required
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("image")}
        />

        <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
          Editar
        </button>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
