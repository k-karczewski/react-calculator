import { RESET_CALCULATOR } from '../actions/CalculatorActions';
import { ICalculateResultAction } from '../actions/Interfaces/ICalculatorAction';
import { CALCULATE_ONE_NUMBERED_OPERATION, CALCULATE_RESULT_OF_TWO_NUMBERS } from '../actions/ResultActions';

const defaultValue = null;

export const ResultReducer = (state: string | null = defaultValue, action: ICalculateResultAction): string | null => {

  switch (action.type) {
    case CALCULATE_ONE_NUMBERED_OPERATION: {
      return performOneNumberedCalculation(action.payload.leftValue, action.payload.operation);
    }
    case CALCULATE_RESULT_OF_TWO_NUMBERS: {
      if (action.payload.rightValue) {
        return performTwoNumberedCalculation(action.payload.leftValue, action.payload.rightValue, action.payload.operation);
      } else {
        return state;
      }
    }
    case RESET_CALCULATOR: return defaultValue;
    default: return state;
  }
}


const performOneNumberedCalculation = (value: string, operation: string): string => {
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