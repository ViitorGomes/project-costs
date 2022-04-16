import React from 'react';
import PropTypes from 'prop-types'
import { SelectWrapper } from './style'

function index({options, name, id, value, defaultValue, inputRef, invalid=false, label, autoFocus = false, ...props}) {

  return (
    <SelectWrapper>

      <select
        id={id} 
        name={name}
        {...(defaultValue !== undefined ? {defaultValue: defaultValue} : null)}
        {...(value !== undefined ? {value: value} : {defaultValue: ""})}
        {...(inputRef !== undefined ? {ref: inputRef} : null)}
        required={isRequired}
        autoFocus={autoFocus}
        {...props}
      >
        <option 
          disabled
          hidden
        ></option>

        {options.map(option => <option key={option.id || option} value={option.name || option}>{option.name}</option>)}
      </select>

      {label && <label htmlFor={id}>{label}</label>}

    </SelectWrapper> 
  ) 
}

index.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    inputRef: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    autoFocus: PropTypes.bool,
}

export default index;