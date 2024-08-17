import { useApolloClientReadQuery } from '@hooks/useApolloClientReadQuery';
import { useForm } from '@mantine/form';

import type { GetPizzasCatalogQuery, PizzaIngredient } from '@/shared/graphql/__generated__';
import { GetPizzasCatalogDocument, Size } from '@/shared/graphql/__generated__';

export const usePickPizzaForm = (id: string) => {
  const { getPizzasCatalog } = useApolloClientReadQuery(
    GetPizzasCatalogDocument
  ) as GetPizzasCatalogQuery;

  const pizza = getPizzasCatalog.catalog.find((pizza) => pizza.id === id);

  const form = useForm<{ size: string; toppings: PizzaIngredient[] }>({
    mode: 'uncontrolled',
    initialValues: {
      size: JSON.stringify({ price: pizza?.sizes[0].price, name: Size.Small }),
      toppings: [] as PizzaIngredient[]
    }
  });

  const onAddPizzaToCart = form.onSubmit((values) => {
    console.log(values);
  });

  return {
    form,
    state: {
      pizza
    },
    functions: {
      onAddPizzaToCart
    }
  };
};
