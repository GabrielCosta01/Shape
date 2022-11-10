import { object } from "yup";
import create from "zustand";
import { IAvaliable } from "../components/Modals/EditAvaliabeModal";
import { IEditProfile } from "../components/Modals/EditProfileModal";
import { api } from "../services/api";

interface IModal {
  modalIsOpen: boolean;
  modalAvaliableIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalAvaliable: () => void;
  closeModalAvaliable: () => void;
  avaliableShape: (data: IAvaliable) => void;
  editProfile: (data: IEditProfile) => void;
  setNull: () => void;
  isOk: number | null;
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

  isOk: null,

  setNull: () => {
    set(() => ({
      isOk: null,
    }));
  },

  avaliableShape: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      const request = await api.post(`/600/users/${userId}/rates`, data);
      set(() => ({
        isOk: 3,
      }));
    } catch (error) {
      console.log(error);
      set(() => ({
        isOk: 2,
      }));
    }
  },

  editProfile: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      const request = await api.patch(`/600/users/${userId}`, data);
      set(() => ({
        isOk: 1,
      }));
    } catch (error) {
      console.log(error);
      set(() => ({
        isOk: 2,
      }));
    }
  },
}));

export default handleModalStore;
