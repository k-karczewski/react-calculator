import { IOperationAction } from '../actions/Interfaces/ICalculatorAction';

import { CLEAR_OPERATION, SET_OPERATION } from '../actions/OperationActions';

export const OperationReducer = (state: string | null = null, action: IOperationAction) => {
  switch (action.type) {
    case CLEAR_OPERATION: {
      return null;
    }
    case SET_OPERATION: {
      return action.payload?.operation;
    }
    default: {
      return state;
    }
  }
}