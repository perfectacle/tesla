import update from 'immutability-helper';
import {getModelData} from '../services/BatteryService.js';

const initialState = {
  carstats: [
    {miles: 246, model: '60'},
    {miles: 250, model: '60D'},
    {miles: 297, model: '75'},
    {miles: 306, model: '75D'},
    {miles: 336, model: '90D'},
    {miles: 376, model: 'P100D'}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
};

const calculateStats = config => {
  const dataModels = getModelData();
  const models = ['60', '60D', '75', '75D', '90D', 'P100D'];
  return models.map(model => {
    // ES6 Object destructuring Syntax,
    // takes out required values and create references to them
    const { speed, temperature, climate, wheels } = config;
    const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
    return {
      model,
      miles
    };
  });
};

const statsUpdate = (state, newConfig) => {
  // Fetch model info from BatteryService and calculate then update state
  return {
    ...state,
    config: newConfig,
    carstats: calculateStats(newConfig)
  };
};

const updateCounterState = (title, newState) => {
  const newConfig = {...newState.config};
  // update config state with new value
  title === 'Speed' ? newConfig['speed'] = newConfig.speed : newConfig['temperature'] = newConfig.temperature;
  // update our state
  return statsUpdate(newState, newConfig);
};

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_CLIMATE': {
      const newConfig = update(state.config, {
        climate: {
          $set: !state.config.climate
        }
      });
      return statsUpdate(state, newConfig);
    }

    case 'SPEED_UP': {
      if (action.value < action.maxValue) {
        const newState = update(state, {
          config: {
            speed: {
              $set: action.value + action.step
            }
          }
        });
        return updateCounterState('Speed', newState);
      }
      return state;
    }

    case 'SPEED_DOWN': {
      if (action.value > action.minValue) {
        const newState = update(state, {
          config: {
            speed: {
              $set: action.value - action.step
            }
          }
        });
        return updateCounterState('Speed', newState);
      }
      return state;
    }

    case 'TEMPERATURE_UP': {
      if (action.value < action.maxValue) {
        const newState = update(state, {
          config: {
            temperature: {
              $set: action.value + action.step
            }
          }
        });
        return updateCounterState('Temperature', newState);
      }
      return state;
    }

    case 'TEMPERATURE_DOWN': {
      if (action.value > action.minValue) {
        const newState = update(state, {
          config: {
            temperature: {
              $set: action.value - action.step
            }
          }
        });
        return updateCounterState('Temperature', newState);
      }
      return state;
    }

    case 'CHANGE_WHEEL': {
      const newConfig = update(state.config, {
        wheels: {
          $set: action.value
        }
      });
      return statsUpdate(state, newConfig);
    }

    default: return state;
  }
};

export default Reducer;