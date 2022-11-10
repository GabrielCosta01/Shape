import { Slide } from "@mui/material";

export const ToastTransition = (props: any) => {
  return <Slide {...props} direction="down" mountOnEnter />;
};

// export const ToastTransitionLeave = (props: any) => {
//   return <Slide {...props} direction="down" unmountOnExit />;
// };
