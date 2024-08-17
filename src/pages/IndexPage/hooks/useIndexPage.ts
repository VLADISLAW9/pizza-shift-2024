import { useState } from 'react';
import { useModal } from '@hooks/useModal';

import { useGetPizzasCatalogQuery } from '@/shared/graphql/__generated__';

export const useIndexPage = () => {
  const pizzasCatalogQuery = useGetPizzasCatalogQuery();

  const [openedPickPizzaModal, { open, close }] = useModal();
  const [currentPizzaId, setCurrentPizzaId] = useState<string>();

  const onOpenPickPizzaModal = (pizzaId: string) => {
    setCurrentPizzaId(pizzaId);
    open();
  };

  const onClosePickPizzaModal = () => {
    close();
  };

  return {
    state: {
      currentPizzaId,
      openedPickPizzaModal,
      pizzasCatalog: pizzasCatalogQuery.data?.getPizzasCatalog.catalog ?? [],
      loading: pizzasCatalogQuery.loading,
      error: pizzasCatalogQuery.error?.message || pizzasCatalogQuery.data?.getPizzasCatalog.reason
    },
    functions: {
      onOpenPickPizzaModal,
      onClosePickPizzaModal
    }
  };
};
