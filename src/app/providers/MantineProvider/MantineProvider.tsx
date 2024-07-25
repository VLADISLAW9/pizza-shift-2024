import { createTheme, MantineProvider as _MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProvider = ({ children }: MantineProviderProps) => (
  <_MantineProvider theme={theme}>{children}</_MantineProvider>
);
