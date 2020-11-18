import React from 'react'

import { default as bemCssModules } from 'bem-css-modules';

import { Button } from '../../components/Button/Button';

import { default as MemoryStyles } from './Memory.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';
import { ADD_VALUE_TO_MEMORY, CLEAR_VALUE_FROM_MEMORY, SAVE_VALUE_IN_MEMORY, SUB_VALUE_FROM_MEMORY } from '../../_redux/actions/MemoryActions';
import { SET_NEW_OPERATION_CLICKED } from '../../_redux/actions/IsOperationClickedActions';
import { SET_DISPLAY_VALUE } from '../../_redux/actions/DisplayActions';

const style = bemCssModules(MemoryStyles);

export const Memory: React.FC = () => {
  const dispatch = useDispatch();

  const memoryValue = useSelector((store: IRootStore) => store.MemoryValue);
  const displayValue = useSelector((store: IRootStore) => store.DisplayValue);

  const handleSaveInMemory = () => {
    dispatch({ type: SAVE_VALUE_IN_MEMORY, payload: { value: displayValue } });
    dispatch({ type: SET_NEW_OPERATION_CLICKED });
  }

  const addValueToMemory = () => {
    dispatch({ type: ADD_VALUE_TO_MEMORY, payload: { value: displayValue } });
    dispatch({ type: SET_NEW_OPERATION_CLICKED });
  }

  const subValueToMemory = () => {
    dispatch({ type: SUB_VALUE_FROM_MEMORY, payload: { value: displayValue } });
    dispatch({ type: SET_NEW_OPERATION_CLICKED });
  }

  const clearMemory = () => {
    dispatch({ type: CLEAR_VALUE_FROM_MEMORY });
    dispatch({ type: SET_NEW_OPERATION_CLICKED });
  }

  const readMemory = () => {
    dispatch({ type: SET_DISPLAY_VALUE, payload: { content: memoryValue } });
  }


  return (
    <div className={style()}>
      <Button text="MC" onClickHandler={clearMemory} isMemory disabled={!memoryValue ? true : false} />
      <Button text="MR" onClickHandler={readMemory} isMemory disabled={!memoryValue ? true : false} />
      <Button text="M+" onClickHandler={addValueToMemory} isMemory />
      <Button text="M-" onClickHandler={subValueToMemory} isMemory />
      <Button text="MS" onClickHandler={handleSaveInMemory} isMemory />
    </div>
  );
}