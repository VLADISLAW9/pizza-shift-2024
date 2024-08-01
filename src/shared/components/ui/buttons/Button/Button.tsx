import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import * as Mantine from '@mantine/core';

type ButtonProps = Mantine.ButtonProps & ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <Mantine.Button onClick={onClick} ref={ref} className={className} {...props}>
        {children}
      </Mantine.Button>
    );
  }
);
