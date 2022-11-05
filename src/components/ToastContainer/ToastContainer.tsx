import { toastStore } from "../../stores/toastStore";
import { Toast } from "../Toast/Toast";

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
