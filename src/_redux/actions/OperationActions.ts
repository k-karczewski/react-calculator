import { IOperationAction } from "./Interfaces/ICalculatorAction";

export const CLEAR_OPERATION = 'CLEAR_OPERATION';
export const SET_OPERATION = 'SET_OPERATION';

export const clearOperationAction: IOperationAction = {
  type: CLEAR_OPERATION
};

export const setOperationAction: IOperationAction = {
  type: SET_OPERATION,
  payload: {
    operation: ''
  }
};

