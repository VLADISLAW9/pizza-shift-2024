import { useApolloClientReadQuery } from '@hooks/useApolloClientReadQuery';

import type { GetPizzasCatalogQuery } from '@/shared/graphql/__generated__';
import { GetPizzasCatalogDocument } from '@/shared/graphql/__generated__';

export const usePizzaListitem = (pizzaId: string) => {
  const { getPizzasCatalog } = useApolloClientReadQuery(
    GetPizzasCatalogDocument
  ) as GetPizzasCatalogQuery;

  return {
    state: {
      pizza: getPizzasCatalog.catalog.find((pizza) => pizza.id === pizzaId)
    }
  };
};
