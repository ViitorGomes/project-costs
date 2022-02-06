import PropTypes from 'prop-types'
import { InputWrapper } from './style';
import { useState } from 'react';

function index({type="text",id, name, value, inputRef, isRequired=false, autoComplete = "on", autoFocus=false, label, flag, cb}) {
  const [focus, setFocus] = useState(false)
  const [notEmpty, setNotEmpty] = useState(false)

  return <InputWrapper isFocus={focus} notEmpty={notEmpty} >
    {flag && <span>{flag.slice(0, 2)}</span>}

    <label>{label}</label>

    <input
      value={value}
      type={type} 
      id={id} 
      name={name} 
      {...(inputRef ? {ref: inputRef} : null)} 
      required={isRequired}
      autoComplete={autoComplete} 
      autoFocus={autoFocus}
      onFocus={e => {
        setFocus(true)
        setNotEmpty(false)
      }} 
      onBlur={e => {
        setFocus(false)
        e.target.value !== "" && setNotEmpty(true)
      }}
      {...cb}
    />
  </InputWrapper>;
}

index.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    isRequired: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    label: PropTypes.string,
    flag: PropTypes.string,
    cb: PropTypes.object
}

export default index