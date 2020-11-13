import { combineReducers } from 'redux';

import { DisplayReducer } from './DisplayReducer';
import { OperationReducer } from './OperationReducer';
import { IsOperationClicked } from './IsOperationClickedReducer';
import { PrevValueReducer } from './PrevValueReducer';
import { ResultReducer } from './ResultReducer';

export const RootReducer = combineReducers({
  DisplayValue: DisplayReducer,
  CurrentOperation: OperationReducer,
  IsNewOperationClicked: IsOperationClicked,
  PrevValue: PrevValueReducer,
  ResultValue: ResultReducer
})


