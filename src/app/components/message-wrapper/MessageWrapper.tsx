import { FC, ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const MessageWrapper: FC<ComponentProps<'div'> & PropsWithChildren> = ({
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        'relative flex flex-col justify-center gap-2 w-56 border border-gray-500 rounded-md px-2 py-2.5 text-primary bg-black/15 backdrop-blur-sm animate-fade-in overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};
