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

  avaliableShape: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      const request = await api.post(`/600/users/${userId}/rates`, data);
      console.log(request);
    } catch (error) {}
  },

  editProfile: async (data) => {
    try {
      const userId = localStorage.getItem("@shape:userId");
      const request = await api.patch(`/600/users/${userId}`, data);
      console.log(request);
    } catch (error) {}
  },
}));

export default handleModalStore;
