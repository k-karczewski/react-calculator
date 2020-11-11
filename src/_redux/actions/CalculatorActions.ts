export const CLEAR_CHAR: string = 'CLEAR_CHAR';
export const CLEAR_DISPLAY: string = 'CLEAR_DISPLAY';
export const NUMBER_CLICK: string = 'NUMBER_CLICK';

export interface ICalculatorAction {
  type: string,
  payload?: {
    content: string
  }
}

export const numberClickAction: ICalculatorAction = {
  type: NUMBER_CLICK,
  payload: {
    content: ''
  }
}

export const clearCharAction: ICalculatorAction = {
  type: CLEAR_CHAR
}

export const clearDisplayAction: ICalculatorAction = {
  type: CLEAR_DISPLAY
}