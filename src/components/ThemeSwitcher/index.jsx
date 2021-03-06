import React from "react";
import PropTypes from "prop-types";
import { ThemeSwitcher } from "./style"
import { MdBrightnessLow, MdDarkMode } from "react-icons/md";

function index({cb, theme}) {

    return (
        <ThemeSwitcher onChange={cb}>
            <input type="checkbox" id='switchInput' {...(theme === "dark" && {defaultChecked: true})}/>
            <label htmlFor="switchInput"><MdDarkMode/><MdBrightnessLow/></label>
        </ThemeSwitcher>
    )
}

index.propTypes = {
    cb: PropTypes.func.isRequired
}

export default index
