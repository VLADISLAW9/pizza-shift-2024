import { PIZZA_SIZES } from '@constants/pizzaSizes';
import { usePickPizzaForm } from '@pages/IndexPage/components/PickPizzaForm/hooks/usePickPizzaForm';
import { Button } from '@ui/buttons/Button';
import { Image } from '@ui/Image';
import { SegmentedControl } from '@ui/SegmentedControl';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import { convertImagePath } from '@/shared/utils/convertImagePath';

import { IngredientItem } from './components/IngredientItem';

import styles from './PickPizzaForm.module.css';

interface PickPizzaFormProps {
  id: string;
}

export const PickPizzaForm = ({ id }: PickPizzaFormProps) => {
  const { form, state, functions } = usePickPizzaForm(id);

  if (!state.pizza) {
    return null;
  }

  return (
    <div className={styles.pick_pizza_wrapper}>
      <Image src={convertImagePath(state.pizza.img)} className={styles.pick_pizza_img} />
      <form onSubmit={functions.onAddPizzaToCart} className={styles.pick_pizza_form}>
        <Title order={1} size='h2'>
          {state.pizza.name}
        </Title>
        <Text size='sm'>{state.pizza.description}</Text>
        <SegmentedControl
          {...form.getInputProps('size')}
          key={form.key('size')}
          data={state.pizza.sizes.map((size) => ({
            label: PIZZA_SIZES[size.name],
            value: JSON.stringify({ price: size.price, name: size.name }),
            disabled: false
          }))}
        />
        <Title order={2} size='h4'>
          Добавить по вкусу
        </Title>
        <ul className={styles.ingredient_list}>
          {state.pizza.ingredients.map((ingredient) => (
            <li>
              <IngredientItem
                key={ingredient.name}
                img={convertImagePath(ingredient.img)}
                name={ingredient.name}
                price={ingredient.cost}
              />
            </li>
          ))}
        </ul>
        <Button type='submit' fullWidth>
          Добавить в корзину
        </Button>
      </form>
    </div>
  );
};
