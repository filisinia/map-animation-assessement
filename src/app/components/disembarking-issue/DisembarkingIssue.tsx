import { useEffect, useState } from 'react';
import { useAnimation } from '@/contexts/AnimationContext';
import { useDisembarkingIssueData } from '@/components/disembarking-issue';
import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';
import { TickIcon } from '@/components/icons';

const ANIMATION_STEP = 10;

export const DisembarkingIssue = () => {
  const { currentStep } = useAnimation();

  const [isAnimated, setIsAnimated] = useState(false);

  const { type, time, title, text } = useDisembarkingIssueData(isAnimated);

  useEffect(() => {
    if (currentStep >= ANIMATION_STEP) setIsAnimated(true);
  }, [currentStep]);

  return (
    <div className="absolute h-[185px] bottom-[20%] right-[8%] w-56 flex flex-col gap-3">
      {currentStep >= 5 && (
        <InfoMessage type={type} time={time} title={title}>
          {text}

          {isAnimated && (
            <div className="absolute inset-0 bg-green-500 animate-slide-to-left" />
          )}
        </InfoMessage>
      )}

      {currentStep >= 6 && (
        <MessageWrapper className="h-16 font-bold text-sm">
          <p>
            Long walks
            <span className="text-primary/60"> to the airport exit</span>
          </p>

          {currentStep >= 11 && (
            <div className="group absolute z-[2] inset-0 p-1 bg-green-500/30 backdrop-blur-sm flex flex-col items-center justify-center gap-2 animate-fade-in">
              <TickIcon />
              <span className="font-medium">Avoid the chaos</span>
            </div>
          )}
        </MessageWrapper>
      )}
    </div>
  );
};
