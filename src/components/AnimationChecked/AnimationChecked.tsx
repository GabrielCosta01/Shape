import Lottie from "react-lottie";
import animationData from "../../animations/animateCheck.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const AnimationChecked = () => {
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
    <div className="pointer-events-none ">
      <Lottie
        options={defaultOptions}
        height={30}
        width={30}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
