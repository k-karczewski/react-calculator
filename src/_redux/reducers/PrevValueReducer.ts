import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { IPrevValueAction } from '../actions/Interfaces/ICalculatorActions';
import { CLEAR_VALUE, SET_VALUE } from '../actions/PrevValueActions';

const defaultValue = null;

export const PrevValueReducer = (state: string | null = defaultValue, action: IPrevValueAction): string | null => {
  switch (action.type) {
    case SET_VALUE: {
      if (action.payload) {
        return action.payload?.value;
      } else {
        return defaultValue;
      }
    }
    case CLEAR_VALUE: return defaultValue;
    case RESET_CALCULATOR: return defaultValue;
    default: return state;
  }
}