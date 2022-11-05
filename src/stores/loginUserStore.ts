import { useNavigate } from "react-router-dom";
import create from "zustand";
import { IData } from "../components/Login/FormLogin";
import { api } from "../services/api";

interface ILoginStore {
  isOk: number | null;
  isLoading: boolean;
  loginUser: (data: IData) => void;
  isLogged: boolean;
  logout: () => void;
  user: IUser | null;
  requestUser: () => void;
}

interface IUser {
  email: string;
  password: string;
  username: string;
  id: string;
  image: string;
}

export const loginUserStore = create<ILoginStore>((set) => ({
  isOk: null,
  isLogged: false,
  isLoading: false,
  loginUser: async (data: IData) => {
    try {
      set(() => ({ isLoading: true }));
      const request = await api.post("login", data);

      const { user: response, accessToken } = request.data;

      set(() => ({
        isLoading: false,
        isOk: 1,
        isLogged: true,
        user: response,
      }));

      localStorage.setItem("@shape:token", accessToken);
      localStorage.setItem("@shape:userId", response.id);
    } catch (error) {
      console.error(error);
      set(() => ({ isLoading: false, isOk: 2 }));
    }
  },

  logout: () => {
    set(() => ({
      isOk: null,
    }));
  },

  user: null,

  requestUser: async () => {
    const userId = localStorage.getItem("@shape:userId");
    const token = localStorage.getItem("@shape:token");

    if (token && userId) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get(`/600/users/${userId}`);

        set(() => ({ user: data }));
      } catch (error) {
        console.log(error);
      }
    }
  },
}));
