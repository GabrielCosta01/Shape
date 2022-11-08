import create from "zustand";
import { api } from "../services/api";

interface iCreate {
    isModal: boolean;
    idShape: null | number;
    idShapeNew: (id: null | number) => void,
    isOpenModalDelete: () => void;
    isCloseModalDelete: () => void;
    deleteShape: (id: null | number) => void;
}

export const deleteShapeStore = create<iCreate>((set) => ({
    isModal: false,
    idShape: null,
    idShapeNew: (id: null | number) => {
        set(() => ({ idShape: id }));
    },
    isOpenModalDelete: () => {
        set(() => ({ isModal: true }));
    },
    isCloseModalDelete: () => {
        set(() => ({ isModal: false }));
    },

    deleteShape: async (id: null | number) => {
        try {
            const request = await api.delete(`/600/shapes/${id}`);
            console.log(id)
            console.log(request)
        } catch (error) {
            console.error(error)
        }
    },
}));