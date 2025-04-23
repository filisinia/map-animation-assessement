import { FC } from 'react';
import clsx from 'clsx';

type Point = {
  xPercent: number;
  yPercent: number;
};

type LineProps = {
  start: Point;
  end: Point;
  color?: string;
  thickness?: number;
  dotSize?: number;
  className?: string;
};

export const Line: FC<LineProps> = ({
  start,
  end,
  color = '#999999',
  thickness = 3,
  dotSize = 5,
  className = '',
}) => {
  return (
    <svg
      className={clsx('absolute', className)}
      style={{
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      role="presentation"
    >
      <circle
        cx={`${start.xPercent}%`}
        cy={`${start.yPercent}%`}
        r={dotSize}
        fill={color}
      />

      <line
        x1={`${start.xPercent}%`}
        y1={`${start.yPercent}%`}
        x2={`${end.xPercent}%`}
        y2={`${end.yPercent}%`}
        stroke={color}
        strokeWidth={thickness}
      />

      <circle
        cx={`${end.xPercent}%`}
        cy={`${end.yPercent}%`}
        r={dotSize}
        fill={color}
      />
    </svg>
  );
};
