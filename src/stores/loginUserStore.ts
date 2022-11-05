import create from "zustand";
import { IData } from "../components/Login/FormLogin";
import { api } from "../services/api";

interface ILoginStore {
  isOk: number | null;
  isLoading: boolean;
  loginUser: (data: IData) => void;
  isLogged: boolean;
}

export const loginUserStore = create<ILoginStore>((set) => ({
  isOk: null,
  isLogged: false,
  isLoading: false,
  loginUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));
      const request = await api.post("login", data);
      set(() => ({ isLoading: false, isOk: 1, isLogged: true }));

      localStorage.setItem("@shape:token", request.data.accessToken);
      localStorage.setItem("@shape:userId", request.data.user.id);
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false, isOk: 2 }));
    }
  },
}));
