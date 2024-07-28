import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import type { UnstyledButtonProps as MantineUnstyledButtonProps } from '@mantine/core';
import { UnstyledButton as MantineUnstyledButton } from '@mantine/core';

type UnstyledButtonProps = MantineUnstyledButtonProps & ComponentPropsWithRef<'button'>;

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ children, ...props }: UnstyledButtonProps, ref) => (
    <MantineUnstyledButton ref={ref} {...props}>
      {children}
    </MantineUnstyledButton>
  )
);
