import React from 'react';
import PropTypes from 'prop-types'
import { TextareaWrapper} from './style';
import Warning from '../../InputWarning'

function index({id, name, value, defaultValue, inputRef, isRequired=false, invalid=false, validationCb, showErrorMessage=true, autoFocus=false, rows = "10", cols = "30", label, ...props}) {

    return (
        <TextareaWrapper invalid={invalid}>
            {label && <label htmlFor={id}>{label}</label>}
            
            <textarea
                id={id} 
                name={name} 
                {...(defaultValue !== undefined ? {defaultValue: defaultValue} : null)}
                {...(value !== undefined ? {value: value} : null)}
                {...(inputRef !== undefined ? {ref: inputRef} : null)}
                {...(validationCb !== undefined ? {onBlur: e => validationCb(e.target.value)} : null)}
                cols={cols} 
                rows={rows}
                autoFocus={autoFocus}
                {...props}
            ></textarea>

            {showErrorMessage && invalid 
                ? <Warning />
                : null
            }

        </TextareaWrapper>
    )
}

index.prototype = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    inputRef: PropTypes.object,
    isRequired: PropTypes.bool,
    invalid: PropTypes.bool,
    validationCb: PropTypes.func,
    showErrorMessage: PropTypes.bool,
    autoFocus: PropTypes.bool,
    rows: PropTypes.string,
    cols: PropTypes.string,
    label: PropTypes.string,
}

export default index