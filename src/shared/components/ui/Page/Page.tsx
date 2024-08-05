import type { ReactNode } from 'react';
import { Title } from '@ui/typography/Title';
import clsx from 'clsx';

import styles from './Page.module.css';

interface PageProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Page = ({ children, title, className }: PageProps) => (
  <div className={clsx(styles.page, className)}>
    <Title order={1} size='h2' className={styles.page_header}>
      {title}
    </Title>
    {children}
  </div>
);
