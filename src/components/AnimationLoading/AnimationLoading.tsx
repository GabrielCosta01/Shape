import Lottie from "react-lottie";
import animationData from "../../animations/loading.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const AnimationLoading = () => {
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
    <div className="pointer-events-none absolute w-full h-full flex justify-center items-center z-10">
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
};
