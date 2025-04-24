import { MessageWrapper } from '@/components/message-wrapper';
import { useAnimation } from '@/contexts/AnimationContext';

const ANIMATION_STEP = 11;

export const Airlines = () => {
  const { currentStep } = useAnimation();

  return (
    <MessageWrapper className="absolute bottom-[265px] left-10 h-20 w-[358px] justify-center">
      {currentStep >= ANIMATION_STEP ? (
        <div className="animate-fade-in">
          <p className="text-xl font-medium">120 minutes</p>
          <p>
            Time you lose traveling on airlines
            <span className="text-sm text-primary/60"> per round trip</span>
          </p>
        </div>
      ) : (
        <p className="text-center text-3xl font-medium text-red-600">
          Airlines
        </p>
      )}
    </MessageWrapper>
  );
};
