import { Dot } from '@/components/dot/Dot';
import { WorldMap } from '@/components/worldMap';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />

      <Dot status="active" animate />
      <Dot status="inactive" animate />
    </div>
  );
}
