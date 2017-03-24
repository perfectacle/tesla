import React from 'react/lib/React';
import './TeslaStats.css';

export const TeslaStats = ({carstats}) => {
  const listItems = carstats.map((stat) => (
    <li key={stat.model}>
      <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className="tesla-stats">
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

TeslaStats.propTypes = {
  carstats: React.PropTypes.array
};