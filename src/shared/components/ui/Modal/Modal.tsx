import type { ReactNode } from 'react';
import * as Mantine from '@mantine/core';

interface ModalProps extends Mantine.ModalProps {
  children?: ReactNode;
}

export const Modal = ({ className, children, ...props }: ModalProps) => (
  <Mantine.Modal {...props}>{children}</Mantine.Modal>
);
