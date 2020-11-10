import React from 'react'

import { default as bemCssModules } from 'bem-css-modules';

import { Button } from '../../components/Button/Button';

import { default as MemoryStyles } from './Memory.module.scss';

const style = bemCssModules(MemoryStyles);

export const Memory: React.FC = () => {
  return (
    <div className={style()}>
      <Button text="MC" onClickHandler={() => console.log('')} isMemory />
      <Button text="MR" onClickHandler={() => console.log('')} isMemory />
      <Button text="M+" onClickHandler={() => console.log('')} isMemory />
      <Button text="M-" onClickHandler={() => console.log('')} isMemory />
      <Button text="MS" onClickHandler={() => console.log('')} isMemory />
    </div>
  );
}