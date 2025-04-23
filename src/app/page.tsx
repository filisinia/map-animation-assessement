'use client';

import { WorldMap } from '@/components/world-map';
import { MessageWrapper } from '@/components/message-wrapper';
import { Line } from '@/components/line';
import { LineConnectors } from '@/components/line-connectors';
import { BoardingIssue } from '@/components/boarding-issue';
import { DisembarkingIssue } from '@/components/disembarking-issue';
import { Dot } from '@/components/dot/Dot';
import { useAnimation } from '@/contexts/AnimationContext';

export default function Home() {
  const { currentStep } = useAnimation();

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />
      <LineConnectors />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

      <Line
        endComponent={
          currentStep >= 1 && (
            <Dot status={currentStep >= 5 ? 'active' : 'inactive'} animate />
          )
        }
        startComponent={
          currentStep >= 3 && (
            <Dot status={currentStep >= 6 ? 'active' : 'inactive'} animate />
          )
        }
        start={{ xPercent: 49.5, yPercent: 61.5 }}
        end={{ xPercent: 91.5, yPercent: 40 }}
      />

      {currentStep >= 2 && <BoardingIssue />}
      {currentStep >= 4 && <DisembarkingIssue />}
    </div>
  );
}
