import { IOperationState } from "../../reducers/Interfaces/ICalculatorReducers";

export interface IRootStore {
  operationsState: IOperationState;
  displayValue: string;
  memoryValue: string | null;
  prevValue: string | null;
  resultValue: string | null;
}