import { forwardRef } from 'react';
import type {
  ButtonProps as MantineButtonProps,
  ButtonVariant as MantineButtonVariant,
  UnstyledButtonProps as MantineUnstyledButtonProps
} from '@mantine/core';
import { Button as MantineButton, UnstyledButton as MantineUnstyledButton } from '@mantine/core';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = MantineButtonVariant | 'clear';

interface ButtonProps extends Omit<MantineButtonProps, 'variant'> {
  className?: string;
  variant?: ButtonVariant;
}

type UnstyledButtonProps = MantineUnstyledButtonProps &
  Pick<ButtonProps, 'className' | 'leftSection' | 'rightSection' | 'children'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps | UnstyledButtonProps>(
  (
    { children, leftSection, rightSection, className, size = 'md', variant = 'default', ...props },
    ref
  ) => {
    if (variant === 'clear') {
      return (
        <MantineUnstyledButton
          ref={ref}
          className={clsx(className, styles.clear_button, styles[size], styles[variant])}
          {...(props as UnstyledButtonProps)}
        >
          {leftSection && leftSection}
          {children}
          {rightSection && rightSection}
        </MantineUnstyledButton>
      );
    }
    return (
      <MantineButton
        ref={ref}
        className={clsx(className, styles[size], styles[variant])}
        variant={variant}
        {...(props as MantineButtonProps)}
      >
        {children}
      </MantineButton>
    );
  }
);
