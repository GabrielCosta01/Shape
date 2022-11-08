import create from "zustand";
import { api } from "../services/api";

type IID = null | number

interface iCreate {
    isModal: boolean;
    idShape: null | number;
    idShapeNew: (id: IID) => void,
    isOpenModalDelete: () => void;
    isCloseModalDelete: () => void;
    deleteShape: (id: IID) => void;
}

export const deleteShapeStore = create<iCreate>((set) => ({
    isModal: false,
    idShape: null,
    idShapeNew: (id: IID) => {
        set(() => ({ idShape: id }));
    },
    isOpenModalDelete: () => {
        set(() => ({ isModal: true }));
    },
    isCloseModalDelete: () => {
        set(() => ({ isModal: false }));
    },

    deleteShape: async (id: IID) => {
        try {
            await api.delete(`/600/shapes/${id}`);
        } catch (error) {
            console.error(error)
        }
    },
}));