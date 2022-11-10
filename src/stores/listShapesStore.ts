import create from "zustand";
import { api } from "../services/api";

interface IShapes {
  libs: [];
  command: string;
  package: string;
  tool: string;
  language: string;
  userId: number | string;
  id: number;
  projectName: string;
}

interface IListShapeStore {
  isLoading: boolean;
  shapes: IShapes[];
  setShapes: (data: any) => void;
  list: () => void;
}

export const listShapesStore = create<IListShapeStore>((set) => ({
  isLoading: false,
  shapes: [],
  setShapes: (data) => {
    set(() => ({ shapes: data }));
  },
  list: async () => {
    const userId = localStorage.getItem("@shape:userId");
    const token = localStorage.getItem("@shape:token");

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
