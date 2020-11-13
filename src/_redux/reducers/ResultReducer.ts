import { ICalculateResultAction } from '../actions/Interfaces/ICalculatorAction';
import { CALCULATE_RESULT_OF_TWO_NUMBERS } from '../actions/ResultActions';

export const ResultReducer = (state: string = '', action: ICalculateResultAction): string | null => {

  switch (action.type) {
    case CALCULATE_RESULT_OF_TWO_NUMBERS: return performCalculation(action.payload.leftValue, action.payload.rightValue, action.payload.operation);
    default: return null;
  }
}

const performCalculation = (leftValue: string, rightValue: string, operation: string): string => {
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