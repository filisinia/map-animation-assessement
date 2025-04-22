import { FC, PropsWithChildren } from 'react';
import { infoMessageClasses, InfoMessageType } from '@/components/infoMessage';

type InfoMessageProps = {
  type: InfoMessageType;
  time?: string;
  title?: string;
  timeUnit?: string;
};

export const InfoMessage: FC<InfoMessageProps & PropsWithChildren> = ({
  type = 'success',
  time,
  title,
  timeUnit = 'minutes',
  children,
}) => {
  return (
    <div className="flex flex-col gap-3.5 w-56 border border-gray-500 rounded-md px-2 py-2.5 text-primary">
      <div className="flex justify-between">
        <span className={`text-sm ${infoMessageClasses[type]}`}>
          <strong>{time}</strong> {timeUnit}
        </span>
        <strong className={infoMessageClasses[type]}>{title}</strong>
      </div>

      <strong>{children}</strong>
    </div>
  );
};
