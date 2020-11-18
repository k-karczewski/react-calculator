import { IMemoryAction } from '../actions/Interfaces/ICalculatorAction';

export const ADD_VALUE_TO_MEMORY = 'ADD_VALUE_TO_MEMORY';
export const CLEAR_VALUE_FROM_MEMORY = 'CLEAR_VALUE_FROM_MEMORY';
export const SAVE_VALUE_IN_MEMORY = 'SAVE_VALUE_IN_MEMORY';
export const SUB_VALUE_FROM_MEMORY = 'SUB_VALUE_FROM_MEMORY';

export const addValueToMemoryAction: IMemoryAction = {
  type: ADD_VALUE_TO_MEMORY,
  payload: {
    value: '0'
  }
}

export const clearValueFromMemoryAction: IMemoryAction = {
  type: CLEAR_VALUE_FROM_MEMORY
}

export const saveValueInMemoryAction: IMemoryAction = {
  type: SAVE_VALUE_IN_MEMORY,
  payload: {
    value: '0'
  }
}

export const subValueFronMemoryAction: IMemoryAction = {
  type: SUB_VALUE_FROM_MEMORY,
  payload: {
    value: '0'
  }
}

