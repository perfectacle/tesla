import React from 'react/lib/React';

export const LabelLists = ({wheels: {value, handleChangeWheels}}) => {
  const sizes = [19, 21];
  const LabelItems = sizes.map(size => (
      <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
        <input
          type="radio"
          name="wheelsize"
          value={size}
          checked={value === size}
          onChange={() => handleChangeWheels(size)} />
        <p>
          {size}"
        </p>
      </label>
    )
  );
  return (
    <div>
      {LabelItems}
    </div>
  );
};