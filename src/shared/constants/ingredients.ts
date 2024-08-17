import { Ingredient } from '@/shared/graphql/__generated__';

export const INGREDIENTS: Record<Ingredient, string> = {
  [Ingredient.Bacon]: 'Бекон',
  [Ingredient.Basil]: 'Базилик',
  [Ingredient.Cheddar]: 'Чеддер',
  [Ingredient.ChickenFillet]: 'Куриное филе',
  [Ingredient.Chile]: 'Чили',
  [Ingredient.Feta]: 'Фета',
  [Ingredient.GreenPepper]: 'Зеленый перец',
  [Ingredient.Ham]: 'Шампиньоны',
  [Ingredient.Meatballs]: 'Мясные шарики',
  [Ingredient.Mozzarella]: 'Моцарелла',
  [Ingredient.Mushrooms]: 'Грибы',
  [Ingredient.Onion]: 'Лук',
  [Ingredient.Parmesan]: 'Пармезан',
  [Ingredient.Peperoni]: 'Пепперони',
  [Ingredient.Pickle]: 'Пикл',
  [Ingredient.Pineapple]: 'Ананас',
  [Ingredient.Shrimps]: 'Щи',
  [Ingredient.Tomato]: 'Помидор'
};
