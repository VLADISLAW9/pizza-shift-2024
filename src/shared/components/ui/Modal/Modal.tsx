import type { ReactNode } from 'react';
import type { ModalProps as MantineModalProps } from '@mantine/core';
import { Modal as MantineModal } from '@mantine/core';

interface ModalProps extends MantineModalProps {
  className?: string;
  children?: ReactNode;
}

export const Modal = ({ className, children, ...props }: ModalProps) => (
  <MantineModal className={className} {...props}>
    {children}
  </MantineModal>
);
