import create from "zustand";

interface AnimationState {
  isStopped: boolean;
  isPaused: boolean;
}

export const useAnimationInfiniteStore = create<AnimationState>((set) => ({
  isStopped: false,
  isPaused: false,
}));
