import { UPDATE_SUBDISPLAY, CLEAR_SUBDISPLAY, SET_SUBDISPLAY_VALUE } from '../actions/SubDisplayActions';
import { IDisplayAction } from '../actions/Interfaces/ICalculatorAction';

const defaultValue = '';

export const SubDisplayReducer = (state = defaultValue, action: IDisplayAction): string => {
  switch (action.type) {
    case UPDATE_SUBDISPLAY: return `${state}${action.payload?.content} `;
    case SET_SUBDISPLAY_VALUE:
      if (action.payload) {
        return action.payload?.content
      }
      else {
        return state;
      }
    case CLEAR_SUBDISPLAY: return defaultValue;
    default: return state;
  }
}