import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import clsx from 'clsx';

import styles from './Button.module.css';

interface ButtonProps extends MantineButtonProps {
  className?: string;
}

export const Button = ({ className, size = 'md', variant = 'default', ...props }: ButtonProps) => (
  <MantineButton
    className={clsx(styles[size], styles[variant], className)}
    variant={variant}
    {...props}
  />
);
