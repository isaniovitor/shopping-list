import type { CategoryState } from '~/store/ducks/category/types';
import type { GroceryState } from '~/store/ducks/product/types';
import type { UserState } from '~/store/ducks/user/types';

export interface AplicationState {
  category: CategoryState;
  user: UserState;
  product: GroceryState;
}
