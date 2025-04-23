import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';

export const DisembarkingIssue = () => {
  return (
    <div className="absolute bottom-[20%] right-[8%] w-56 flex flex-col gap-3">
      <InfoMessage type="error" time="30-15" title="Airlines">
        Prolonged disembarking
        <span className="text-primary/60"> from the airplane</span>
      </InfoMessage>

      <MessageWrapper className="h-16 font-bold text-sm">
        <p>
          Long walks
          <span className="text-primary/60"> to the airport exit</span>
        </p>
      </MessageWrapper>
    </div>
  );
};
