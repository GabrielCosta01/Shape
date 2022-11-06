import { ReactNode } from "react";

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
}

export const CardShapes = ({ shape }: ICardProps) => {
  console.log(shape);

  return (
    <li className="bg-bg-form rounded-md p-4 h-36">
      <div>
        <h3 className="text-purple-1 font-semibold text-lg">{shape.command}</h3>
        <p className="text-grey-2 w-48 whitespace-nowrap overflow-hidden text-ellipsis">
          {shape.libs}
        </p>
      </div>
      <div className="mt-4 flex flex-row gap-4 justify-center">
        <button className="bg-button-register p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300">
          Detalhes
        </button>
        <button className="bg-grey-1 p-2 pl-4 pr-4 text-sm  font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-btn-del/100 duration-300">
          Deletar
        </button>
      </div>
      <div></div>
    </li>
  );
};
