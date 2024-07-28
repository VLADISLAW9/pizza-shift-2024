import type { MantineFontSizesValues } from '@mantine/core';

const fontSizes: Partial<MantineFontSizesValues> = {
  xs: '12px',
  sm: '14px',
  md: '20px',
  lg: '24px',
  xl: '32px'
};

const fontFamily = 'Inter, sans-serif';

export const font = {
  fontSizes,
  fontFamily
};
