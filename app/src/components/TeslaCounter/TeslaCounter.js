import React from 'react/lib/React';
import './TeslaCounter.css';

export const TeslaCounter = ({initValues, currentValue, increment, decrement}) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{initValues.title}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          { currentValue }
          <span>{ initValues.unit }</span>
        </p>
        <div className="tesla-counter__controls">
          <button
            onClick={() => increment(initValues.title)}
            disabled={currentValue >= initValues.max}
          >
          </button>
          <button
            onClick={() => decrement(initValues.title)}
            disabled={currentValue <= initValues.min}
          >
          </button>
        </div>
      </div>
    </div>
  </div>
);

TeslaCounter.propTypes = {
  initValues: React.PropTypes.object,
  currentValue: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func
};