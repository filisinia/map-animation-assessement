import { Line } from '@/components/line';
import { lineConnectorsConfig } from '@/components/line-connectors';
import { useAnimation } from '@/contexts/AnimationContext';

export const LineConnectors = () => {
  const { currentStep } = useAnimation();

  return (
    <>
      {lineConnectorsConfig.map(
        ({ start, end, step }, index) =>
          currentStep >= step && (
            <Line
              key={`${index}-${step}`}
              start={start}
              end={end}
              thickness={2}
              withDots={false}
            />
          )
      )}
    </>
  );
};
