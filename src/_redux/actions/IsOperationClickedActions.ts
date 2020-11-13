import { IIsOperationClicked } from './Interfaces/ICalculatorAction';

export const SET_NEW_OPERATION_CLICKED = 'SET_NEW_OPERATION_CLICKED';
export const UNSET_NEW_OPERATION_CLICKED = 'UNSET_NEW_OPERATION_CLICKED';

export const newOperationActiveAction: IIsOperationClicked = {
  type: SET_NEW_OPERATION_CLICKED
}

export const newOperationInactiveAction: IIsOperationClicked = {
  type: UNSET_NEW_OPERATION_CLICKED
}