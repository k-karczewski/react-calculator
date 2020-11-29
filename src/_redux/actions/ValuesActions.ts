import { IValuesAction } from './Interfaces/ICalculatorActions';

export const CALCULATE_ONE_NUMBERED_OPERATION = 'CALCULATE_ONE_NUMBERED_OPERATION';
export const CALCULATE_TWO_NUMBERED_OPERATION = 'CALCULATE_TWO_NUMBERED_OPERATION';
export const REMEMBER_VALUE_WITHOUT_CALCULATION = 'REMEMBER_VALUE_WITHOUT_CALCULATION';

export const CLEAR_PREV_VALUE = 'CLEAR_PREV_VALUE';
export const SET_PREV_VALUE = 'SET_PREV_VALUE';

export const calculateTwoNumberedOperationAction: IValuesAction = {
  type: CALCULATE_TWO_NUMBERED_OPERATION,
  payload: {
    leftValue: '0',
    rightValue: '0',
    operation: ''
  }
}

export const calculateOneNumberedOperation: IValuesAction = {
  type: CALCULATE_ONE_NUMBERED_OPERATION,
  payload: {
    leftValue: '0',
    operation: ''
  }
}

export const rememberValueWithoutCalculationAction: IValuesAction = {
  type: REMEMBER_VALUE_WITHOUT_CALCULATION,
  payload: {
    leftValue: '0',
  }
}

export const clearPrevValueAction: IValuesAction = {
  type: CLEAR_PREV_VALUE
}

export const setValueAction: IValuesAction = {
  type: SET_PREV_VALUE,
  payload: {
    leftValue: '0'
  }
};