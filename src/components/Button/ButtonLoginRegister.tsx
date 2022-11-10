import { ReactNode } from "react";
import { VscLoading } from "react-icons/vsc";

interface IBtnProps {
  text: ReactNode;
  style: any;
  loading: boolean | undefined;
}

export const ButtonLoginRegister = ({ text, style, loading }: IBtnProps) => {
  return (
    <>
      {loading ? (
        <button
          className={style + "flex items-center justify-center"}
          type="submit"
          disabled
        >
          <VscLoading className="animate-spin font-bold text-2xl hover:shadow-button-register/0" />
        </button>
      ) : (
        <button className={style} type="submit">
          {text}
        </button>
      )}
    </>
  );
};
