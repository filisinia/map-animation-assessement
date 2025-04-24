import { useEffect, useState } from 'react';
import { useAnimation } from '@/contexts/AnimationContext';
import { MessageWrapper } from '@/components/message-wrapper';
import { ArrowIcon } from '@/components/icons';

const ANIMATION_STEP = 12;

export const BlackJet = () => {
  const { currentStep } = useAnimation();

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (currentStep >= ANIMATION_STEP) setIsAnimated(true);
  }, [currentStep]);

  if (!isAnimated) return null;

  return (
    <MessageWrapper className="absolute z-[5] bottom-[440px] left-[20px] w-[365px] justify-center p-4 animate-slide-to-bottom">
      <h2 className="text-3xl text-center font-bold uppercase">Black Jet</h2>

      <div>
        <h3 className="text-2xl font-semibold">Launch Route</h3>
        <span className="text-primary/60">Early 2027</span>
      </div>

      <strong className="font-bold">
        Do you value your time <span className="text-primary/60">and </span>
        convenience?
      </strong>

      <p className="text-sm">
        <span className="text-primary/60">
          Book your flight in seconds and{' '}
        </span>
        arrive 15 minutes before departure. In and out
        <span className="text-primary/60"> of the airport</span> in minutes, not
        hours
      </p>

      <p className="text-sm">
        <span className="text-primary/60">
          Fly from private terminal lounges.
        </span>{' '}
        No security lines <span className="text-primary/60">and</span> no drawn
        out boarding procedures
      </p>

      <h3 className="text-lg font-semibold">Regular flights between</h3>

      <div className="flex items-center gap-2">
        <MessageWrapper className="text-sm text-center">
          <p>
            Sydney <span className="text-xs text-primary/60">(Bankstown)</span>
          </p>
        </MessageWrapper>

        <ArrowIcon className="w-4 h-4 flex-none" />

        <MessageWrapper className="text-sm text-center">
          <p className="text-nowrap">
            Melbourne
            <span className="text-xs text-primary/60"> (Essendon)</span>
          </p>
        </MessageWrapper>
      </div>
    </MessageWrapper>
  );
};
