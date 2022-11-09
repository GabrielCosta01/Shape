import create from "zustand";
import { api } from "../services/api";
import { IAvaliable } from "../components/Modals/EditAvaliabeModal";
import { IEditProfile } from "../components/Modals/EditProfileModal";

interface IModal {
  modalIsOpen: boolean;
  modalAvaliableIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalAvaliable: () => void;
  closeModalAvaliable: () => void;
  avaliableShape: (data: IAvaliable) => void;
  editProfile: (data: IEditProfile) => void;
}

export const handleModalStore = create<IModal>((set) => ({
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

  avaliableShape: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      await api.post(`/600/users/${userId}/rates`, data);
    } catch (error) {
      console.error(error)
    }
  },

  editProfile: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      await api.patch(`/600/users/${userId}`, data);
    } catch (error) {
      console.error(error)
    }
  },
}));