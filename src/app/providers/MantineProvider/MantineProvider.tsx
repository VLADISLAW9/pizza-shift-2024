import type { ReactNode } from 'react';
import { createTheme, MantineProvider as DefaultMantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineProviderProps) => (
  <DefaultMantineProvider theme={theme}>{children}</DefaultMantineProvider>
);
