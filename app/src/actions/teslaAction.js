export const counterDefaultVal = {
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

export const speedUp = (value) => {
  return {
    type: 'SPEED_UP',
    value,
    step: counterDefaultVal.speed.step,
    maxValue: counterDefaultVal.speed.max
  };
};

export const speedDown = (value) => {
  return {
    type: 'SPEED_DOWN',
    value,
    step: counterDefaultVal.speed.step,
    minValue: counterDefaultVal.speed.min
  };
};

export const temperatureUp = (value) => {
  return {
    type: 'TEMPERATURE_UP',
    value,
    step: counterDefaultVal.temperature.step,
    maxValue: counterDefaultVal.temperature.max
  };
};

export const temperatureDown = (value) => {
  return {
    type: 'TEMPERATURE_DOWN',
    value,
    step: counterDefaultVal.temperature.step,
    minValue: counterDefaultVal.temperature.min
  };
};

export const changeClimate = () => {
  return {
    type: 'CHANGE_CLIMATE'
  };
};

export const changeWheel = (value) => {
  return {
    type: 'CHANGE_WHEEL',
    value
  };
};

export const updateStats = () => {
  return {
    type: 'UPDATE_STATS'
  };
};