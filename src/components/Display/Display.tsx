import React from 'react';

import { useSelector } from 'react-redux';

import { default as bemCssModules } from 'bem-css-modules';

import { default as DisplayStyles } from './Display.module.scss';

const style = bemCssModules(DisplayStyles);

interface RootState {
  Display: string
}

const Display: React.FC = () => {
  const displayValue = useSelector((state: RootState) => state.Display);
  return (
    <div className={style()}>{displayValue}</div>
  );
}

export default Display;