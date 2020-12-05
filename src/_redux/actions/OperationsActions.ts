import { IOperationAction } from "./Interfaces/ICalculatorActions";

export const SET_NEW_OPERATION = 'SET_NEW_OPERATION';

export const UNSET_NEW_OPERATION_CLICKED = 'UNSET_NEW_OPERATION_CLICKED';

export const SET_EQUALS_CLICKED = 'SET_EQUALS_CLICKED';
export const UNSET_EQUALS_CLICKED = 'UNSET_EQUALS_CLICKED';

export const SET_SPECIAL_OPERATION_CLICKED = 'SET_SPECIAL_OPERATION_CLICKED';
export const UNSET_SPECIAL_OPERATION_CLICKED = 'UNSET_SPECIAL_OPERATION_CLICKED';

export const setEqualsClickedAction: IOperationAction = {
  type: SET_EQUALS_CLICKED
}


export const setNewOperationAction: IOperationAction = {
  type: SET_NEW_OPERATION,
  payload: {
    operation: ''
  }
};

export const unsetNewOperationClickedAction: IOperationAction = {
  type: UNSET_NEW_OPERATION_CLICKED
}

export const unsetEqualsClickedAction: IOperationAction = {
  type: UNSET_EQUALS_CLICKED
}

export const unsetSpecialOperationClickedAction: IOperationAction = {
  type: UNSET_EQUALS_CLICKED
}