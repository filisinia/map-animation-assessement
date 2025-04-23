import { Dot } from '@/components/dot/Dot';
import { WorldMap } from '@/components/world-map';
import { MessageWrapper } from '@/components/message-wrapper';
import { Line } from '@/components/line';
import { InfoMessage } from '@/components/info-message';
import { LineConnectors } from '@/components/line-connectors';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />

      <LineConnectors />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

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

      <Line
        startComponent={<Dot status="inactive" animate />}
        endComponent={<Dot status="inactive" animate />}
        start={{ xPercent: 49.5, yPercent: 61.5 }}
        end={{ xPercent: 91.5, yPercent: 40 }}
      />

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
    </div>
  );
}
