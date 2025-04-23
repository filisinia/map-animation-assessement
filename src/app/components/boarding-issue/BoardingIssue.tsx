import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';
import { useAnimation } from '@/contexts/AnimationContext';

export const BoardingIssue = () => {
  const { currentStep } = useAnimation();

  return (
    <div className="absolute h-[170px] bottom-[69%] right-[15%] w-56 flex flex-col gap-3">
      {currentStep >= 2 && (
        <InfoMessage type="error" time="105-75" title="Airlines">
          Congested terminals <span className="text-primary/60">and </span>
          drawn-out security lines
        </InfoMessage>
      )}

      {currentStep >= 3 && (
        <MessageWrapper className="h-16 font-bold">
          <p>
            Time consuming <span className="text-primary/60">boarding</span>
          </p>
        </MessageWrapper>
      )}
    </div>
  );
};
