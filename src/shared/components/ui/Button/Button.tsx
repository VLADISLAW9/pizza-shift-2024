import { forwardRef } from 'react';
import type {
  ButtonProps as _ButtonProps,
  ButtonVariant as _ButtonVariant,
  UnstyledButtonProps as _UnstyledButtonProps
} from '@mantine/core';
import { Button as _Button, UnstyledButton as _UnstyledButton } from '@mantine/core';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = _ButtonVariant | 'clear';

interface ButtonProps extends Omit<_ButtonProps, 'variant'> {
  className?: string;
  variant?: ButtonVariant;
}

type UnstyledButtonProps = _UnstyledButtonProps &
  Pick<ButtonProps, 'className' | 'leftSection' | 'rightSection' | 'children'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps | UnstyledButtonProps>(
  (
    { children, leftSection, rightSection, className, size = 'md', variant = 'default', ...props },
    ref
  ) => {
    if (variant === 'clear') {
      return (
        <_UnstyledButton
          ref={ref}
          className={clsx(className, styles.clear_button, styles[size], styles[variant])}
          {...(props as UnstyledButtonProps)}
        >
          {leftSection && leftSection}
          {children}
          {rightSection && rightSection}
        </_UnstyledButton>
      );
    }
    return (
      <_Button
        ref={ref}
        className={clsx(className, styles[size], styles[variant])}
        variant={variant}
        {...(props as _ButtonProps)}
      >
        {children}
      </_Button>
    );
  }
);
