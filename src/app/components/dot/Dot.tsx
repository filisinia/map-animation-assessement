import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  dotAnimationClasses,
  DotStatus,
  dotStatusClasses,
} from '@/components/dot';

type DotProps = {
  status: DotStatus;
  animate?: boolean;
};

export const Dot: FC<DotProps & ComponentProps<'div'>> = ({
  status,
  animate = false,
  className = '',
}) => {
  const classes = dotStatusClasses[status];

  return (
    <div
      className={twMerge(
        'h-14 w-14 rounded-full p-2.5',
        classes.outer,
        animate ? dotAnimationClasses[status] : '',
        className
      )}
    >
      <div
        className={twMerge('h-full w-full rounded-full p-2', classes.middle)}
      >
        <div className={twMerge('h-full w-full rounded-full', classes.inner)} />
      </div>
    </div>
  );
};
