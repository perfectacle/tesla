import React from 'react/lib/React';
import Component from 'react/lib/ReactComponent';
import './App.css';

import {Header} from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery/TeslaBattery';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <TeslaBattery/>
      </div>
    );
  }
}