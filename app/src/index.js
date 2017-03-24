if(
  process.env.NODE_ENV === 'production' &&
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};

import React from 'react';
import {render} from 'react-dom';

import App from './App';
import './index.css';
import './favicon.ico';

render(<App/>, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App/>,
      document.getElementById('app')
    );
  });
}