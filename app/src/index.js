if (
  process.env.NODE_ENV === 'production' &&
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};

import React from 'react';
import {render} from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';

import App from './App';
import './index.css';
import './favicon.ico';

render(
  process.env.NODE_ENV === 'production' ?
  <App/> :
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}