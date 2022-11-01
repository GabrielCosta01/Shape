import { ReactNode } from "react";

interface iContainerProps {
  children: ReactNode;
}

export const ContainerShapes = ({ children }: iContainerProps) => {
  return (
    <div className="flex items-center justify-center flex-col">{children}</div>
  );
};
