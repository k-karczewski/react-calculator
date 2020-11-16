import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { default as bemCssModules } from 'bem-css-modules';

import { Button } from '../../components/Button/Button';

import { default as KeyboardStyles } from './Keyboard.module.scss';

import { DELETE_LAST_CHAR, SET_DISPLAY_VALUE, UPDATE_DISPLAY } from '../../_redux/actions/DisplayActions';
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';
import { SET_OPERATION } from '../../_redux/actions/OperationActions';
import { SET_NEW_OPERATION_CLICKED, UNSET_NEW_OPERATION_CLICKED } from '../../_redux/actions/IsOperationClickedActions';
import { SET_VALUE } from '../../_redux/actions/PrevValueActions';
import { CALCULATE_RESULT_OF_TWO_NUMBERS } from '../../_redux/actions/ResultActions';

const style = bemCssModules(KeyboardStyles);

export const Keyboard: React.FC = () => {
  const dispatch = useDispatch();

  const currentOperation = useSelector((store: IRootStore) => store.CurrentOperation);
  const displayValue = useSelector((store: IRootStore) => store.DisplayValue);
  const newOperationClicked = useSelector((store: IRootStore) => store.IsNewOperationClicked);
  const prevValue = useSelector((store: IRootStore) => store.PrevValue);
  const result = useSelector((store: IRootStore) => store.ResultValue);

  // calls every change of result state
  useEffect(() => {
    // update display when result has been updated only 
    if (result !== null) {
      dispatch({ type: SET_DISPLAY_VALUE, payload: { content: result } });
    }
  }, [dispatch, result])


  const handleRemoveLastChar = () => {
    dispatch({ type: DELETE_LAST_CHAR });
  }

  const handleClickNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // if new operation has been clicked remove flag
    if (newOperationClicked) dispatch({ type: UNSET_NEW_OPERATION_CLICKED })

    // and show new typed value as new one on display
    dispatch({ type: UPDATE_DISPLAY, payload: { content: event.currentTarget.value, newOperationClicked: newOperationClicked } });
  }

  const handleChangeSign = () => {
    // if display shows saved calculation result
    if (displayValue === result) {
      dispatch({
        type: CALCULATE_RESULT_OF_TWO_NUMBERS,
        payload: {
          leftValue: result,
          rightValue: '-1',
          operation: '*'
        }
      });
    }
    // if display shows not saved newly typed value  
    else {
      const changedSignValue = String(Number(displayValue) * -1);
      dispatch({ type: SET_DISPLAY_VALUE, payload: { content: changedSignValue } })
    }
  }

  const handleOperationClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!newOperationClicked) {
      // new operation has been clicked - remember state and operation value
      dispatch({ type: SET_NEW_OPERATION_CLICKED })
      dispatch({ type: SET_OPERATION, payload: { operation: event.currentTarget.value } });

      /* If no left value of operation is saved yet take display value and perform
      * addition with 0 and the result will be saved as left value.
      * If left value is saved already take it as left value and perform
      * current clicked operation with value taken from display */
      const leftValue = result !== null ? result : displayValue;
      const rightValue = result !== null ? displayValue : '0';
      const operationToPerform = result !== null ? currentOperation : '+';

      dispatch({
        type: CALCULATE_RESULT_OF_TWO_NUMBERS,
        payload: {
          leftValue: leftValue,
          rightValue: rightValue,
          operation: operationToPerform
        }
      });
    } else if (event.currentTarget.value !== currentOperation) {
      dispatch({ type: SET_OPERATION, payload: { operation: event.currentTarget.value } });
    }
  }

  const handleEqualsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const leftValue = result;
    // if equals has been clicked again perform last operation
    const rightValue = newOperationClicked ? prevValue : displayValue;

    dispatch({
      type: CALCULATE_RESULT_OF_TWO_NUMBERS,
      payload: {
        leftValue: leftValue,
        rightValue: rightValue,
        operation: currentOperation
      }
    });

    if (rightValue === displayValue) {
      // equals button has been clicked first time - remember state
      dispatch({ type: SET_NEW_OPERATION_CLICKED })
      // remember right value
      dispatch({ type: SET_VALUE, payload: { value: rightValue } });
    }
  }

  return (
    <div className={style()}>
      <Button text="%" onClickHandler={() => console.log('')} />
      <Button text="CE" onClickHandler={() => console.log('')} />
      <Button text="C" onClickHandler={() => console.log('')} />
      <Button text="<-" onClickHandler={handleRemoveLastChar} />
      <Button text="1/x" onClickHandler={() => console.log('')} />
      <Button text="x2" onClickHandler={() => console.log('')} />
      <Button text="sqrt" onClickHandler={() => console.log('')} />
      <Button text="/" onClickHandler={handleOperationClick} />
      <Button text="7" onClickHandler={handleClickNumber} />
      <Button text="8" onClickHandler={handleClickNumber} />
      <Button text="9" onClickHandler={handleClickNumber} />
      <Button text="*" onClickHandler={handleOperationClick} />
      <Button text="4" onClickHandler={handleClickNumber} />
      <Button text="5" onClickHandler={handleClickNumber} />
      <Button text="6" onClickHandler={handleClickNumber} />
      <Button text="-" onClickHandler={handleOperationClick} />
      <Button text="1" onClickHandler={handleClickNumber} />
      <Button text="2" onClickHandler={handleClickNumber} />
      <Button text="3" onClickHandler={handleClickNumber} />
      <Button text="+" onClickHandler={handleOperationClick} />
      <Button text="+/-" onClickHandler={handleChangeSign} />
      <Button text="0" onClickHandler={handleClickNumber} />
      <Button text="." onClickHandler={handleClickNumber} />
      <Button text="=" onClickHandler={handleEqualsClick} isEqual />
    </div>
  );
}