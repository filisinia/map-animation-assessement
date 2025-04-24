import { useEffect, useState } from 'react';
import { useAnimation } from '@/contexts/AnimationContext';
import { useBoardingIssueData } from '@/components/boarding-issue';
import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';
import { TickIcon } from '@/components/icons';

const ANIMATION_STEP = 7;

export const BoardingIssue = () => {
  const { currentStep } = useAnimation();

  const [isAnimated, setIsAnimated] = useState(false);

  const { type, time, title, text } = useBoardingIssueData(isAnimated);

  useEffect(() => {
    if (currentStep >= ANIMATION_STEP) setIsAnimated(true);
  }, [currentStep]);

  return (
    <div className="absolute h-[185px] bottom-[69%] right-[15%] w-56 flex flex-col gap-3">
      {currentStep >= 2 && (
        <InfoMessage type={type} time={time} title={title}>
          {text}

          {isAnimated && (
            <div className="absolute inset-0 bg-green-500 animate-slide-to-left" />
          )}
        </InfoMessage>
      )}

      {currentStep >= 3 && (
        <MessageWrapper className="h-16 font-bold">
          <p>
            Time consuming <span className="text-primary/60">boarding</span>
          </p>

          {currentStep >= 8 && (
            <div className="group absolute z-[2] inset-0 p-1 bg-green-500/30 backdrop-blur-sm flex flex-col items-center justify-center gap-2 animate-fade-in">
              <TickIcon />
              <span className="font-medium">Skip the queue</span>
            </div>
          )}
        </MessageWrapper>
      )}
    </div>
  );
};
