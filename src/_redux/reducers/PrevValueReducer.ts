//actions import
import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { CLEAR_VALUE, SET_VALUE } from '../actions/PrevValueActions';

// interfaces import
import { IPrevValueAction } from '../actions/Interfaces/ICalculatorActions';

const defaultState = null;

export const PrevValueReducer = (state: string | null = defaultState, action: IPrevValueAction): string | null => {
  switch (action.type) {
    case SET_VALUE: {
      if (action.payload) {
        return action.payload?.value;
      } else {
        return defaultState;
      }
    }
    case CLEAR_VALUE: return defaultState;
    case RESET_CALCULATOR: return defaultState;
    default: return state;
  }
}