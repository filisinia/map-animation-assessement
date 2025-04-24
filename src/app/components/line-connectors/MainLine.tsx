import { useAnimation } from '@/contexts/AnimationContext';
import { Dot } from '@/components/dot/Dot';
import { Line } from '@/components/line';

export const MainLine = () => {
  const { currentStep } = useAnimation();

  return (
    <Line
      endComponent={
        currentStep >= 1 && (
          <Dot status={currentStep >= 8 ? 'active' : 'inactive'} animate />
        )
      }
      startComponent={
        currentStep >= 4 && (
          <Dot status={currentStep >= 11 ? 'active' : 'inactive'} animate />
        )
      }
      start={{ xPercent: 53, yPercent: 61.5 }}
      end={{ xPercent: 89, yPercent: 40 }}
    />
  );
};
