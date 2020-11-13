import { IPrevValueAction } from '../actions/Interfaces/ICalculatorAction';
import { CLEAR_VALUE, SET_VALUE } from '../actions/PrevValueActions';

export const PrevValueReducer = (state: string | null = null, action: IPrevValueAction): string | null => {
  switch (action.type) {
    case SET_VALUE:
      if (action.payload) {
        return action.payload?.value;
      } else {
        return null;
      }
    case CLEAR_VALUE: return null;
    default: return state;
  }
}