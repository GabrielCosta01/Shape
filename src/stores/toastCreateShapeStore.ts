import create from "zustand";
import { v4 as uuid } from "uuid";

export interface IToastCreate {
  id: string;
  commandCreate: string;
}

interface IToastCreateStore {
  listToastCreate: IToastCreate[];
  toastCreate: (commandCreate: string) => void;
  removeToastCreate: (id: string) => void;
}

export const toastCreateShapeStore = create<IToastCreateStore>((set) => ({
  listToastCreate: [],

  toastCreate: (commandCreate: string) => {
    const newToastCreate = { id: uuid(), commandCreate };

    set((state) => ({
      listToastCreate: [...state.listToastCreate, newToastCreate],
    }));
  },

  removeToastCreate: (id) => {
    set((state) => ({
      listToastCreate: state.listToastCreate.filter((toast) => toast.id !== id),
    }));
  },
}));
