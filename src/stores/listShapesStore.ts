import create from "zustand";
import { api } from "../services/api";

interface IShapes {
  command: string;
  package: string;
  tool: string;
  language: string;
  userId: number;
  id: number;
}

interface IListShapeStore {
  isLoading: boolean;
  shapes: IShapes[];
  list: () => void;
}

export const listShapesStore = create<IListShapeStore>((set) => ({
  isLoading: false,
  shapes: [],
  list: async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    try {
      set(() => ({ isLoading: true }));

      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/600/users/${userId}/shapes`);

      set(() => ({ shapes: data, isLoading: false }));
    } catch (error) {
      set(() => ({ isLoading: false }));
      console.error(error);
    }
  },
}));