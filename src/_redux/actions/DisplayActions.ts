import { IDisplayAction } from './Interfaces/ICalculatorActions';

// result display
export const DELETE_LAST_CHAR_FROM_RESULT_DISPLAY = 'DELETE_LAST_CHAR_FROM_RESULT_DISPLAY';
export const SET_RESULT_DISPLAY_VALUE = 'SET_RESULT_DISPLAY_VALUE';
export const UPDATE_RESULT_DISPLAY_VALUE = 'UPDATE_RESULT_DISPLAY_VALUE';

export const deleteLastCharFromResultDisplayAction: IDisplayAction = {
  type: DELETE_LAST_CHAR_FROM_RESULT_DISPLAY,
}

export const updateResultDisplayValueAction: IDisplayAction = {
  type: UPDATE_RESULT_DISPLAY_VALUE,
  payload: {
    content: '',
    newOperationClicked: false
  }
}

export const setResultDisplayValueAction: IDisplayAction = {
  type: SET_RESULT_DISPLAY_VALUE,
  payload: {
    content: ''
  }
}

// history display
export const CLEAR_HISTORY_DISPLAY_VALUE = 'CLEAR_HISTORY_DISPLAY_VALUE';
export const SET_HISTORY_DISPLAY_VALUE = 'SET_HISTORY_DISPLAY_VALUE'
export const UPDATE_HISTORY_DISPLAY_VALUE = 'UPDATE_HISTORY_DISPLAY_VALUE';

export const clearHistoryDisplayValueAction: IDisplayAction = {
  type: CLEAR_HISTORY_DISPLAY_VALUE
}

export const setHistoryDisplayValueAction: IDisplayAction = {
  type: SET_HISTORY_DISPLAY_VALUE,
  payload: {
    content: ''
  }
}

export const updateHistoryDisplayValueAction: IDisplayAction = {
  type: UPDATE_HISTORY_DISPLAY_VALUE,
  payload: {
    content: ''
  }
}