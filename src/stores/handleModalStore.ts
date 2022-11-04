import create from "zustand";

interface IModal {
  modalIsOpen: boolean;
  modalAvaliableIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalAvaliable: () => void;
  closeModalAvaliable: () => void;
}

const handleModalStore = create<IModal>((set) => ({
  modalIsOpen: false,
  modalAvaliableIsOpen: false,

  openModal: () => {
    set(() => ({ modalIsOpen: true }));
  },

  closeModal: () => {
    set(() => ({ modalIsOpen: false }));
  },

  openModalAvaliable: () => {
    set(() => ({ modalAvaliableIsOpen: true }));
  },

  closeModalAvaliable: () => {
    set(() => ({ modalAvaliableIsOpen: false }));
  },
}));

export default handleModalStore;
