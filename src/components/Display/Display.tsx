import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import { default as DisplayStyles } from './Display.module.scss';

import { useSelector } from 'react-redux';
import { IRootStore } from '../../_redux/stores/Interfaces/IRootStore';
import SubDisplay from './SubDisplay/SubDisplay';

const style = bemCssModules(DisplayStyles);


const Display: React.FC = () => {
  const displayValue = useSelector((store: IRootStore) => store.DisplayValue);

  return (
    <div className={style()}>
      <SubDisplay />
      <p className={style('p')}>{displayValue}</p>
    </div>
  );
}

export default Display;