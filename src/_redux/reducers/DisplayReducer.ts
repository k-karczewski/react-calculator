import { CLEAR_CHAR, CLEAR_DISPLAY, ICalculatorAction, NUMBER_CLICK } from '../actions/CalculatorActions';

export const DisplayReducer = (state: string = '0', action: ICalculatorAction) => {
  switch (action.type) {
    case NUMBER_CLICK: {
      if (!action.payload) return '0';
      if (isNumberCheck(action.payload.content)) {
        if (state === '0') {
          return action.payload.content
        } else {
          return state += action.payload.content
        }
      }
      break;
    }
    case CLEAR_CHAR: {
      if (state.length === 1) {
        return '0'
      } else {
        console.log(state.length)
        return state.slice(0, state.length - 1)
      }
    }
    case CLEAR_DISPLAY: { return '0' }
    default:
      return '0'
  }
}

const isNumberCheck = (content: string): boolean => {
  return (content === '0' || content === '1' ||
    content === '2' || content === '3' ||
    content === '4' || content === '5' ||
    content === '6' || content === '7' ||
    content === '8' || content === '9')
    ? true : false
}