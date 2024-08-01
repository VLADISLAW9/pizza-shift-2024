import type { ReactNode } from 'react';
import * as Mantine from '@mantine/core';

interface TitleProps extends Mantine.TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title = ({ className, children, ...props }: TitleProps) => (
  <Mantine.Title className={className} {...props}>
    {children}
  </Mantine.Title>
);
