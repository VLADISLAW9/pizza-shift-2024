import type { ReactNode } from 'react';
import type { TitleProps as MantineTitleProps } from '@mantine/core';
import { Title as MantineTitle } from '@mantine/core';

interface TitleProps extends MantineTitleProps {
  className?: string;
  children: ReactNode;
}

export const Title = ({ className, children, ...props }: TitleProps) => (
  <MantineTitle className={className} {...props}>
    {children}
  </MantineTitle>
);
