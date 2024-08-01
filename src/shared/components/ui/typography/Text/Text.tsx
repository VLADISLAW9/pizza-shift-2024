import type { ReactNode } from 'react';
import * as Mantine from '@mantine/core';

interface TextProps extends Mantine.TextProps {
  className?: string;
  children: ReactNode;
}

export const Text = ({ className, children, ...props }: TextProps) => (
  <Mantine.Text className={className} {...props}>
    {children}
  </Mantine.Text>
);
