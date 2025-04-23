import { Dot } from '@/components/dot/Dot';
import { WorldMap } from '@/components/world-map';
import { MessageWrapper } from '@/components/message-wrapper';
import { Line } from '@/components/line';
import { LineConnectors } from '@/components/line-connectors';
import { BoardingIssue } from '@/components/boarding-issue';
import { DisembarkingIssue } from '@/components/disembarking-issue';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />
      <LineConnectors />

      <BoardingIssue />
      <DisembarkingIssue />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

      <Line
        startComponent={<Dot status="inactive" animate />}
        endComponent={<Dot status="inactive" animate />}
        start={{ xPercent: 49.5, yPercent: 61.5 }}
        end={{ xPercent: 91.5, yPercent: 40 }}
      />
    </div>
  );
}
