import { FC } from 'react';
import {
  dotAnimationClasses,
  DotStatus,
  dotStatusClasses,
} from '@/components/dot';

type DotProps = {
  status: DotStatus;
  animate?: boolean;
};

export const Dot: FC<DotProps> = ({ status, animate = false }) => {
  const classes = dotStatusClasses[status];

  return (
    <div
      className={`h-14 w-14 rounded-full p-2.5 ${classes.outer} ${
        animate ? dotAnimationClasses[status] : ''
      }`}
    >
      <div className={`h-full w-full rounded-full p-2 ${classes.middle}`}>
        <div className={`h-full w-full rounded-full ${classes.inner}`} />
      </div>
    </div>
  );
};
