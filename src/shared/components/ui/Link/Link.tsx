import type { RefAttributes } from 'react';
import { forwardRef } from 'react';
import type { LinkProps as TanStackRouterLinkProps } from '@tanstack/react-router';
import { Link as TanStackRouterLink } from '@tanstack/react-router';
import clsx from 'clsx';

import styles from './Link.module.css';

type LinkProps = TanStackRouterLinkProps &
  RefAttributes<HTMLAnchorElement> & {
    className?: string;
    active?: boolean;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ active = false, children, className, ...props }, ref) => (
    <TanStackRouterLink
      className={clsx(className, styles.link, { [styles.active]: active })}
      ref={ref}
      {...props}
    >
      {typeof children === 'function'
        ? children({ isActive: active, isTransitioning: false })
        : children}
    </TanStackRouterLink>
  )
);
