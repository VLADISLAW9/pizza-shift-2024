import { useGetPizzasCatalogQuery } from '@/shared/graphql/__generated__';

export const useIndexPage = () => {
  const pizzasCatalogQuery = useGetPizzasCatalogQuery();

  return {
    state: {
      pizzasCatalog: pizzasCatalogQuery.data?.getPizzasCatalog.catalog ?? [],
      loading: pizzasCatalogQuery.loading,
      error: pizzasCatalogQuery.error?.message || pizzasCatalogQuery.data?.getPizzasCatalog.reason
    }
  };
};
