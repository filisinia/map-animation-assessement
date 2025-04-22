import { DotCircles, DotStatus } from '@/components/dot';

export const dotStatusClasses: Record<DotStatus, DotCircles> = {
  active: {
    outer: 'bg-green-500/20',
    middle: 'bg-green-500/20',
    inner: 'bg-green-500',
  },
  inactive: {
    outer: 'bg-red-500/20',
    middle: 'bg-red-500/20',
    inner: 'bg-red-500',
  },
};

export const dotAnimationClasses: Record<DotStatus, string> = {
  active: 'animate-dot-pulse',
  inactive: 'animate-flash',
};
