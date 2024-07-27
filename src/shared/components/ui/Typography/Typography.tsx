import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.css';

type TypographyVariant =
  // Regular
  | 'typography32_regular'
  | 'typography24_regular'
  | 'typography20_regular'
  | 'typography16_regular'
  | 'typography14_regular'
  | 'typography12_regular'
  // Medium
  | 'typography32_medium'
  | 'typography24_medium'
  | 'typography20_medium'
  | 'typography16_medium'
  | 'typography14_medium'
  | 'typography12_medium'
  // Semibold
  | 'typography32_semibold'
  | 'typography24_semibold'
  | 'typography20_semibold'
  | 'typography16_semibold'
  | 'typography14_semibold'
  | 'typography12_semibold'
  // Bold
  | 'typography32_bold'
  | 'typography24_bold'
  | 'typography20_bold'
  | 'typography16_bold'
  | 'typography14_bold'
  | 'typography12_bold';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
