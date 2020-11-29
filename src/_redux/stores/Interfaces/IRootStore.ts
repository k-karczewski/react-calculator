import { IDisplayState, IOperationState, IValuesState } from "../../reducers/Interfaces/ICalculatorReducers";

export interface IRootStore {
  operationsState: IOperationState;
  displayState: IDisplayState;
  memoryValue: string | null;
  values: IValuesState;
}