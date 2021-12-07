import { action } from 'typesafe-actions';

import type { GroceryProps } from '~/@types/entities/Grocery';

import type { GroceryActionProps } from './types';
import { GroceryTypes } from './types';

export const addProductAction = (
  groceryList: GroceryProps[],
): GroceryActionProps =>
  action(GroceryTypes.INSERT_ITEM, {
    groceryList,
  });
