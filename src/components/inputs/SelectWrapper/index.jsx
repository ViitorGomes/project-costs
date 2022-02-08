import PropTypes from 'prop-types'
import { SelectWrapper } from './style'
import React from 'react'

function index({options, name, id, inputRef, label, cb, autoFocus = false, isRequired = false}) {

  return <SelectWrapper>

    <select
      defaultValue='' 
      id={id} 
      name={name}
      {...(inputRef ? {ref: inputRef} : null)} 
      required={isRequired}
      autoFocus={autoFocus}
      {...cb}
    >
      <option 
        disabled
        hidden
      ></option>

      {options.map(option => <option key={option.id || option} value={option}>{option}</option>)}
    </select>

    {label && <label htmlFor={id}>{label}</label>}

  </SelectWrapper> 
}

index.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    autoFocus: PropTypes.bool,
    cb: PropTypes.object
}

export default index;