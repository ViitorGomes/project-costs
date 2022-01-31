import PropTypes from 'prop-types'
import { TextareaWrapper} from './style';

function index({name, id, value, rows = "10", cols = "30", isRequired = false, label, cb}) {
  return <TextareaWrapper>

        {label && <label htmlFor={id}>{label}</label>}

        <textarea
            value={value} 
            name={name} 
            id={id} 
            cols={cols} 
            rows={rows}
            required={isRequired}
            {...cb}
        ></textarea>
    </TextareaWrapper>;
}

index.prototype = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    rows: PropTypes.string,
    cols: PropTypes.string,
    isRequired: PropTypes.string,
    label: PropTypes.string,
    cb: PropTypes.object
}

export default index