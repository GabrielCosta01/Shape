import create from "zustand";
import { v4 as uuid } from "uuid";

export interface IToast {
  id: string;
  message: string;
  mode: modeColor;
  ms: number;
}

export type modeColor = "success" | "info" | "warning" | "error";

interface IToastStore {
  listToast: IToast[];
  toast: (message: string, mode: modeColor, ms: number) => void;
  removeToast: (id: string) => void;
}

export const toastStore = create<IToastStore>((set) => ({
  listToast: [],

  toast: (message: string, mode: modeColor, ms: number) => {
    const newToast = { id: uuid(), message, mode, ms };

    set((state) => ({ listToast: [...state.listToast, newToast] }));
  },

  removeToast: (id) => {
    set((state) => ({
      listToast: state.listToast.filter((toast) => toast.id !== id),
    }));
  },
}));
