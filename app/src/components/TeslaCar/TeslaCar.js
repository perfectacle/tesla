import React from 'react/lib/React';
import './TeslaCar.css';

export const TeslaCar = ({wheels}) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheels}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheels}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheels: React.PropTypes.number
};