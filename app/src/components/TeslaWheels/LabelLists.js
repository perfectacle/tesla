import React from 'react/lib/React';

const LabelLists = (props) => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.handleChangeWheels;
  const sizes = [19, 21];
  const LabelItems = sizes.map(size => (
      <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
        <input
          type="radio"
          name="wheelsize"
          value={size}
          checked={value === size}
          onChange={() => {changeHandler(size)}} />
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

export default LabelLists;
