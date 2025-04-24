import { RestartIcon } from '@/components/icons';
import { useAnimation } from '@/contexts/AnimationContext';

const ANIMATION_STEP = 17;

export const RestartScreen = () => {
  const { currentStep, resetAnimation } = useAnimation();

  const isVisible = currentStep >= ANIMATION_STEP;

  if (!isVisible) return null;

  return (
    <section
      className={`absolute z-10 inset-0 flex justify-between items-center bg-black/50 backdrop-blur-xs ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={resetAnimation} className="mx-auto cursor-pointer">
        <RestartIcon />
      </button>
    </section>
  );
};
