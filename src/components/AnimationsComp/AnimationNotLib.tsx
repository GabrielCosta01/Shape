import Lottie from "react-lottie";
import animationData from "../../animations/animationNotLib.json";

export const AnimationNotLib = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pointer-events-none ">
      <Lottie
        options={defaultOptions}
        height={250}
        width={250}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
