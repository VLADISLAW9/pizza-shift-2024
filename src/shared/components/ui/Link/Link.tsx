import type { RefAttributes } from 'react';
import { forwardRef } from 'react';
import type { LinkProps as TanStackRouterLinkProps } from '@tanstack/react-router';
import { Link as TanStackRouterLink } from '@tanstack/react-router';

type LinkProps = TanStackRouterLinkProps &
  RefAttributes<HTMLAnchorElement> & {
    className?: string;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, ...props }, ref) => (
  <TanStackRouterLink className={className} ref={ref} {...props} />
));
