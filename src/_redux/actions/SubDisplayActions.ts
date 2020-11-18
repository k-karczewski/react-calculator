import { IDisplayAction } from '../actions/Interfaces/ICalculatorAction';

export const UPDATE_SUBDISPLAY = 'UPDATE_SUBDISPLAY';
export const CLEAR_SUBDISPLAY = 'CLEAR_SUBDISPLAY';
export const SET_SUBDISPLAY_VALUE = 'SET_SUBDISPLAY_VALUE'

export const updateSubDisplayAction: IDisplayAction = {
  type: UPDATE_SUBDISPLAY,
  payload: {
    content: ''
  }
}

export const setSubDisplayValueAction: IDisplayAction = {
  type: SET_SUBDISPLAY_VALUE,
  payload: {
    content: ''
  }
}

export const clearSubDisplayAction: IDisplayAction = {
  type: CLEAR_SUBDISPLAY
}