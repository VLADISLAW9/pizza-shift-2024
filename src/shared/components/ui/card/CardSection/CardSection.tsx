import type { ReactNode } from 'react';
import * as Mantine from '@mantine/core';

interface CardSectionProps extends Mantine.CardSectionProps {
  children?: ReactNode;
}

export const CardSection = ({ children, ...props }: CardSectionProps) => (
  <Mantine.CardSection {...props}>{children}</Mantine.CardSection>
);
