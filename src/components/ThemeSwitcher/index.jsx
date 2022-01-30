import { ThemeSwitcher } from "./style"
import { MdBrightnessLow, MdDarkMode } from "react-icons/md";
import PropTypes from "prop-types";

function index({cb}) {

    return (
        <ThemeSwitcher onChange={cb}>
            <input type="checkbox" id='switchInput' />
            <label htmlFor="switchInput"><MdDarkMode/><MdBrightnessLow/></label>
        </ThemeSwitcher>
    )
}

index.propTypes = {
    cb: PropTypes.func.isRequired
}

export default index
