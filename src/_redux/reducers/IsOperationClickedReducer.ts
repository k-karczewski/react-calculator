import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { IIsOperationClicked } from '../actions/Interfaces/ICalculatorAction';
import { SET_NEW_OPERATION_CLICKED, UNSET_NEW_OPERATION_CLICKED } from '../actions/IsOperationClickedActions';

const defaultValue = false;

export const IsOperationClicked = (state: boolean = defaultValue, action: IIsOperationClicked) => {
  switch (action.type) {
    case SET_NEW_OPERATION_CLICKED: return true;
    case UNSET_NEW_OPERATION_CLICKED: return false;
    case RESET_CALCULATOR: return defaultValue;
    default: return state
  }
}