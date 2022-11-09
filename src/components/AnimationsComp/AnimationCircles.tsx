import Lottie from "react-lottie";
import animationData from "../../animations/circles.json";

export const CircleAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pointer-events-none absolute opacity-5">
      <Lottie
        options={defaultOptions}
        height={1000}
        width={1000}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
