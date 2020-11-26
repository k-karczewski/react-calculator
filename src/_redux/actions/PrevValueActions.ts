import { IPrevValueAction } from "./Interfaces/ICalculatorActions";

export const CLEAR_VALUE = 'CLEAR_VALUE';
export const SET_VALUE = 'SET_VALUE';

export const clearValueAction: IPrevValueAction = {
  type: CLEAR_VALUE
}

export const setValueAction: IPrevValueAction = {
  type: SET_VALUE,
  payload: {
    value: '0'
  }
};