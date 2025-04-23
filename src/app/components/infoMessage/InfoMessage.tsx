import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { infoMessageClasses, InfoMessageType } from '@/components/infoMessage';
import { MessageWrapper } from '@/components/messageWrapper';

type InfoMessageProps = {
  type: InfoMessageType;
  time?: string;
  title?: string;
  timeUnit?: string;
};

export const InfoMessage: FC<InfoMessageProps & PropsWithChildren> = ({
  type,
  time,
  title,
  timeUnit = 'minutes',
  children,
}) => {
  return (
    <MessageWrapper>
      <div className="flex justify-between">
        <span className={clsx('text-sm', infoMessageClasses[type])}>
          <strong>{time}</strong> {timeUnit}
        </span>
        <strong className={infoMessageClasses[type]}>{title}</strong>
      </div>

      <strong>{children}</strong>
    </MessageWrapper>
  );
};
