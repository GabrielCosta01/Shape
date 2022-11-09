import Lottie from "react-lottie";
import animationData from "../../animations/reactLogo.json";

export const ReactLogo = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pointer-events-none">
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
