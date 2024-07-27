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
  ({ active, className, ...props }, ref) => (
    <TanStackRouterLink
      className={clsx(styles.link, { [styles.active]: active }, className)}
      ref={ref}
      {...props}
    />
  )
);
