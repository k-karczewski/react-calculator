import { combineReducers } from 'redux';

import { DisplayReducer } from './DisplayReducer';
import { IsOperationClicked } from './IsOperationClickedReducer';
import { MemoryReducer } from './MemoryReducer';
import { OperationReducer } from './OperationReducer';
import { PrevValueReducer } from './PrevValueReducer';
import { ResultReducer } from './ResultReducer';
import { SubDisplayReducer } from './SubDisplayReducer';

export const RootReducer = combineReducers({
  CurrentOperation: OperationReducer,
  DisplayValue: DisplayReducer,
  IsNewOperationClicked: IsOperationClicked,
  MemoryValue: MemoryReducer,
  PrevValue: PrevValueReducer,
  ResultValue: ResultReducer,
  SubDisplayValue: SubDisplayReducer,
})


