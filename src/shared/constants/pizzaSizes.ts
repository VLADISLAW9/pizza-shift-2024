import { Size } from '@/shared/graphql/__generated__';

export const PIZZA_SIZES: Record<Size, string> = {
  [Size.Large]: 'Большая',
  [Size.Medium]: 'Средняя',
  [Size.Small]: 'Маленькая'
};
