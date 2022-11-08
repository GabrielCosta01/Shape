import create from "zustand";

interface ICommandStore {
  command: string;
  setCommand: (data: string) => void;
}

export const commandStore = create<ICommandStore>((set) => ({
  command: "",
  setCommand: (data) => {
    set(() => ({ command: data }));
  },
}));
