'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import {Routes} from './Routes';

render(
  <AppContainer>
    <Routes/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    render(
      <AppContainer>
        <Routes/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}