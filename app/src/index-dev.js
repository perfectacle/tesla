'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import {Routes} from './Routes-dev';

render(
  <AppContainer>
    <Routes/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Routes-dev', () => {
    render(
      <AppContainer>
        <Routes/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}