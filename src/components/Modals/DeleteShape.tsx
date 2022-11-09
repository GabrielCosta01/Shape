import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { deleteShapeStore } from "../../stores/deleteShapeStore";
import { listShapesStore } from "../../stores/listShapesStore";

export const DeleteShape = () => {
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
      outline: "none",
    },
  };

  const [isModal, isCloseModalDelete, deleteShape, idShape] = deleteShapeStore(
    (state) => [
      state.isModal,
      state.isCloseModalDelete,
      state.deleteShape,
      state.idShape,
    ]
  );
  const [shapes, setShapes] = listShapesStore((state) => [
    state.shapes,
    state.setShapes,
  ]);

  const filteredShapes = (id: any) => {
    setShapes(shapes.filter((shape) => shape.id !== id));
  };

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={isCloseModalDelete}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-bg-form px-5 py-3 gap-6 flex flex-col items-center">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-purple-1 text-2xl font-semibold">
              Deletar Shape
            </h2>
            <IoClose
              onClick={() => isCloseModalDelete()}
              className="text-white text-3xl cursor-pointer"
            />
          </div>
          <p className="text-grey-2 text-xl text-center">
            Deseja mesmo deletar <br /> este Shape?
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                deleteShape(idShape);
                filteredShapes(idShape);
                isCloseModalDelete();
              }}
              className="text-white px-1.5 py-1.5 bg-btn-del w-36 rounded shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-btn-del/100 duration-300"
            >
              Deletar
            </button>
            <button
              onClick={() => isCloseModalDelete()}
              className="text-white px-1.5 py-1.5 bg-grey-1 w-36 rounded shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};
