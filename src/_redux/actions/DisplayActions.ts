import { IDisplayAction } from './Interfaces/ICalculatorAction';

export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE';

export const concatenateCharAction: IDisplayAction = {
  type: UPDATE_DISPLAY,
  payload: {
    content: '',
    newOperationClicked: false
  }
}

export const setDisplayValueAction: IDisplayAction = {
  type: SET_DISPLAY_VALUE,
  payload: {
    content: '0'
  }
}