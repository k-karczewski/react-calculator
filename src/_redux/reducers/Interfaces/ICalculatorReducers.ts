export interface IDisplayState {
  isHistoryUpdated: boolean
  historyDisplayValue: string,
  resultDisplayValue: string,
}

export interface IOperationState {
  equalsClicked: boolean,
  newOperationClicked: boolean,
  operation: string | null,
}