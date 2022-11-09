import { toastCreateShapeStore } from "../../stores/toastCreateShapeStore";
import { toastEditShapeStore } from "../../stores/toastEditShapeStore";
import { ToastEditShape } from "../ToastEditShape/ToastEditShape";

export const ToastContainerEdit = () => {
  const [listToastCreate] = toastEditShapeStore((state) => [
    state.listToastCreate,
  ]);
  return (
    <ul>
      {listToastCreate?.map((toast) => (
        <ToastEditShape
          key={toast.id}
          commandCreate={toast.commandCreate}
          id={toast.id}
        />
      ))}
    </ul>
  );
};
