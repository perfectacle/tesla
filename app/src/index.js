'use strict';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import {Routes} from './routes/Routes';

render(
  <AppContainer>
    <Routes/>
  </AppContainer>,
  document.getElementById('app')
);