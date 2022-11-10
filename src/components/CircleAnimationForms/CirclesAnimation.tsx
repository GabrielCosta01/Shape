import Lottie from "react-lottie";
import animationData from "../../animations/circles.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const CircleAnimationForms = () => {
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
    <div className="pointer-events-none absolute opacity-10">
      <Lottie
        options={defaultOptions}
        height={600}
        width={600}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
