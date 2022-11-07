import Lottie from "react-lottie";
import animationData from "../../animations/animationNotFound.json";
import { useAnimationInfiniteStore } from "../../stores/animationInfiniteStore";

export const AnimationNotFound = () => {
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
        <div className="pointer-events-none w-">
            <Lottie
                options={defaultOptions}
                height={400}
                width={600}
                isStopped={isStopped}
                isPaused={isPaused}
            />
        </div>
    );
};
