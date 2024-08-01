import type { ReactNode } from 'react';
import * as Mantine from '@mantine/core';

interface ModalProps extends Mantine.ModalProps {
  className?: string;
  children?: ReactNode;
}

export const Modal = ({ className, children, ...props }: ModalProps) => (
  <Mantine.Modal className={className} {...props}>
    {children}
  </Mantine.Modal>
);
