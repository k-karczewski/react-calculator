import React from 'react'

import { default as bemCssModules } from 'bem-css-modules';

import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface ButtonProps {
  text: string;
  onClickHandler: TCalculatorFunction | TConcatenateFunction;
  isEqual?: boolean;
  isLighter?: boolean;
  isMemory?: boolean;
}


export const Button: React.FC<ButtonProps> = props => {
  const modifiers = {
    'is-equal': props.isEqual,
    'is-lighter': props.isLighter,
    'is-memory': props.isMemory
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    props.onClickHandler(event)
  }

  return (
    <button className={style(modifiers)} onClick={onClickHandler}>{props.text}</button>
  );
}