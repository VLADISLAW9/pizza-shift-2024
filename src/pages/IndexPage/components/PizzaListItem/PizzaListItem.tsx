import { Button } from '@ui/buttons/Button';
import { Image } from '@ui/Image';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import { convertImagePath } from '@/shared/utils/convertImagePath';

import styles from './PizzaListItem.module.css';

interface PizzaListItemProps {
  name: string;
  description: string;
  price: number;
  img: string;
}

export const PizzaListItem = ({ name, description, img, price }: PizzaListItemProps) => {
  return (
    <div className={styles.pizza_item}>
      <Image src={convertImagePath(img)} className={styles.pizza_img} />
      <div className={styles.pizza_info}>
        <Title order={1} size='h4'>
          {name}
        </Title>
        <Text className={styles.pizza_description} size='sm'>
          {description}
        </Text>
      </div>
      <Text fw='bold'>от {price} ₽</Text>
      <Button>Выбрать</Button>
    </div>
  );
};
