import handleModalStore from "../../stores/handleModalStore";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

export interface IAvaliable {
  rate: string;
}

const EditAvaliabeModal = () => {
  const [modalAvaliableIsOpen] = handleModalStore((state) => [
    state.modalAvaliableIsOpen,
  ]);

  const [closeModalAvaliable] = handleModalStore((state) => [
    state.closeModalAvaliable,
  ]);

  const { register, handleSubmit } = useForm<IAvaliable>();
  const [avaliableShape] = handleModalStore((state) => [state.avaliableShape]);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(69, 67, 67, 0.6)",
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

  return (
    <Modal
      isOpen={modalAvaliableIsOpen}
      onRequestClose={closeModalAvaliable}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <form
        className="flex items-start flex-col p-10 gap-5 bg-bg-form w-96 min-h-full rounded-md"
        onSubmit={handleSubmit(avaliableShape)}
      >
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
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-purple-1"
          {...register("rate")}
        />

        <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
          Avaliar
        </button>
      </form>
    </Modal>
  );
};
export default EditAvaliabeModal;
