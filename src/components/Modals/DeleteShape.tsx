import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { deleteShapeStore } from "../../stores/deleteShapeStore";

export const DeleteShape = () => {
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.125)",
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

    const [isModal, isCloseModalDelete, deleteShape, idShape] = deleteShapeStore((state) => [
        state.isModal,
        state.isCloseModalDelete,
        state.deleteShape,
        state.idShape
    ]);

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
            <div className="bg-bg-form px-4 py-2 gap-6 flex flex-col items-center">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-purple-1 text-xl font-semibold">Deletar Shape</h2>
                    <IoClose className="text-red-600 text-2xl"/>
                </div>
                <p className="text-grey-2 text-xl text-center">Deseja mesmo deletar <br /> este Shape?</p>
                <div className="flex gap-4">
                    <button 
                        onClick={() => {
                            deleteShape(idShape)
                            isCloseModalDelete()
                        }}
                        className="text-white px-1.5 py-1.5 bg-btn-del w-36 rounded">Deletar
                    </button>
                    <button 
                        onClick={() => isCloseModalDelete()}
                        className="text-white px-1.5 py-1.5 bg-grey-1 w-36 rounded">Cancelar
                    </button>
                </div>
            </div>
        </motion.div>
        </Modal>
    );
};
