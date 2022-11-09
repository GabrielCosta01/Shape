import create from "zustand";
import { IData } from "../components/Register/Form/formRegister";
import { api } from "../services/api";
interface IRegisterStore {
  isOk: number | null;
  isLoading: boolean;
  setNull: () => void;
  registerUser: (data: IData) => void;
}

export const registerUserStore = create<IRegisterStore>((set, get) => ({
  isOk: null,
  isLoading: false,
  setNull: () => {
    set(() => ({
      isOk: null,
    }));
  },
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
