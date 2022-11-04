import Lottie from "react-lottie";
import animationData from "../../animations/circles.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const CircleAnimation = () => {
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
    <div className="pointer-events-none absolute opacity-5">
      <Lottie
        options={defaultOptions}
        height={1000}
        width={1000}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
