import create from "zustand";

interface iCreate {
  isModal: boolean;
  isOpenModal: () => void;
  isCloseModal: () => void;
}

export const editShapeStore = create<iCreate>((set) => ({
  isModal: false,
  isOpenModal: () => {
    set(() => ({ isModal: true }));
  },
  isCloseModal: () => {
    set(() => ({ isModal: false }));
  },
}));
