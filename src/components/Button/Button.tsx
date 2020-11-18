import React from 'react'

import { default as bemCssModules } from 'bem-css-modules';

import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

type TButtonHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
// type TButtonHandler = () => void

interface ButtonProps {
  text: string;
  onClickHandler: TButtonHandler;
  isEqual?: boolean;
  isLighter?: boolean;
  isMemory?: boolean;
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = props => {
  const modifiers = {
    'is-equal': props.isEqual,
    'is-lighter': props.isLighter,
    'is-memory': props.isMemory
  }

  return (
    <button className={style(modifiers)} onClick={props.onClickHandler} value={props.text} disabled={props.disabled}>{props.text}</button>
  );
}