import type { Action } from 'redux';

import type { CategoryProps } from '~/@types/entities/Category';

export enum CategoryTypes {
  INSERT_CATEGORY = '@category/INSERT_CATEGORY',
}

export interface CategoryState {
  categoryList: CategoryProps[];
}

export interface CategoryActionProps extends Action {
  type: CategoryTypes.INSERT_CATEGORY;
  payload: {
    categoryList: CategoryProps[];
  };
}
