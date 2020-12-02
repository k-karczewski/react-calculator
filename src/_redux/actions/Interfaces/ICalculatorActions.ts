export interface ICalculatorAction {
  type: string
}

export interface IDisplayAction {
  type: string,
  payload?: {
    content: string,
    newOperationClicked?: boolean
  }
}

export interface IMemoryAction {
  type: string,
  payload?: {
    value: string
  }
}

export interface IOperationAction {
  type: string,
  payload?: {
    operation: string
  }
}

export interface IValuesAction {
  type: string,
  payload?: {
    firstValueFilled?: boolean
    leftValue: string,
    operation?: string,
    rightValue?: string,
  }
}
