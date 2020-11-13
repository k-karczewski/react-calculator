import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import { default as DisplayStyles } from './Display.module.scss';

import { useSelector } from 'react-redux';
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';

const style = bemCssModules(DisplayStyles);


const Display: React.FC = () => {
  const displayValue = useSelector((store: IRootStore) => store.DisplayValue);

  return (
    <div className={style()}>{displayValue}</div>
  );
}

export default Display;