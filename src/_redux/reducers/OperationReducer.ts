import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { IOperationAction } from '../actions/Interfaces/ICalculatorAction';

import { CLEAR_OPERATION, SET_OPERATION } from '../actions/OperationActions';

const defaultValue = null;

export const OperationReducer = (state: string | null = defaultValue, action: IOperationAction) => {
  switch (action.type) {
    case CLEAR_OPERATION: return null;
    case SET_OPERATION: return action.payload?.operation;
    case RESET_CALCULATOR: return defaultValue;
    default: return state;
  }
}