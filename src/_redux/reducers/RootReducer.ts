import { combineReducers } from 'redux';

import { DisplayReducer } from './DisplayReducer';
import { MemoryReducer } from './MemoryReducer';
import { OperationsReducer } from './OperationsReducer';
import { ValuesReducer } from './ValuesReducer';

export const RootReducer = combineReducers({
  operationsState: OperationsReducer,
  displayState: DisplayReducer,
  memoryValue: MemoryReducer,
  values: ValuesReducer,
})


