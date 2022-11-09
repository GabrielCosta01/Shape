import { NavLink } from "react-router-dom";
import { Snackbar } from "@mui/material";
import {
  IToastCreate,
  toastCreateShapeStore,
} from "../../stores/toastCreateShapeStore";
import { IoClose } from "react-icons/io5";
import { ToastTransitionCreate } from "../ToastTransition/ToastTransitionCreate";
import { AnimationChecked } from "../AnimationChecked/AnimationChecked";
import { toastEditShapeStore } from "../../stores/toastEditShapeStore";

export const ToastEditShape = ({ commandCreate, id }: IToastCreate) => {
  const [removeToastCreate] = toastEditShapeStore((state) => [
    state.removeToastCreate,
  ]);

  return (
    <li>
      <Snackbar
        open={true}
        TransitionComponent={ToastTransitionCreate}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <div className="bg-bg-formRegister w-96 p-3 rounded-md z-20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              <AnimationChecked />
              <p className="flex items-center text-icon-checked text-xl font-semibold mb-1">
                Shape editado com sucesso!
              </p>
            </div>
            <IoClose
              className="text-white text-2xl cursor-pointer"
              onClick={() => removeToastCreate(id)}
            />
          </div>
          <p className="mb-0.5 text-white">
            Para acessar o seu comando basta clicar{" "}
            <span
              onClick={() => navigator.clipboard.writeText(commandCreate)}
              className="text-button-register cursor-pointer font-semibold"
            >
              aqui
            </span>
            , que será copiado à sua área de transferência.
          </p>
          <p className="text-white">
            Se tiver alguma duvida de como utilizar, clique{" "}
            <span className="text-button-register cursor-pointer font-semibold">
              <NavLink to={"/tutorial"} target="_blank">
                aqui
              </NavLink>
            </span>{" "}
            para ver o tutorial.
          </p>
        </div>
      </Snackbar>
    </li>
  );
};
