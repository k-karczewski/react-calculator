import React from 'react';

import { useSelector } from 'react-redux';

import { default as bemCssModules } from 'bem-css-modules'

import { IRootStore } from '../../../_redux/stores/Interfaces/IRootStore';

import { default as HistoryDisplayStyles } from './HistoryDisplay.module.scss';

const style = bemCssModules(HistoryDisplayStyles);

const HistoryDisplay: React.FC = () => {
  const historyDisplayValue = useSelector((store: IRootStore) => store.displayState.historyDisplayValue);

  return (
    <div className={style()}>{historyDisplayValue}</div>
  );
}

export default HistoryDisplay;