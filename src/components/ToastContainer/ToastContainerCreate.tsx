import { toastCreateShapeStore } from "../../stores/toastCreateShapeStore";
import { ToastCreateShape } from "../ToastCreateShape/ToastCreateShape";

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
