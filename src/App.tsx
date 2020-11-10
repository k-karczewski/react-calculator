
import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import Display from './components/Display/Display';

import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <div className={style()}>
      <Display />
    </div>
  );
}

export default App;
