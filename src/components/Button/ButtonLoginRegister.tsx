import { ReactNode } from "react";

interface IBtnProps {
  text: ReactNode;
  style: any;
}

export const ButtonLoginRegister = ({ text, style }: IBtnProps) => {
  return (
    <button className={style} type="submit">
      {text}
    </button>
  );
};
