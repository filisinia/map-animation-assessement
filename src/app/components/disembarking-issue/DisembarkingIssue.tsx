import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';
import { useAnimation } from '@/contexts/AnimationContext';

export const DisembarkingIssue = () => {
  const { currentStep } = useAnimation();

  return (
    <div className="absolute h-[185px] bottom-[20%] right-[8%] w-56 flex flex-col gap-3">
      {currentStep >= 5 && (
        <InfoMessage type="error" time="30-15" title="Airlines">
          Prolonged disembarking
          <span className="text-primary/60"> from the airplane</span>
        </InfoMessage>
      )}

      {currentStep >= 6 && (
        <MessageWrapper className="h-16 font-bold text-sm">
          <p>
            Long walks
            <span className="text-primary/60"> to the airport exit</span>
          </p>
        </MessageWrapper>
      )}
    </div>
  );
};
