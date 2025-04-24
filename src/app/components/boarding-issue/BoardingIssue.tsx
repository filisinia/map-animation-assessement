import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';
import { useAnimation } from '@/contexts/AnimationContext';
import { TickIcon } from './TickIcon';

export const BoardingIssue = () => {
  const { currentStep } = useAnimation();

  return (
    <div className="absolute h-[185px] bottom-[69%] right-[15%] w-56 flex flex-col gap-3">
      {currentStep >= 2 && (
        <InfoMessage
          type={currentStep >= 7 ? 'success' : 'error'}
          time={currentStep >= 7 ? '15' : '105-75'}
          title={currentStep >= 7 ? 'BLACK JET' : 'Airlines'}
        >
          {currentStep >= 7 ? (
            'Private terminal boarding'
          ) : (
            <>
              Congested terminals <span className="text-primary/60">and </span>
              drawn-out security lines
            </>
          )}

          {currentStep >= 7 && (
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
            <div className="absolute z-[2] inset-0 p-1 bg-green-500/30 flex flex-col items-center justify-center gap-2 animate-fade-in before:content-[''] before:absolute before:-z-[1] before:inset-0 before:bg-green-500/10 before:backdrop-blur-sm">
              <TickIcon />
              <span className="font-medium">Skip the queue</span>
            </div>
          )}
        </MessageWrapper>
      )}
    </div>
  );
};
