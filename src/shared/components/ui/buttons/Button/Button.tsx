import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';

type ButtonProps = MantineButtonProps & ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <MantineButton
        onClick={onClick}
        ref={ref}
        className={className}
        {...(props as MantineButtonProps)}
      >
        {children}
      </MantineButton>
    );
  }
);
