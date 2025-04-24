import { LineConnector } from '@/components/line-connectors';

export const lineConnectorsConfig: LineConnector[] = [
  {
    start: { xPercent: 85, yPercent: 15 },
    end: { xPercent: 89, yPercent: 40 },
    step: 2,
  },
  {
    start: { xPercent: 85, yPercent: 25 },
    end: { xPercent: 89, yPercent: 40 },
    step: 3,
  },
  {
    start: { xPercent: 53, yPercent: 61.5 },
    end: { xPercent: 62, yPercent: 67.5 },
    step: 5,
  },
  {
    start: { xPercent: 53, yPercent: 61.5 },
    end: { xPercent: 62, yPercent: 77 },
    step: 6,
  },
];
