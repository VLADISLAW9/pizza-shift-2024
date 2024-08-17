import { Button } from '@ui/buttons/Button';
import { Image } from '@ui/Image';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import { convertImagePath } from '@/shared/utils/convertImagePath';

import styles from './PizzaListItem.module.css';
import { usePizzaListitem } from '@pages/IndexPage/components/PizzaListItem/hooks/usePizzaListitem';

interface PizzaListItemProps {
  id: string;
  onPickPizza: (pizzaId: string) => void;
}

export const PizzaListItem = ({ id, onPickPizza }: PizzaListItemProps) => {
  const { state } = usePizzaListitem(id);

  if (!state.pizza) {
    return null;
  }

  return (
    <div className={styles.pizza_item}>
      <Image src={convertImagePath(state.pizza.img)} className={styles.pizza_img} />
      <div className={styles.pizza_info}>
        <Title order={1} size='h4'>
          {state.pizza.name}
        </Title>
        <Text className={styles.pizza_description} size='sm'>
          {state.pizza.description}
        </Text>
      </div>
      <Text fw='bold'>от {state.pizza.sizes[0].price} ₽</Text>
      <Button onClick={() => onPickPizza(id)}>Выбрать</Button>
    </div>
  );
};
