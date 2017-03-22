import React from 'react/lib/React';
import Component from 'react/lib/ReactComponent';
import './App.css';

import Header from './components/Header/Header';
import TeslaBattery from './components/TeslaBattery/TeslaBattery';

const counterDefaultVal = {
  speed: {
    title: 'Speed',
    unit: 'mph',
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: 'Outside Temperature',
    unit: '°',
    step: 10,
    min: -10,
    max: 40
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TeslaBattery counterDefaultVal={counterDefaultVal}/>
      </div>
    );
  }
}

export default App;