import { ICalculateResultAction } from './Interfaces/ICalculatorAction';

export const CALCULATE_RESULT_OF_TWO_NUMBERS = 'CALCULATE_RESULT';
export const CALCULATE_ONE_NUMBERED_OPERATION = 'CALCULATE_ONE_NUMBERED_OPERATION'

export const calculateResultOfTwoNumbersAction: ICalculateResultAction = {
  type: CALCULATE_RESULT_OF_TWO_NUMBERS,
  payload: {
    leftValue: '0',
    rightValue: '0',
    operation: ''
  }
}

export const calculateOneNumberedOperation: ICalculateResultAction = {
  type: CALCULATE_ONE_NUMBERED_OPERATION,
  payload: {
    leftValue: '0',
    operation: ''
  }
}