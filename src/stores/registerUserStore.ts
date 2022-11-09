import create from "zustand";
import { api } from "../services/api";
import { IData } from "../components/FormRegister/formRegister";

interface IRegisterStore {
  isOk: number | null;
  isLoading: boolean;
  registerUser: (data: IData) => void;
}

export const registerUserStore = create<IRegisterStore>((set, get) => ({
  isOk: null,
  isLoading: false,
  registerUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));
      const request = await api.post("signup", data);

      set(() => ({ isLoading: false, isOk: 1 }));
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false, isOk: 2 }));
    }
  },
}));
