import PropTypes from 'prop-types'
import { SelectWrapper } from './style'
import React, {useState} from 'react'

function index({value, options, name, id, label, cb, isRequired = false}) {

  const [focus, setFocus] = useState(false)
  const [notEmpty, setNotEmpty] = useState(false)

  return <SelectWrapper isFocus={focus} notEmpty={notEmpty}>

    {label && <label htmlFor={id}>{label}</label>}

    <select 
      value={value} 
      name={name} 
      id={id} 
      required={isRequired}
      {...cb}
      onFocus={e => {
        setFocus(true)
        setNotEmpty(false)
      }} 
      onBlur={e => {
        setFocus(false)
        e.target.value !== "" && setNotEmpty(true)
      }} 
    >
      <option 
        disabled
        hidden
      ></option>

      {options.map(option => <option key={option.id || option} value={option}>{option}</option>)}
    </select>

  </SelectWrapper> 
}

index.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    cb: PropTypes.object
}

export default index;