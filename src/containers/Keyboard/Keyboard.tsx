// react and react hooks
import React, { useEffect } from 'react';

// redux and redux hooks
import { useDispatch, useSelector } from 'react-redux';

// redux actions
import { RESET_CALCULATOR } from '../../_redux/actions/CalculatorActions';
import {
  DELETE_LAST_CHAR_FROM_RESULT_DISPLAY, SET_RESULT_DISPLAY_VALUE, UPDATE_RESULT_DISPLAY_VALUE,
  CLEAR_HISTORY_DISPLAY_VALUE, SET_HISTORY_DISPLAY_VALUE, UPDATE_HISTORY_DISPLAY_VALUE,
} from '../../_redux/actions/DisplayActions';
import {
  CALCULATE_ONE_NUMBERED_OPERATION, CALCULATE_TWO_NUMBERED_OPERATION, REMEMBER_VALUE_WITHOUT_CALCULATION,
  SET_PREV_VALUE, CLEAR_PREV_VALUE
} from '../../_redux/actions/ValuesActions';
import { SET_EQUALS_CLICKED, SET_NEW_OPERATION, SET_SPECIAL_OPERATION_CLICKED, UNSET_EQUALS_CLICKED, UNSET_NEW_OPERATION_CLICKED, UNSET_SPECIAL_OPERATION_CLICKED } from '../../_redux/actions/OperationsActions';

// components
import { Button } from '../../components/Button/Button';

// styles
import { default as bemCssModules } from 'bem-css-modules';
import { default as KeyboardStyles } from './Keyboard.module.scss';

// interfaces
import { IOperationState } from '../../_redux/reducers/Interfaces/ICalculatorReducers';
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';

import { Operations } from '../../types/Operations';

const style = bemCssModules(KeyboardStyles);

export const Keyboard: React.FC = () => {
  const dispatch = useDispatch();

  const { historyDisplayValue, resultDisplayValue } = useSelector((store: IRootStore) => store.displayState);
  const { equalsClicked, newOperationClicked, operation, specialOperationClicked }: IOperationState = useSelector((store: IRootStore) => store.operationsState);
  const { result, prevValue } = useSelector((store: IRootStore) => store.values);


  /**
   * Description: Calls callback function every change of result state
   * Parameters: 
   * - callback function
   * - dependency array
   * Returns: void
   */
  useEffect(() => {
    // update display when result has been updated only 
    if (result !== null) {
      dispatch({ type: SET_RESULT_DISPLAY_VALUE, payload: { content: result } });
    }
  }, [dispatch, result])

  /**
   * Description: Resets calculator to initial state
   * Parameters: none
   * Returns: void
   */
  const handleClearCalculator = (): void => {
    dispatch({ type: RESET_CALCULATOR });
  }

  /**
   * Description: Clears result presented on display
   * Parameters: none
   * Returns: void
   */
  const handleClearEntry = (): void => {
    dispatch({ type: SET_RESULT_DISPLAY_VALUE, payload: { content: '0' } })
  }

  /**
   * Description: Number button handler. Updates display with clicked number.
   * Parameters:
   * - currentTarget: target of click which stores button value
   * Returns: void
   */
  const handleClickNumber = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

    dispatch({ type: UNSET_SPECIAL_OPERATION_CLICKED });
    // if new operation has been clicked remove flag
    if (newOperationClicked) {
      dispatch({ type: UNSET_NEW_OPERATION_CLICKED });
      dispatch({ type: CLEAR_PREV_VALUE });
    } else if (equalsClicked) {
      dispatch({ type: RESET_CALCULATOR });
    }
    // and show new typed value as new one on display
    dispatch({ type: UPDATE_RESULT_DISPLAY_VALUE, payload: { content: currentTarget.value, newOperationClicked: newOperationClicked } });
  }

  /**
   * Description: Equals button handler. Calls calculating result and update display actions.
   * Parameters: none
   * Returns: void
   */
  const handleEqualsClick = (): void => {

    const leftValue = result;
    // if equals has been clicked again perform last operation
    const rightValue = prevValue ? prevValue : resultDisplayValue;

    if (!equalsClicked) {
      // remember that equals has been clicked
      dispatch({ type: SET_EQUALS_CLICKED })
      // remember right value
      dispatch({ type: SET_PREV_VALUE, payload: { leftValue: rightValue } });

      if (!specialOperationClicked) {
        dispatch({ type: UPDATE_HISTORY_DISPLAY_VALUE, payload: { content: `${resultDisplayValue} = ` } })
      } else {
        dispatch({ type: UPDATE_HISTORY_DISPLAY_VALUE, payload: { content: `= ` } })
      }
    } else {
      dispatch({ type: SET_HISTORY_DISPLAY_VALUE, payload: { content: `${leftValue} ${operation} ${rightValue} = ` } })
    }

    if (rightValue && operation) {
      dispatch({
        type: CALCULATE_TWO_NUMBERED_OPERATION,
        payload: {
          leftValue: leftValue,
          rightValue: rightValue,
          operation
        }
      });
    }

    dispatch({ type: UNSET_SPECIAL_OPERATION_CLICKED });
  }

  /**
   * Description: Calculates negation of result display value
   * Parameters: none
   * Returns: void
   */
  const handleNegation = (): void => {
    const negatedValue = String(Number(resultDisplayValue) * -1);

    // if display shows saved calculation result
    if (equalsClicked) {
      dispatch({ type: REMEMBER_VALUE_WITHOUT_CALCULATION, payload: { leftValue: negatedValue } });
    }
    // if display shows not saved newly typed value  
    else {
      dispatch({ type: SET_RESULT_DISPLAY_VALUE, payload: { content: negatedValue } })
    }
  }

  /**
   * Description: Operation click handler. Calculates result if two numbers have been filled and updates history display.
   * Parameters: 
   * - currentTarget: target of click which stores button value
   * Returns: void
   */
  const handleOperationClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

    dispatch({ type: UNSET_SPECIAL_OPERATION_CLICKED });
    // new operation has been clicked - remember state and operation value
    dispatch({ type: SET_NEW_OPERATION, payload: { operation: currentTarget.value } });
    // dispatch({ type: SET_HISTORY_DISPLAY_UPDATED });

    if (!newOperationClicked && !equalsClicked) {
      // if no result has not been calculated yet, take display value and remember it
      if (result === null) {
        dispatch({ type: REMEMBER_VALUE_WITHOUT_CALCULATION, payload: { leftValue: resultDisplayValue } });
      } else {
        // perform calculation when left value is saved and right value is available on display
        if (!specialOperationClicked) {
          dispatch({
            type: CALCULATE_TWO_NUMBERED_OPERATION,
            payload: {
              leftValue: result,
              rightValue: resultDisplayValue,
              operation
            }
          });
        }
      }

      if (!specialOperationClicked) {
        dispatch({ type: UPDATE_HISTORY_DISPLAY_VALUE, payload: { content: `${resultDisplayValue} ${currentTarget.value} ` } });
      } else {
        dispatch({ type: UPDATE_HISTORY_DISPLAY_VALUE, payload: { content: `${currentTarget.value} ` } });
      }
    } else if (equalsClicked) {
      // user has chosen new operation on calculation result - update subdisplay (result and operation)
      dispatch({ type: SET_HISTORY_DISPLAY_VALUE, payload: { content: `${resultDisplayValue} ${currentTarget.value} ` } });
    } else {
      // user changed operation - update subdisplay - (only two last chars)
      const updatedHistoryDisplayValue = `${historyDisplayValue.slice(0, historyDisplayValue.length - 2)} ${currentTarget.value} `;
      dispatch({ type: SET_HISTORY_DISPLAY_VALUE, payload: { content: updatedHistoryDisplayValue } })
    }
  }


  /**
   * Description: Removes last char of result display or clears history when equals was clicked
   * Parameters: none
   * Returns: void
   */
  const handleRemoveLastChar = (): void => {
    if (equalsClicked && historyDisplayValue) {
      dispatch({ type: CLEAR_HISTORY_DISPLAY_VALUE });
    } else {
      if (!equalsClicked && !newOperationClicked && !specialOperationClicked) {
        dispatch({ type: DELETE_LAST_CHAR_FROM_RESULT_DISPLAY });
      }
    }
  }


  /**
   * Description: Handles special operations such sqrt, sqr, percent and invertion. 
   * Parameters: 
   * - currentTarget: target of click which stores button value
   * Returns: void
   */
  const handleSpecialOperations = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    debugger
    let historyDisplayUpdate = '';
    const operation = currentTarget.value;

    switch (operation) {
      case Operations.squareRoot:
        historyDisplayUpdate = `sqrt(${resultDisplayValue})  `;
        break;
      case Operations.squaredPower:
        historyDisplayUpdate = `sqr(${resultDisplayValue})  `;
        break;
      case Operations.invertion:
        historyDisplayUpdate = `1/(${resultDisplayValue})  `;
        break;
      case Operations.percent:
        if (result)
          historyDisplayUpdate = `${resultDisplayValue}%  `;
        else
          historyDisplayUpdate = `0  `;
        break;
    }

    if (equalsClicked) {
      dispatch({ type: CLEAR_PREV_VALUE });
      dispatch({ type: UNSET_EQUALS_CLICKED });
      dispatch({ type: SET_HISTORY_DISPLAY_VALUE, payload: { content: historyDisplayUpdate } });
    } else {
      dispatch({ type: UPDATE_HISTORY_DISPLAY_VALUE, payload: { content: historyDisplayUpdate } });
    }

    dispatch({
      type: CALCULATE_ONE_NUMBERED_OPERATION, payload: {
        leftValue: resultDisplayValue,
        operation,
        equalsClicked: equalsClicked
      }
    });

    dispatch({ type: SET_SPECIAL_OPERATION_CLICKED })
  }

  return (
    <div className={style()}>
      <Button text={Operations.percent} onClickHandler={handleSpecialOperations} />
      <Button text="CE" onClickHandler={handleClearEntry} />
      <Button text="C" onClickHandler={handleClearCalculator} />
      <Button text="<-" onClickHandler={handleRemoveLastChar} />
      <Button text={Operations.invertion} onClickHandler={handleSpecialOperations} />
      <Button text={Operations.squaredPower} onClickHandler={handleSpecialOperations} />
      <Button text={Operations.squareRoot} onClickHandler={handleSpecialOperations} />
      <Button text={Operations.division} onClickHandler={handleOperationClick} />
      <Button text="7" onClickHandler={handleClickNumber} />
      <Button text="8" onClickHandler={handleClickNumber} />
      <Button text="9" onClickHandler={handleClickNumber} />
      <Button text={Operations.multiplication} onClickHandler={handleOperationClick} />
      <Button text="4" onClickHandler={handleClickNumber} />
      <Button text="5" onClickHandler={handleClickNumber} />
      <Button text="6" onClickHandler={handleClickNumber} />
      <Button text={Operations.subtraction} onClickHandler={handleOperationClick} />
      <Button text="1" onClickHandler={handleClickNumber} />
      <Button text="2" onClickHandler={handleClickNumber} />
      <Button text="3" onClickHandler={handleClickNumber} />
      <Button text={Operations.addition} onClickHandler={handleOperationClick} />
      <Button text={Operations.negation} onClickHandler={handleNegation} />
      <Button text="0" onClickHandler={handleClickNumber} />
      <Button text="." onClickHandler={handleClickNumber} />
      <Button text="=" onClickHandler={handleEqualsClick} isEqual />
    </div>
  );
}