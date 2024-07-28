import type { ReactNode } from 'react';
import type { TextProps as MantineTextProps } from '@mantine/core';
import { Text as MantineText } from '@mantine/core';

interface TextProps extends MantineTextProps {
  className?: string;
  children: ReactNode;
}

export const Text = ({ className, children, ...props }: TextProps) => (
  <MantineText className={className} {...props}>
    {children}
  </MantineText>
);
