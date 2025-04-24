'use client';

import { FC, ComponentProps, ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Point = {
  xPercent: number;
  yPercent: number;
};

type LineProps = {
  start: Point;
  end: Point;
  withDots?: boolean;
  color?: string;
  thickness?: number;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
};

export const Line: FC<LineProps & ComponentProps<'div'>> = ({
  start,
  end,
  withDots = true,
  color = '#999999',
  thickness = 3,
  startComponent,
  endComponent,
  className = '',
}) => {
  const [thicknessPercent, setThicknessPercent] = useState(0);

  const getPositionStyles = (xPercent: number, yPercent: number) => ({
    left: `${xPercent}%`,
    top: `${yPercent}%`,
    transform: 'translate(-50%, -50%)',
  });

  useEffect(() => {
    setThicknessPercent((thickness / window.innerHeight) * 100);
  }, [thickness]);

  return (
    <div className={twMerge('absolute inset-0 animate-fade-in', className)}>
      {startComponent && (
        <div
          className="absolute z-[1]"
          style={{
            ...getPositionStyles(start.xPercent, start.yPercent),
          }}
        >
          {startComponent}
        </div>
      )}

      {withDots && (
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            ...getPositionStyles(start.xPercent, start.yPercent),
            backgroundColor: color,
          }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          clipPath: `polygon(
           ${start.xPercent}% ${start.yPercent}%,
           ${end.xPercent}% ${end.yPercent}%,
           ${end.xPercent}% ${end.yPercent + thicknessPercent}%,
           ${start.xPercent}% ${start.yPercent + thicknessPercent}%)`,
        }}
      />

      {endComponent && (
        <div
          className="absolute z-[1]"
          style={{
            ...getPositionStyles(end.xPercent, end.yPercent),
          }}
        >
          {endComponent}
        </div>
      )}

      {withDots && (
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            ...getPositionStyles(end.xPercent, end.yPercent),
            backgroundColor: color,
          }}
        />
      )}
    </div>
  );
};
