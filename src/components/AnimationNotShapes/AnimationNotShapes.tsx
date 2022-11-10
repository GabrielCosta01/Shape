import Lottie from "react-lottie";
import animationData from "../../animations/animationNotShapes.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const AnimationNotShapes = () => {
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
    <div className="pointer-events-none mt-4">
      <Lottie
        options={defaultOptions}
        height={260}
        width={600}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
