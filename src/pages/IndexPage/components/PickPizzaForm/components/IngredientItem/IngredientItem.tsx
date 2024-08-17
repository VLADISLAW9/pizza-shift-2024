import { INGREDIENTS } from '@constants/ingredients';
import { UnstyledButton } from '@ui/buttons/UnstyledButton';
import { Card } from '@ui/card/Card';
import { CardSection } from '@ui/card/CardSection';
import { Image } from '@ui/Image';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import type { Ingredient } from '@/shared/graphql/__generated__';

import styles from './IngredientItem.module.css';

interface IngredientItemProps {
  img: string;
  name: Ingredient;
  price: number;
}

export const IngredientItem = ({ name, price, img }: IngredientItemProps) => (
  <UnstyledButton>
    <Card className={styles.ingredients_card} shadow='md' radius='md'>
      <CardSection>
        <Image className={styles.ingredients_img} src={img} />
      </CardSection>
      <CardSection>
        <Title fw='normal' order={1} size='h6'>
          {INGREDIENTS[name]}
        </Title>
        <Text fw='bold' size='sm'>
          {price} ₽
        </Text>
      </CardSection>
    </Card>
  </UnstyledButton>
);
