import { IDisplayAction } from '../actions/Interfaces/ICalculatorAction';
import { UPDATE_DISPLAY, SET_DISPLAY_VALUE } from '../actions/DisplayActions';

export const DisplayReducer = (state: string = '0', action: IDisplayAction) => {
  switch (action.type) {
    case UPDATE_DISPLAY: {
      console.log(action)
      if (state === '0' || action.payload?.newOperationClicked) {
        return action.payload?.content;
      } else {
        return state += action.payload?.content;
      }
    }
    case SET_DISPLAY_VALUE: return action.payload?.content
    default:
      return state;
  }
}
