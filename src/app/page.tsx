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
    <div className="w-[744px] h-[1000px] overflow-hidden relative">
      <WorldMap />
      <LineConnectors />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

      <Line
        endComponent={
          currentStep >= 1 && (
            <Dot status={currentStep >= 8 ? 'active' : 'inactive'} animate />
          )
        }
        startComponent={
          currentStep >= 4 && (
            <Dot status={currentStep >= 8 ? 'active' : 'inactive'} animate />
          )
        }
        start={{ xPercent: 53, yPercent: 61.5 }}
        end={{ xPercent: 89, yPercent: 40 }}
      />

      <BoardingIssue />
      <DisembarkingIssue />
    </div>
  );
}
