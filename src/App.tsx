
import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import Display from './components/Display/Display';
import { Memory } from './containers/Memory/Memory';

import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

bemCssModules.setSettings({
  modifierDelimiter: '--'
});

const App = () => {
  return (
    <div className={style()}>
      <Display />
      <Memory />
    </div>
  );
}

export default App;
