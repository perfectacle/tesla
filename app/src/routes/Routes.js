'use strict';
import React, {Component} from 'react';
import Router from 'react-router-dom/es/BrowserRouter';
import Route from 'react-router-dom/es/Route';

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
const asyncComponent = getComponent => (
  class AsyncComponent extends Component {
    constructor() {
      super();
      this.state = {Component: AsyncComponent.Component};
    }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({Component});
        });
      }
    }
    render() {
      const {Component} = this.state;
      if(Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }
);

const Comp = asyncComponent(() => import('components/Comp/Comp').then(module => module.default));
const Comp2 = asyncComponent(() => import('components/Comp2/Comp2').then(module => module.default));

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Comp}/>
      <Route exact path="/aa/bb/cc" component={Comp2}/>
    </div>
  </Router>
);