import type { Reducer } from 'redux';

import { CATEGORIES } from '~/constants/grocery';

import { CategoryTypes } from './types';
import type { CategoryState } from './types';

const INITIAL_STATE: CategoryState = {
  categoryList: CATEGORIES,
};

const reducer: Reducer<CategoryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryTypes.INSERT_CATEGORY:
      return {
        ...state,
        categoryList: payload.categoryList,
      };
    default:
      return state;
  }
};

export default reducer;
