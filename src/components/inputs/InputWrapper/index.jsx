import PropTypes from 'prop-types'
import { InputWrapper } from './style';

function index({type="text",id, name, defaultValue, inputRef, isRequired=false, autoComplete = "on", autoFocus=false, label, flag, cb}) {

  return <InputWrapper isFocus={focus} >
    {flag && <span>{flag.slice(0, 2)}</span>}

    <input
      {...(defaultValue ? {defaultValue: defaultValue} : null)}
      type={type} 
      id={id} 
      name={name} 
      {...(inputRef ? {ref: inputRef} : null)} 
      required={isRequired}
      autoComplete={autoComplete} 
      autoFocus={autoFocus}
      {...cb}
    />

    <label>{label}</label>
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