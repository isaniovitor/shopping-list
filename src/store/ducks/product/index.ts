import type { Reducer } from 'redux';

import { GROCERY_LIST } from '~/constants/grocery';

import { GroceryTypes } from './types';
import type { GroceryState } from './types';

const INITIAL_STATE: GroceryState = {
  groceryList: GROCERY_LIST,
};

const reducer: Reducer<GroceryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case GroceryTypes.INSERT_ITEM:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    default:
      return state;
  }
};

export default reducer;
