import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import { Button } from '../../components/Button/Button';

import { default as KeyboardStyles } from './Keyboard.module.scss';

const style = bemCssModules(KeyboardStyles);

export const Keyboard: React.FC = () => {
  return (
    <div className={style()}>
      <Button text="%" onClickHandler={() => console.log('')} />
      <Button text="CE" onClickHandler={() => console.log('')} />
      <Button text="C" onClickHandler={() => console.log('')} />
      <Button text="<-" onClickHandler={() => console.log('')} />
      <Button text="1/x" onClickHandler={() => console.log('')} />
      <Button text="x2" onClickHandler={() => console.log('')} />
      <Button text="sqrt" onClickHandler={() => console.log('')} />
      <Button text="/" onClickHandler={() => console.log('')} />
      <Button text="7" onClickHandler={() => console.log('')} />
      <Button text="8" onClickHandler={() => console.log('')} />
      <Button text="9" onClickHandler={() => console.log('')} />
      <Button text="x" onClickHandler={() => console.log('')} />
      <Button text="4" onClickHandler={() => console.log('')} />
      <Button text="5" onClickHandler={() => console.log('')} />
      <Button text="6" onClickHandler={() => console.log('')} />
      <Button text="-" onClickHandler={() => console.log('')} />
      <Button text="1" onClickHandler={() => console.log('')} />
      <Button text="2" onClickHandler={() => console.log('')} />
      <Button text="3" onClickHandler={() => console.log('')} />
      <Button text="+" onClickHandler={() => console.log('')} />
      <Button text="+/-" onClickHandler={() => console.log('')} />
      <Button text="0" onClickHandler={() => console.log('')} />
      <Button text="." onClickHandler={() => console.log('')} />
      <Button text="=" onClickHandler={() => console.log('')} isEqual />
    </div>
  );
}