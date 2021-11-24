import type { Reducer } from 'redux';

import { UserTypes } from './types';
import type { UserState } from './types';

const INITIAL_STATE: UserState = {
  username: '',
  password: '',
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        ...state,
        username: payload.username,
        password: payload.password,
      };
    default:
      return state;
  }
};

export default reducer;
