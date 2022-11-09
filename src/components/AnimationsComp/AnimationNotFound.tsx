import Lottie from "react-lottie";
import animationData from "../../animations/animationNotFound.json";

export const AnimationNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pointer-events-none w-">
      <Lottie
        options={defaultOptions}
        height={400}
        width={600}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
