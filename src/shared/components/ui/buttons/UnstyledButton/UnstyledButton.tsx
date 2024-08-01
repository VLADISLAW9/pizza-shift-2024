import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import * as Mantine from '@mantine/core';

type UnstyledButtonProps = Mantine.UnstyledButtonProps & ComponentPropsWithRef<'button'>;

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ children, ...props }: UnstyledButtonProps, ref) => (
    <Mantine.UnstyledButton ref={ref} {...props}>
      {children}
    </Mantine.UnstyledButton>
  )
);
