import create from "zustand";

interface IEditShapeProps {
  command: string;
  id: number;
  language: string;
  libs: string[];
  package: string;
  tool: string;
  projectName: string;
  userId: string | number;
}

interface ICreate {
  isModal: boolean;
  isOpenModal: (shape: IEditShapeProps) => void;
  isCloseModal: () => void;
  handleClickCard: IEditShapeProps;
}

export const editShapeStore = create<ICreate>((set) => ({
  handleClickCard: <IEditShapeProps>{},
  isModal: false,
  isOpenModal: (shape) => {
    set(() => ({ isModal: true, handleClickCard: shape }));
  },
  isCloseModal: () => {
    set(() => ({ isModal: false }));
  },
}));
