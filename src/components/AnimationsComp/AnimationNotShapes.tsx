import Lottie from "react-lottie";
import animationData from "../../animations/animationNotShapes.json";

export const AnimationNotShapes = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pointer-events-none mt-4">
      <Lottie
        options={defaultOptions}
        height={260}
        width={600}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
