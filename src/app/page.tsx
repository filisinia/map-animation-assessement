'use client';

import { useEffect, useState } from 'react';
import { WorldMap } from '@/components/world-map';
import { MessageWrapper } from '@/components/message-wrapper';
import { Line } from '@/components/line';
import { LineConnectors } from '@/components/line-connectors';
import { BoardingIssue } from '@/components/boarding-issue';
import { DisembarkingIssue } from '@/components/disembarking-issue';
import { Dot } from '@/components/dot/Dot';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const animationSequence = [
    <BoardingIssue key="boarding" />,
    <DisembarkingIssue key="disembarking" />,
  ];

  useEffect(() => {
    const initialDelay = 2000;

    const startAnimation = () => {
      const timers = Array.from({ length: animationSequence.length }, (_, i) =>
        setTimeout(() => setCurrentStep(i + 1), (i + 1) * 1000)
      );
      return timers;
    };

    const mainTimer = setTimeout(() => {
      const timers = startAnimation();
      return () => timers.forEach((timer) => clearTimeout(timer));
    }, initialDelay);

    return () => clearTimeout(mainTimer);
  }, [animationSequence.length]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <WorldMap />
      <LineConnectors />

      <MessageWrapper className="absolute bottom-[345px] left-20 h-20 w-[358px] p-5 text-center justify-center text-3xl font-medium text-red-600">
        Airlines
      </MessageWrapper>

      <Line
        endComponent={currentStep >= 0 && <Dot status="inactive" animate />}
        startComponent={currentStep >= 1 && <Dot status="inactive" animate />}
        start={{ xPercent: 49.5, yPercent: 61.5 }}
        end={{ xPercent: 91.5, yPercent: 40 }}
      />

      {animationSequence.map(
        (component, index) => currentStep > index && component
      )}
    </div>
  );
}
