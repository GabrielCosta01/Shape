import create from "zustand";

import { IData } from "../components/Login/FormLogin";
import { api } from "../services/api";

interface ILoginStore {
  isLoading: boolean;
  loginUser: (data: IData) => void;
}

export const loginUserStore = create<ILoginStore>((set) => ({
  isLoading: false,
  loginUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));
      const request = await api.post("login", data);
      console.log(request);
      set(() => ({ isLoading: false }));
      localStorage.setItem("@shape:token", request.data.accessToken);
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false }));
    }
  },
}));
