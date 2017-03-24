import React from 'react/lib/React';
import Component from 'react/lib/ReactComponent';
import './TeslaBattery.css';

const a = 123;
console.log(a);

import {getModelData} from 'services/BatteryService';
import {TeslaCar} from 'components/TeslaCar/TeslaCar';
import {TeslaStats} from 'components/TeslaStats/TeslaStats';
import {TeslaCounter} from 'components/TeslaCounter/TeslaCounter';
import {TeslaClimate} from 'components/TeslaClimate/TeslaClimate';
import {TeslaNotice} from 'components/TeslaNotice/TeslaNotice';
import {TeslaWheels} from 'components/TeslaWheels/TeslaWheels';

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

export default class TeslaBattery extends Component {
  constructor() {
    super();
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 21
      }
    };
  }

  componentDidMount() {
    this.statsUpdate();
  }

  statsUpdate() {
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(this.state.config)
    });
  }

  calculateStats(config) {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    const dataModels = getModelData();
    return carModels.map(model => {
      // ES6 Object destructuring Syntax,
      // takes out required values and create references to them
      const {speed, temperature, climate, wheels} = config;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

  increment(title) {
    let currentValue, maxValue, step;
    const {speed, temperature} = counterDefaultVal;
    const {config} = this.state;
    if(title === 'Speed') {
      currentValue = config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }

    if(currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  decrement(title) {
    let currentValue, minValue, step;
    const {speed, temperature} = counterDefaultVal;
    const {config} = this.state;
    if(title === 'Speed') {
      currentValue = config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }

    if(currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  updateCounterState(title, newValue) {
    const config = {...this.state.config};
    // update config state with new value
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
    // update our state
    this.setState({config}, () => {this.statsUpdate()});
  }

  handleChangeClimate() {
    const config = {...this.state.config};
    config['climate'] = !this.state.config.climate;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  handleChangeWheels(size) {
    const config = {...this.state.config};
    config['wheels'] = size;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  render() {
    const {config, carstats} = this.state;
    return (
      <div className='tesla-battery'>
        <h1>Range Per Chargdddde</h1>
        <TeslaCar wheels={config.wheels}/>
        <TeslaStats carstats={carstats}/>
        <div className="tesla-controls cf">
          <TeslaCounter
            initValues={counterDefaultVal.speed}
            currentValue={config.speed}
            increment={title => this.increment(title)}
            decrement={title => this.decrement(title)}
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter
              initValues={counterDefaultVal.temperature}
              currentValue={config.temperature}
              increment={title => this.increment(title)}
              decrement={title => this.decrement(title)}
            />
            <TeslaClimate
              value={this.state.config.climate}
              limit={this.state.config.temperature > 10}
              handleChangeClimate={() => this.handleChangeClimate()}
            />
          </div>
          <TeslaWheels
            value={config.wheels}
            handleChangeWheels={size => this.handleChangeWheels(size)}
          />
        </div>
        <TeslaNotice />
      </div>
    );
  }
}