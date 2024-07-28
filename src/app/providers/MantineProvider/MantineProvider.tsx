import type { MantineProviderProps } from '@mantine/core';
import { createTheme, MantineProvider as DefaultMantineProvider } from '@mantine/core';

import { colors } from './constants/colors';

const theme = createTheme({
  primaryColor: 'orange',
  colors
});

export const MantineProvider = ({ children, ...props }: MantineProviderProps) => (
  <DefaultMantineProvider theme={theme} {...props}>
    {children}
  </DefaultMantineProvider>
);
