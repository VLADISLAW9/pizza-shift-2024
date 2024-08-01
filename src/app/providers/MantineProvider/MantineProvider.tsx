import * as Mantine from '@mantine/core';

import { colors } from './constants/colors';
import { font } from './constants/font';

const theme = Mantine.createTheme({
  primaryColor: 'orange',
  colors,
  fontSizes: font.fontSizes,
  fontFamily: font.fontFamily
});

export const MantineProvider = ({ children, ...props }: Mantine.MantineProviderProps) => (
  <Mantine.MantineProvider theme={theme} {...props}>
    {children}
  </Mantine.MantineProvider>
);
