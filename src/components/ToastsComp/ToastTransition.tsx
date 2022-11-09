import { Slide } from "@mui/material";

export const ToastTransition = (props: any) => {
  return <Slide {...props} direction="down" mountOnEnter />;
};