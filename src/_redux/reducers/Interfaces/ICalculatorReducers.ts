export interface IDisplayState {
  historyDisplayValue: string,
  resultDisplayValue: string,
}

export interface IOperationState {
  equalsClicked: boolean,
  newOperationClicked: boolean,
  operation: string | null,
  specialOperationClicked: boolean
}

export interface IValuesState {
  result: string | null,
  prevValue: string | null,
}