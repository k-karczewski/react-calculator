import { IDisplayAction } from '../actions/Interfaces/ICalculatorAction';
import { UPDATE_DISPLAY, SET_DISPLAY_VALUE, DELETE_LAST_CHAR } from '../actions/DisplayActions';

const defaultValue = '0';

export const DisplayReducer = (state: string = defaultValue, action: IDisplayAction): string => {
  switch (action.type) {
    case DELETE_LAST_CHAR: {
      if (state.length > 1) {
        return state.slice(0, state.length - 1);
      } else {
        return defaultValue;
      }
    }
    case UPDATE_DISPLAY: {
      if (action.payload) {
        if (state === defaultValue || action.payload?.newOperationClicked) {
          return action.payload?.content;
        } else {
          return state += action.payload?.content;
        }
      } else {
        return state;
      }
    }
    case SET_DISPLAY_VALUE:
      if (action.payload) {
        return action.payload?.content
      } else {
        return state;
      }
    default:
      return state;
  }
}
