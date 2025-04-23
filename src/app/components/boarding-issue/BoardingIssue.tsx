import { InfoMessage } from '@/components/info-message';
import { MessageWrapper } from '@/components/message-wrapper';

export const BoardingIssue = () => {
  return (
    <div className="absolute bottom-[69%] right-[15%] w-56 flex flex-col gap-3">
      <InfoMessage type="error" time="105-75" title="Airlines">
        Congested terminals <span className="text-primary/60">and </span>
        drawn-out security lines
      </InfoMessage>

      <MessageWrapper className="h-16 font-bold">
        <p>
          Time consuming <span className="text-primary/60">boarding</span>
        </p>
      </MessageWrapper>
    </div>
  );
};
