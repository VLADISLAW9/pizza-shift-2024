import type { Pizza } from '@/shared/graphql/__generated__';

export type CurrentPickPizza = Pick<
  Pizza,
  'img' | 'name' | 'description' | 'sizes' | 'ingredients'
>;
