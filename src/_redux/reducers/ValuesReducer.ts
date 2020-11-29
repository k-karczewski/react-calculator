// actions import
import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import {
  CALCULATE_ONE_NUMBERED_OPERATION, CALCULATE_TWO_NUMBERED_OPERATION,
  CLEAR_PREV_VALUE, REMEMBER_VALUE_WITHOUT_CALCULATION, SET_PREV_VALUE
} from '../actions/ValuesActions';

// interfaces import
import { IValuesAction } from '../actions/Interfaces/ICalculatorActions';
import { IValuesState } from './Interfaces/ICalculatorReducers';

const defaultState: IValuesState = {
  result: null,
  prevValue: null
};

export const ValuesReducer = (state: IValuesState = defaultState, action: IValuesAction): IValuesState => {
  switch (action.type) {
    case CALCULATE_ONE_NUMBERED_OPERATION: {
      if (action.payload && action.payload.leftValue && action.payload.operation) {
        if (action.payload.operation !== '%') {
          const calculationResult = performOneNumberedCalculation(action.payload.leftValue, action.payload.operation);

          if (!state.result || action.payload.equalsClicked === true) {
            return { result: calculationResult, prevValue: defaultState.prevValue };
          } else {
            return { ...state, prevValue: calculationResult }
          }
        } else {

          const calculationResult = performOneNumberedCalculation(action.payload.leftValue, action.payload.operation, state.result);
          debugger
          if (!state.result) {
            return { result: calculationResult, prevValue: defaultState.prevValue };
          } else {
            return { ...state, prevValue: calculationResult }
          }
        }
      } else {
        return state;
      }
    }
    case CALCULATE_TWO_NUMBERED_OPERATION: {
      if (action.payload && action.payload.leftValue && action.payload.rightValue && action.payload.operation) {
        const calculationResult = performTwoNumberedCalculation(action.payload.leftValue, action.payload.rightValue, action.payload.operation);
        return { ...state, result: calculationResult }
      } else {
        return state;
      }
    }
    case REMEMBER_VALUE_WITHOUT_CALCULATION: {
      if (action.payload?.leftValue) {
        return { ...state, result: action.payload.leftValue }
      } else {
        return state;
      }
    }
    case SET_PREV_VALUE: {
      if (action.payload && action.payload.leftValue) {
        return { ...state, prevValue: action.payload?.leftValue };
      } else {
        return state;
      }
    }
    case CLEAR_PREV_VALUE: return { ...state, prevValue: defaultState.prevValue };
    case RESET_CALCULATOR: return defaultState;
    default: return state;
  }
}


const performOneNumberedCalculation = (value: string, operation: string, baseValue?: string | null): string => {
  let result: number = 0;

  switch (operation) {
    case '1/x':
      result = 1 / Number(value);
      break;
    case 'sqrt':
      result = Math.sqrt(Number(value));
      break;
    case 'x2':
      result = Math.pow(Number(value), 2);
      break;
    case '%':
      if (baseValue && baseValue !== null) {
        result = Number(value) * Number(baseValue) / 100;
      } else {
        result = 0;
      }
  }

  return String(result);
}

const performTwoNumberedCalculation = (leftValue: string, rightValue: string, operation: string): string => {
  let result: number = 0;

  switch (operation) {
    case '+':
      result = Number(leftValue) + Number(rightValue);
      break;
    case '-':
      result = Number(leftValue) - Number(rightValue);
      break;
    case '*':
      result = Number(leftValue) * Number(rightValue);
      break;
    case '/':
      result = Number(leftValue) / Number(rightValue);
      break;

    default: return '0'
  }

  return String(result);
}