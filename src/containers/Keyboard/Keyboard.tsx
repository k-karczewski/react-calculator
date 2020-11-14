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

  useEffect(() => {
    // update prevValue and display only when result has been calculated
    if (result !== null) {
      dispatch({ type: SET_VALUE, payload: { value: result } });
      dispatch({ type: SET_DISPLAY_VALUE, payload: { content: result } });
    }
  }, [dispatch, result])


  const handleRemoveLastChar = () => {
    dispatch({ type: DELETE_LAST_CHAR });
  }

  const handleClickNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (newOperationClicked) {
      dispatch({ type: UNSET_NEW_OPERATION_CLICKED })
    }
    dispatch({ type: UPDATE_DISPLAY, payload: { content: event.currentTarget.value, newOperationClicked: newOperationClicked } });
  }

  const handleOperationClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!newOperationClicked) {
      dispatch({ type: SET_NEW_OPERATION_CLICKED })
      dispatch({ type: SET_OPERATION, payload: { operation: event.currentTarget.value } });

      if (prevValue === null) {
        dispatch({ type: SET_VALUE, payload: { value: displayValue } })
      } else {
        dispatch({
          type: CALCULATE_RESULT_OF_TWO_NUMBERS,
          payload: {
            leftValue: prevValue,
            rightValue: displayValue,
            operation: currentOperation
          }
        });
      }
    } else if (event.currentTarget.value !== currentOperation) {
      dispatch({ type: SET_OPERATION, payload: { operation: event.currentTarget.value } });
    }
  }

  const handleEqualsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (currentOperation === event.currentTarget.value) {

    }
    else if (prevValue !== null) {
      dispatch({ type: SET_NEW_OPERATION_CLICKED })
      dispatch({ type: SET_OPERATION, payload: { operation: event.currentTarget.value } });
      dispatch({
        type: CALCULATE_RESULT_OF_TWO_NUMBERS,
        payload: {
          leftValue: prevValue,
          rightValue: displayValue,
          operation: currentOperation
        }
      });
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
      <Button text="+/-" onClickHandler={() => console.log('')} />
      <Button text="0" onClickHandler={handleClickNumber} />
      <Button text="." onClickHandler={() => console.log('')} />
      <Button text="=" onClickHandler={handleEqualsClick} isEqual />
    </div>
  );
}