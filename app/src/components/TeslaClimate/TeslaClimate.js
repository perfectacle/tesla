import React from 'react/lib/React';
import './TeslaClimate.css';

export const TeslaClimate = ({value, limit, handleChangeClimate}) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate__item ${value ? 'tesla-climate__item--active' : '' }  ${!limit ? 'tesla-heat':''}`}
    >
      <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off'}</p>
      <i className="tesla-climate__icon"/>
      <input
        type="checkbox"
        name="climate"
        checked={value}
        onChange={() => handleChangeClimate()}
      />
    </label>
  </div>
);

TeslaClimate.propTypes = {
  value: React.PropTypes.bool,
  limit: React.PropTypes.bool,
  handleChangeClimate: React.PropTypes.func
};