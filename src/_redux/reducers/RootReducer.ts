import { combineReducers } from 'redux';

import { DisplayReducer } from './DisplayReducer';

export const RootReducer = combineReducers({
  Display: DisplayReducer
})


