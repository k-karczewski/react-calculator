
import React from 'react';

import { Provider } from 'react-redux';

import CalculatorStore from './_redux/stores/CalculatorStore';

import { default as bemCssModules } from 'bem-css-modules';

import Display from './components/Display/Display';
import { Memory } from './containers/Memory/Memory';
import { Keyboard } from './containers/Keyboard/Keyboard';

import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

bemCssModules.setSettings({
  modifierDelimiter: '--'
});

const App = () => {
  return (
    <Provider store={CalculatorStore}>
      <div className={style()}>
        <Display />
        <Memory />
        <Keyboard />
      </div>
    </Provider>
  );
}

export default App;
