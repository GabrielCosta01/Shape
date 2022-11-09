import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { DeleteShape } from "../Modals/DeleteShape";
import { editShapeStore } from "../../stores/editShapeStore";
import { deleteShapeStore } from "../../stores/deleteShapeStore";

export interface IShape {
  command: string;
  id: number;
  language: string;
  libs: [];
  package: string;
  tool: string;
  userId: string | number;
}

interface ICardProps {
  shape: IShape;
  layoutId: any;
}

export const CardShapes = ({ shape, layoutId }: ICardProps) => {

  const [details, setDetails] = useState(null);
  const [isOpenModal] = editShapeStore((state) => [state.isOpenModal]);
  const [isOpenModalDelete, idShapeNew] = deleteShapeStore((state) => [
    state.isOpenModalDelete,
    state.idShapeNew,
  ]);

  return (
    <>
      {!details && (
        <>
          <li className="bg-bg-form rounded-md p-4 h-36 w-56">
            <div className="">
              <>
                <div>
                  <h3 className="text-purple-1 font-semibold text-lg">
                    {shape.command}
                  </h3>
                  <p className="text-grey-2 w-48 whitespace-nowrap overflow-hidden text-ellipsis">
                    {shape.libs}
                  </p>
                </div>
                <div className="mt-4 flex flex-row gap-4 justify-center">
                  <button
                    onClick={() => setDetails(layoutId)}
                    className="bg-button-register p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
                  >
                    Detalhes
                  </button>
                  <button
                    onClick={() => {
                      isOpenModalDelete();
                      idShapeNew(layoutId);
                    }}
                    className="bg-grey-1 p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-btn-del/100 duration-300"
                  >
                    Deletar
                  </button>
                </div>
              </>
            </div>
            <DeleteShape />
          </li>
        </>
      )}
      {details && (
        <AnimatePresence>
          <motion.li
            layout
            className="bg-bg-form h- rounded-md w-56 relative "
            key={shape.id}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -500 }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute bg-bg-form rounded-md p-4 w-full h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]">
              <div>
                <h3 className="text-purple-1 font-semibold text-lg">
                  {shape.command}
                </h3>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="text-purple-1 font-medium">Pacotes:</p>
                <p className="text-grey-2">{shape.package}</p>
              </div>
              <div className="flex gap-2 mt-1">
                <p className="text-purple-1 font-medium">Ferramenta:</p>
                <p className="text-grey-2">{shape.tool}</p>
              </div>
              <div className="flex gap-2 mt-1">
                <p className="text-purple-1 font-medium">Linguagem:</p>
                <p className="text-grey-2">{shape.language}</p>
              </div>
              <div className="flex gap-2 mt-1">
                <p className="text-purple-1 font-medium">
                  Bibliotecas: <span className="text-grey-2">{shape.libs}</span>
                </p>
              </div>
              <div className="mt-4 flex flex-row gap-4 justify-center">
                <button
                  onClick={() => isOpenModal(shape)}
                  className="bg-button-register p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => setDetails(null)}
                  className="bg-grey-1 p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-btn-del/100 duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.li>
        </AnimatePresence>
      )}
    </>
  );
};
