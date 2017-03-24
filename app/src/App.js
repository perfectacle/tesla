import React from 'react/lib/React';
import Component from 'react/lib/ReactComponent';
import {Provider} from 'react-redux';

import './App.css';
import Header from './components/Header/Header';

import store from './store';
import TeslaCarContainer from './containers/TeslaCarContainer/TeslaCarContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer/TeslaStatsContainer';
import TeslaSpeedCounterContainer from './containers/TeslaSpeedCounterContainer/TeslaSpeedCounterContainer';
import TeslaTempCounterContainer from './containers/TeslaTempCounterContainer/TeslaTempCounterContainer';
import TeslaClimateContainer from './containers/TeslaClimateContainer/TeslaClimateContainer';
import TeslaWheelsContainer from './containers/TeslaWheelsContainer/TeslaWheelsContainer';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <TeslaCarContainer/>
            <TeslaStatsContainer/>
            <div className="tesla-controls cf">
              <TeslaSpeedCounterContainer />
              <div className="tesla-climate-container cf">
                <TeslaTempCounterContainer />
                <TeslaClimateContainer />
              </div>
              <TeslaWheelsContainer />
            </div>
            <TeslaNotice />
          </form>
        </div>
      </Provider>
    );
  }
}

export default App;