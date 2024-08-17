import { Modal } from '@ui/Modal';
import { Page } from '@ui/Page';

import { PickPizzaForm } from './components/PickPizzaForm/PickPizzaForm';
import { PizzaListItem } from './components/PizzaListItem';
import { useIndexPage } from './hooks/useIndexPage';

import styles from './IndexPage.module.css';

export const IndexPage = () => {
  const { state, functions } = useIndexPage();

  if (state.loading) {
    return <div>Загружаем пиццы...</div>;
  }

  if (state.error) {
    return <div>Произошла ошибка: {state.error}</div>;
  }

  return (
    <>
      <Modal
        size='xl'
        opened={state.openedPickPizzaModal}
        onClose={functions.onClosePickPizzaModal}
      >
        {state.currentPizzaId && <PickPizzaForm id={state.currentPizzaId} />}
      </Modal>
      <Page title='Шифт Пицца'>
        <ul className={styles.pizzas_list}>
          {state.pizzasCatalog.map((pizzasCatalogItem) => (
            <li key={pizzasCatalogItem.id}>
              <PizzaListItem
                id={pizzasCatalogItem.id}
                onPickPizza={functions.onOpenPickPizzaModal}
              />
            </li>
          ))}
        </ul>
      </Page>
    </>
  );
};
