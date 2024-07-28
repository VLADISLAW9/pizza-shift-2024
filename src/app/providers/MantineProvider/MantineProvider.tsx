import type { MantineProviderProps } from '@mantine/core';
import { createTheme, MantineProvider as DefaultMantineProvider } from '@mantine/core';

import { colors } from './constants/colors';
import { font } from './constants/font';

const theme = createTheme({
  primaryColor: 'orange',
  colors,
  fontSizes: font.fontSizes,
  fontFamily: font.fontFamily
});

export const MantineProvider = ({ children, ...props }: MantineProviderProps) => (
  <DefaultMantineProvider theme={theme} {...props}>
    {children}
  </DefaultMantineProvider>
);
