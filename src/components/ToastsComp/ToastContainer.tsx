import { Toast } from "./Toast";
import { toastStore } from "../../stores/toastStore";

export const ToastContainer = () => {
  const [listToast] = toastStore((state) => [state.listToast]);

  return (
    <ul>
      {listToast?.map((toast) => (
        <Toast toast={toast} key={toast.id} />
      ))}
    </ul>
  );
};
