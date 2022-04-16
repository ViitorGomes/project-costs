import React from 'react';
import PropTypes from 'prop-types'
import { InputWrapper } from './style';
import Warning from '../../InputWarning'

function index({type="text", id, name, value, defaultValue, inputRef, isRequired=false, invalid=false, showErrorMessage=true, autoComplete=true, autoFocus=false, label, flag, ...props}) {

  return (
    <InputWrapper invalid={invalid}>

      <div>
        {flag && <span>{flag.slice(0, 2)}</span>}
        
        <input
          type={type} 
          id={id} 
          name={name} 
          {...(defaultValue !== undefined ? {defaultValue: defaultValue} : null)}
          {...(value !== undefined ? {value: value} : null)}
          {...(inputRef !== undefined ? {ref: inputRef} : null)} 
          autoComplete={autoComplete ? "on" : "off"} 
          autoFocus={autoFocus}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      

      {showErrorMessage && invalid 
        ? <Warning />
        : null
      }

    </InputWrapper>
  )
}

index.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    inputRef: PropTypes.object,
    isRequired: PropTypes.bool,
    invalid: PropTypes.bool,
    showErrorMessage: PropTypes.bool,
    autoComplete: PropTypes.bool,
    autoFocus: PropTypes.bool,
    label: PropTypes.string,
    flag: PropTypes.string,
}

export default index