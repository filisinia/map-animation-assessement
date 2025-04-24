import { FC, ComponentProps, PropsWithChildren } from 'react';
import clsx from 'clsx';

export const MessageWrapper: FC<ComponentProps<'div'> & PropsWithChildren> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col justify-center gap-3.5 w-56 border border-gray-500 rounded-md px-2 py-2.5 text-primary bg-black/10 animate-fade-in overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};
