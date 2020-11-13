import { IIsOperationClicked } from '../actions/Interfaces/ICalculatorAction';
import { SET_NEW_OPERATION_CLICKED, UNSET_NEW_OPERATION_CLICKED } from '../actions/IsOperationClickedActions';

export const IsOperationClicked = (state: boolean = false, action: IIsOperationClicked) => {
  switch (action.type) {
    case SET_NEW_OPERATION_CLICKED: return true;
    case UNSET_NEW_OPERATION_CLICKED: return false;
    default: return state
  }
}