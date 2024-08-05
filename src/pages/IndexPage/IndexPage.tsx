import { Page } from '@ui/Page';

import { PizzaListItem } from './components/PizzaListItem';
import { useIndexPage } from './hooks/useIndexPage';

import styless from './IndexPage.module.css';

export const IndexPage = () => {
  const { state } = useIndexPage();

  if (state.loading) {
    return <div>Загружаем пиццы...</div>;
  }

  if (state.error) {
    return <div>Произошла ошибка: {state.error}</div>;
  }

  return (
    <Page title='Шифт Пицца'>
      <ul className={styless.pizzas_list}>
        {state.pizzasCatalog.map((pizzasCatalogItem) => (
          <li key={pizzasCatalogItem.id}>
            <PizzaListItem {...pizzasCatalogItem} price={pizzasCatalogItem.sizes[0].price} />
          </li>
        ))}
      </ul>
    </Page>
  );
};
