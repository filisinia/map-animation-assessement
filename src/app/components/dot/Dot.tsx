import { FC } from 'react';
import { DotStatus, dotStatusClasses } from '@/components/dot';

type DotProps = {
  status: DotStatus;
};

export const Dot: FC<DotProps> = ({ status }) => {
  const classes = dotStatusClasses[status];

  return (
    <div className={`h-14 w-14 rounded-full p-2.5 ${classes.outer}`}>
      <div className={`h-full w-full rounded-full p-2 ${classes.middle}`}>
        <div className={`h-full w-full rounded-full ${classes.inner}`} />
      </div>
    </div>
  );
};
