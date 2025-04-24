'use client';

import { WorldMap } from '@/components/world-map';
import { LineConnectors, MainLine } from '@/components/line-connectors';
import { BoardingIssue } from '@/components/boarding-issue';
import { DisembarkingIssue } from '@/components/disembarking-issue';
import { Airlines } from '@/components/airlines';
import { BlackJet } from '@/components/black-jet';
import { RestartScreen } from '@/components/restart-screen';

export default function Home() {
  return (
    <section className="relative w-[744px] h-[1000px] overflow-hidden">
      <WorldMap />

      <MainLine />
      <LineConnectors />
      <Airlines />
      <BoardingIssue />
      <DisembarkingIssue />
      <BlackJet />

      <RestartScreen />
    </section>
  );
}
