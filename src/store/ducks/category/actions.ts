import { action } from 'typesafe-actions';

import type { CategoryProps } from '~/@types/entities/Category';

import type { CategoryActionProps } from './types';
import { CategoryTypes } from './types';

export const addCategoryAction = (
  categoryList: CategoryProps[],
): CategoryActionProps =>
  action(CategoryTypes.INSERT_CATEGORY, {
    categoryList,
  });
