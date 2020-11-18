import React from 'react';
import { useSelector } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules'
import { default as SubDisplayStyles } from './SubDisplay.module.scss';
import { IRootStore } from '../../../_redux/stores/Interfaces/IRootStore';

const style = bemCssModules(SubDisplayStyles);

const SubDisplay: React.FC = () => {
  const subDisplayValue = useSelector((store: IRootStore) => store.SubDisplayValue);

  return (
    <div className={style()}>{subDisplayValue}</div>
  );
}

export default SubDisplay;