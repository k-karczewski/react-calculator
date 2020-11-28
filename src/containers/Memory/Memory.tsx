// react
import React from 'react'

// redux hooks
import { useDispatch, useSelector } from 'react-redux';

// redux actions
import { SET_RESULT_DISPLAY_VALUE } from '../../_redux/actions/DisplayActions';
import { ADD_VALUE_TO_MEMORY, CLEAR_VALUE_FROM_MEMORY, SAVE_VALUE_IN_MEMORY, SUB_VALUE_FROM_MEMORY } from '../../_redux/actions/MemoryActions';
import { SET_NEW_OPERATION } from '../../_redux/actions/OperationsActions';

// components
import { Button } from '../../components/Button/Button';

// styles
import { default as bemCssModules } from 'bem-css-modules';
import { default as MemoryStyles } from './Memory.module.scss';

// interfaces
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';


const style = bemCssModules(MemoryStyles);

export const Memory: React.FC = () => {
  const dispatch = useDispatch();

  const memoryValue = useSelector((store: IRootStore) => store.memoryValue);
  const resultDisplayValue = useSelector((store: IRootStore) => store.displayState.resultDisplayValue);

  const handleSaveInMemory = () => {
    dispatch({ type: SAVE_VALUE_IN_MEMORY, payload: { value: resultDisplayValue } });
    dispatch({ type: SET_NEW_OPERATION });
  }

  const addValueToMemory = () => {
    dispatch({ type: ADD_VALUE_TO_MEMORY, payload: { value: resultDisplayValue } });
    dispatch({ type: SET_NEW_OPERATION });
  }

  const subValueToMemory = () => {
    dispatch({ type: SUB_VALUE_FROM_MEMORY, payload: { value: resultDisplayValue } });
    dispatch({ type: SET_NEW_OPERATION });
  }

  const clearMemory = () => {
    dispatch({ type: CLEAR_VALUE_FROM_MEMORY });
    dispatch({ type: SET_NEW_OPERATION });
  }

  const readMemory = () => {
    dispatch({ type: SET_RESULT_DISPLAY_VALUE, payload: { content: memoryValue } });
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