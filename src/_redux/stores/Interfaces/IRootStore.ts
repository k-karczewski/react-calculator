import { IDisplayState, IOperationState } from "../../reducers/Interfaces/ICalculatorReducers";

export interface IRootStore {
  operationsState: IOperationState;
  displayState: IDisplayState;
  memoryValue: string | null;
  prevValue: string | null;
  resultValue: string | null;
}