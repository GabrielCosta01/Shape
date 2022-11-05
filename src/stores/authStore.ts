import create from "zustand";
import { api } from "../services/api";

interface IUser {
  email: string;
  password: string;
  username: string;
  id: string;
  image: string;
}

interface IAuthUser {
  user: IUser[];
  requestUser: () => void;
}

export const authStore = create<IAuthUser>((set) => ({
  user: [],

  requestUser: async () => {
    const userId = localStorage.getItem("@shape:userId");
    const token = localStorage.getItem("@shape:token");

    if (token && userId) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get(`/600/users/${userId}`);

        set(() => ({
          user: data,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  },
}));
