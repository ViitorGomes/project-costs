import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MenuDisplay, SubHeader } from './style';
import { MdNotes } from "react-icons/md";
import { MenuContext } from '../../../context/menuContext'
import ThemeSwitcher from '../../ThemeSwitcher';

function index({themeCb, currentTheme}) {
    const { handleMenuDisplay } = useContext(MenuContext)

    return <SubHeader>
        <MenuDisplay onClick={e => handleMenuDisplay(true)}>
            <MdNotes/>
        </MenuDisplay>
        <ThemeSwitcher cb={themeCb} theme={currentTheme}/>
    </SubHeader>;
}

index.propTypes = {
    themeCb: PropTypes.func.isRequired,
    currentTheme: PropTypes.string.isRequired,
}

export default index;
