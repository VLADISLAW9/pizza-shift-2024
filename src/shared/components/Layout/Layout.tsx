import type { ReactNode } from 'react';

import { Header } from './components/Header';

import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
  </div>
);
