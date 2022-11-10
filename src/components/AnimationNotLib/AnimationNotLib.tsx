import Lottie from "react-lottie";
import animationData from "../../animations/animationNotLib.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const AnimationNotLib = () => {
  const [isPaused, isStopped] = useAnimationInfiniteStore((state) => [
    state.isPaused,
    state.isStopped,
  ]);

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
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
