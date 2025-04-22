import { Dot } from '@/components/dot/Dot';
import { WorldMap } from '@/components/worldMap';
import { InfoMessage } from './components/infoMessage';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />

      <Dot status="active" animate />
      <Dot status="inactive" animate />

      <InfoMessage type="error" time="105-75" title="Airlines">
        Congested terminals <span className='text-primary/60'>and</span> drawn-out security lines
      </InfoMessage>
    </div>
  );
}
