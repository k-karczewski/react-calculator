//actions import
import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { SET_NEW_OPERATION, SET_EQUALS_CLICKED, UNSET_EQUALS_CLICKED, UNSET_NEW_OPERATION_CLICKED } from '../actions/OperationsActions';

//interfaces import
import { IOperationState } from './Interfaces/ICalculatorReducers';
import { IOperationAction } from '../actions/Interfaces/ICalculatorActions';

const defaultValue: IOperationState = {
  equalsClicked: false,
  newOperationClicked: false,
  operation: null,
  // specialOperationClicked: false
};

export const OperationsReducer = (state: IOperationState = defaultValue, action: IOperationAction): IOperationState => {
  switch (action.type) {
    case SET_NEW_OPERATION:
      if (action.payload) return { equalsClicked: false, newOperationClicked: true, operation: action.payload?.operation }
      else return { ...state, equalsClicked: false, newOperationClicked: true };

    case SET_EQUALS_CLICKED:
      return { ...state, equalsClicked: true }

    case UNSET_EQUALS_CLICKED:
      return { ...state, equalsClicked: false }

    case UNSET_NEW_OPERATION_CLICKED:
      return { ...state, equalsClicked: false, newOperationClicked: false };

    case RESET_CALCULATOR: return defaultValue;
    default: return state;
  }
}