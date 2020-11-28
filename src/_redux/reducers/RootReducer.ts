import { combineReducers } from 'redux';

import { DisplayReducer } from './DisplayReducer';
import { MemoryReducer } from './MemoryReducer';
import { OperationsReducer } from './OperationsReducer';
import { PrevValueReducer } from './PrevValueReducer';
import { ResultReducer } from './ResultReducer';

export const RootReducer = combineReducers({
  operationsState: OperationsReducer,
  displayState: DisplayReducer,
  memoryValue: MemoryReducer,
  prevValue: PrevValueReducer,
  resultValue: ResultReducer,
})


