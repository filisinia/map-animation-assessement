import { Dot } from '@/components/dot/Dot';
import { WorldMap } from '@/components/worldMap';
import { MessageWrapper } from '@/components/messageWrapper';
import { Line } from '@/components/line';
// import { InfoMessage } from './components/infoMessage';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

      <Line
        startComponent={<Dot status="inactive" animate />}
        endComponent={<Dot status="inactive" animate />}
        start={{ xPercent: 49.5, yPercent: 61.5 }}
        end={{ xPercent: 91.5, yPercent: 40 }}
      />

      {/* <InfoMessage type="error" time="105-75" title="Airlines">
        Congested terminals <span className='text-primary/60'>and</span> drawn-out security lines
      </InfoMessage> */}
    </div>
  );
}
