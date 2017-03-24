import React from 'react/lib/React';
import './TeslaWheels.css';
import {LabelLists} from './LabelLists';

export const TeslaWheels = (props) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists wheels={props}/>
    </div>
  </div>
);

TeslaWheels.propTypes = {
  value: React.PropTypes.number,
  handleChangeWheels: React.PropTypes.func
};