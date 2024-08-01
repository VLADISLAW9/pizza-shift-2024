import type { RefAttributes } from 'react';
import { forwardRef } from 'react';
import * as TanStackRouter from '@tanstack/react-router';
import clsx from 'clsx';

import styles from './Link.module.css';

type LinkProps = TanStackRouter.LinkProps &
  RefAttributes<HTMLAnchorElement> & {
    className?: string;
    active?: boolean;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ active = false, children, to, className, ...props }, ref) => (
    <TanStackRouter.Link
      to={to}
      className={clsx(className, styles.link, { [styles.active]: active })}
      ref={ref}
      {...props}
    >
      {typeof children === 'function'
        ? children({ isActive: active, isTransitioning: false })
        : children}
    </TanStackRouter.Link>
  )
);
