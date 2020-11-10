
import React from 'react';

import { default as bemCssModules } from 'bem-css-modules';

import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <div className={style()}>
      hello world
    </div>
  );
}

export default App;
