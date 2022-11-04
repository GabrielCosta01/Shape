import create from "zustand";
import { IData } from "../components/Register/Form/formRegister";
import { api } from "../services/api";

interface IRegisterStore {
  isLoading: boolean;
  registerUser: (data: IData) => void;
}

export const registerUserStore = create<IRegisterStore>((set) => ({
  isLoading: false,
  registerUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));
      const request = await api.post("signup", data);
      console.log(request);
      set(() => ({ isLoading: false }));
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false }));
    }
  },
}));
