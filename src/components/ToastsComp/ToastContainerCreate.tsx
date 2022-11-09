import { ToastCreateShape } from "./ToastCreateShape";
import { toastCreateShapeStore } from "../../stores/toastCreateShapeStore";

export const ToastContainerCreate = () => {
  const [listToastCreate] = toastCreateShapeStore((state) => [
    state.listToastCreate,
  ]);

  return (
    <ul>
      {listToastCreate?.map((toast) => (
        <ToastCreateShape
          key={toast.id}
          commandCreate={toast.commandCreate}
          id={toast.id}
        />
      ))}
    </ul>
  );
};
