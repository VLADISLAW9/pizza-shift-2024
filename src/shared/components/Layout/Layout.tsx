import { Header } from './components/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);
