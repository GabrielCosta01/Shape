import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";
import handleModalStore from "../../stores/handleModalStore";
export interface IAvaliable {
  rate: string;
}
interface iRating {
  rating: number;
  setRating: () => void;
}
const EditAvaliabeModal = () => {
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

  const [avaliableShape, closeModalAvaliable, modalAvaliableIsOpen] =
    handleModalStore((state) => [
      state.avaliableShape,
      state.closeModalAvaliable,
      state.modalAvaliableIsOpen,
    ]);

  const { register, handleSubmit } = useForm<IAvaliable>();
  const [ratingStar, setRatingStar] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<any>(null);

  const newDataRate = (data: IAvaliable) => {
    const newData = { ...data, ratingStar };
    avaliableShape(newData);
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
        className="flex items-start flex-col p-8 gap-5 bg-bg-form w-96 min-h-full rounded-md"
        onSubmit={handleSubmit(newDataRate)}
      >
        <div className="min-w-full flex justify-center">
          <h1 className="text-xl text-white">Avalie o Shape!</h1>
        </div>
        <div className="flex items-center w-full">
          {[...Array(5)].map(( _, i) => {
            let ratingValue = i + 1;
            return (
              <div className="w-full" key={i}>
                <label>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRatingStar(ratingValue)}
                  />

                  <FaStar
                    className="cursor-pointer duration-200 "
                    color={
                      ratingValue <= (ratingStar || hoverRating)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    size={30}
                    onMouseEnter={() => setHoverRating(ratingValue)}
                    onMouseLeave={() => setHoverRating(null)}
                  />
                </label>
              </div>
            );
          })}
        </div>

        <label htmlFor="user" className="text-grey-4 text-xs">
          Qual seu feedback?
        </label>
        <input
          type="text"
          id="user"
          placeholder="Feedback"
          required
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
          {...register("rate")}
        />
        <div className="w-2/4 flex items-center gap-1">
          <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
            Avaliar
          </button>
          <button
            onClick={closeModalAvaliable}
            className="min-w-full h-10 mt-2 bg-grey-1  text-base font-medium text-white rounded shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
          >
            {/* min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse */}
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default EditAvaliabeModal;
