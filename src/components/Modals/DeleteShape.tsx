import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { editShapeStore } from "../../stores/editShapeStore";
import { motion } from "framer-motion";

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

    const [isModal, isCloseModal] = editShapeStore((state) => [
        state.isModal,
        state.isCloseModal,
    ]);

    return (
        <Modal
        isOpen={isModal}
        onRequestClose={isCloseModal}
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
            <h2>Deletar Shape</h2>
            <IoClose />
            <p>Deseja mesmo deletar este Shape?</p>
            <div>
                <button>Deletar</button>
                <button>Cancelar</button>
            </div>
        </motion.div>
        </Modal>
    );
};
