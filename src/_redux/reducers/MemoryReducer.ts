import { IMemoryAction } from '../actions/Interfaces/ICalculatorAction';
import { ADD_VALUE_TO_MEMORY, CLEAR_VALUE_FROM_MEMORY, SAVE_VALUE_IN_MEMORY, SUB_VALUE_FROM_MEMORY } from '../actions/MemoryActions';

const defaultValue: string | null = null

export const MemoryReducer = (state = defaultValue, action: IMemoryAction): string | null => {
  switch (action.type) {
    case ADD_VALUE_TO_MEMORY: return String(Number(state) + Number(action.payload?.value));
    case CLEAR_VALUE_FROM_MEMORY: return defaultValue;
    case SAVE_VALUE_IN_MEMORY: return state;
    case SUB_VALUE_FROM_MEMORY: return String(Number(state) - Number(action.payload?.value));
    default: return state;
  }
}