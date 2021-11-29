import { combineReducers } from 'redux';

import category from './category';
import product from './product';
import user from './user';

export default combineReducers({ user, product, category });
