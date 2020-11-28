//actions import
import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import {
  DELETE_LAST_CHAR_FROM_RESULT_DISPLAY, SET_RESULT_DISPLAY_VALUE, UPDATE_RESULT_DISPLAY_VALUE,
  CLEAR_HISTORY_DISPLAY_VALUE, SET_HISTORY_DISPLAY_VALUE, UPDATE_HISTORY_DISPLAY_VALUE
} from '../actions/DisplayActions';

// interfaces import
import { IDisplayState } from './Interfaces/ICalculatorReducers';
import { IDisplayAction } from '../actions/Interfaces/ICalculatorActions';

const defaultState: IDisplayState = {
  isHistoryUpdated: false,
  historyDisplayValue: '',
  resultDisplayValue: '0'
};

export const DisplayReducer = (state: IDisplayState = defaultState, action: IDisplayAction): IDisplayState => {
  switch (action.type) {
    case DELETE_LAST_CHAR_FROM_RESULT_DISPLAY: {
      if (state.resultDisplayValue.length > 1) {
        return { ...state, resultDisplayValue: state.resultDisplayValue.slice(0, state.resultDisplayValue.length - 1) };
      } else {
        return defaultState;
      }
    }
    case SET_RESULT_DISPLAY_VALUE: {
      if (action.payload) {
        return { ...state, resultDisplayValue: action.payload.content };
      } else {
        return state;
      }
    }
    case UPDATE_RESULT_DISPLAY_VALUE: {
      if (action.payload) {
        if (state.resultDisplayValue === defaultState.resultDisplayValue || action.payload?.newOperationClicked) {
          if (state.resultDisplayValue === defaultState.resultDisplayValue && action.payload.content === '.') {
            return { ...state, resultDisplayValue: '0.' };
          } else {
            return { ...state, resultDisplayValue: action.payload?.content };
          }
        }
        else {
          return { ...state, resultDisplayValue: state.resultDisplayValue += action.payload?.content };
        }
      } else {
        return state;
      }
    }
    case CLEAR_HISTORY_DISPLAY_VALUE: return { ...state, historyDisplayValue: defaultState.historyDisplayValue };
    case UPDATE_HISTORY_DISPLAY_VALUE: {
      if (!state.isHistoryUpdated) {
        return { ...state, historyDisplayValue: `${state.historyDisplayValue}${action.payload?.content}` };
      } else {
        return state;
      }
    }
    case SET_HISTORY_DISPLAY_VALUE:
      if (action.payload) {
        return { ...state, historyDisplayValue: action.payload?.content }
      } else {
        return state;
      }
    case RESET_CALCULATOR: return defaultState;
    default:
      return state;
  }
}