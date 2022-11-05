import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { IToast, toastStore } from "../../stores/toastStore";
import { ToastTransition } from "../ToastTransition/ToastTransition";

interface IToastProps {
  toast: IToast;
}

export const Toast = ({ toast }: IToastProps) => {
  const [removeToast] = toastStore((state) => [state.removeToast]);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLeaving(true);
    }, toast.ms);
  }, []);

  useEffect(() => {
    if (isLeaving) {
      setTimeout(() => {
        removeToast(toast.id);
      }, 1000);
    }
  }, [isLeaving]);

  return (
    <li>
      <Snackbar
        open={true}
        TransitionComponent={ToastTransition}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity={toast.mode} sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </li>
  );
};
