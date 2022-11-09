import { Slide } from "@mui/material";

export const ToastTransitionCreate = (props: any) => {
  return <Slide {...props} direction="up" mountOnEnter />;
};