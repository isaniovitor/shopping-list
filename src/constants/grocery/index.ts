import type { CategoryProps } from '~/@types/entities/Category';
import type { GroceryProps } from '~/@types/entities/Grocery';

export const CATEGORIES: CategoryProps[] = [
  { id: 1, name: 'Carnes' },
  { id: 2, name: 'Frutas' },
  { id: 3, name: 'Legumes' },
  { id: 4, name: 'Limpeza' },
];

export const GROCERY_LIST: GroceryProps[] = [
  {
    id: 1,
    name: 'Carnes',
    listItems: [],
  },
  {
    id: 2,
    name: 'Frutas',
    listItems: [],
  },
  {
    id: 3,
    name: 'Legumes',
    listItems: [],
  },
  {
    id: 4,
    name: 'Limpeza',
    listItems: [],
  },
];
