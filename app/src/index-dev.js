'use strict';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import {RoutesDev} from './routes/RoutesDev';

render(
  <AppContainer>
    <RoutesDev/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./routes/RoutesDev', () => {
    render(
      <AppContainer>
        <RoutesDev/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}