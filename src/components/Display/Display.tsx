import React from 'react';

import { useSelector } from 'react-redux';

import { default as bemCssModules } from 'bem-css-modules';

import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';

import HistoryDisplay from './HistoryDisplay/HistoryDisplay';

import { default as DisplayStyles } from './Display.module.scss';

const style = bemCssModules(DisplayStyles);


const Display: React.FC = () => {
  const resultDisplayValue = useSelector((store: IRootStore) => store.displayState.resultDisplayValue);

  return (
    <div className={style()}>
      <HistoryDisplay />
      <p>{resultDisplayValue}</p>
    </div>
  );
}

export default Display;