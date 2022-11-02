import Lottie from "react-lottie";
import animationData from "../../animations/reactLogo.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const ReactLogo = () => {
  const [isPaused, isStopped] = useAnimationInfiniteStore((state) => [
    state.isPaused,
    state.isStopped,
  ]);

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
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
