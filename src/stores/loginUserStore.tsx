import create from "zustand";
import { IData } from "../components/Login/FormLogin";
import { api } from "../services/api";

interface ILoginStore {
  isLoading: boolean;
  loginUser: (data: IData) => void;
  isLogged: boolean;
}

export const loginUserStore = create<ILoginStore>((set) => ({
  isLogged: false,
  isLoading: false,
  loginUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));

      const request = await api.post("login", data);

      console.log(request);

      set(() => ({ isLoading: false }));

      localStorage.setItem("@shape:token", request.data.accessToken);
      localStorage.setItem("@shape:userId", request.data.user.id);

      set(() => ({ isLogged: true }));
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false }));
    }
  },
}));
