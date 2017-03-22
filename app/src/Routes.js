'use strict';
import React from 'react';
import Router from 'react-router-dom/es/BrowserRouter';
import Route from 'react-router-dom/es/Route';

import Comp from 'components/Comp/Comp';
import Comp2 from 'components/Comp2/Comp2';

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Comp}/>
      <Route exact path="/aa/bb/cc" component={Comp2}/>
    </div>
  </Router>
);