import { Line } from '@/components/line';
import { lineConnectorsConfig } from '@/components/line-connectors';

export const LineConnectors = () => {
  return (
    <>
      {lineConnectorsConfig.map(({ start, end }, index) => (
        <Line
          key={index}
          start={start}
          end={end}
          thickness={2}
          withDots={false}
        />
      ))}
    </>
  );
};
