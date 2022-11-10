import { Slide } from "@mui/material";

export const ToastTransitionCreate = (props: any) => {
  return <Slide {...props} direction="up" mountOnEnter />;
};

// export const ToastTransitionLeave = (props: any) => {
//   return <Slide {...props} direction="down" unmountOnExit />;
// };
