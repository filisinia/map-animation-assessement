'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AnimationContextType {
  currentStep: number;
  resetAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export const INITIAL_DELAY = 2000;
export const STEP_DELAY = 1000;

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const startAnimation = () => {
      const timers = Array.from({ length: 10 }, (_, i) =>
        setTimeout(() => setCurrentStep(i + 1), (i + 1) * STEP_DELAY)
      );
      return timers;
    };

    const mainTimer = setTimeout(() => {
      const timers = startAnimation();
      return () => timers.forEach((timer) => clearTimeout(timer));
    }, INITIAL_DELAY);

    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  const resetAnimation = () => {
    setCurrentStep(0);
  };

  return (
    <AnimationContext.Provider
      value={{
        currentStep,
        resetAnimation,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);

  if (context === null) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }

  return context;
}
