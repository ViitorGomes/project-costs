import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MenuDisplay, SubHeader } from './style';
import { MdNotes } from "react-icons/md";
import { MenuContext } from '../../../context/menuContext'
import ThemeSwitcher from '../../ThemeSwitcher';
import UserHeaderMenu from '../../UserHeaderMenu';
import defaultUser from '../../../assets/images/default_user.png'
import { FlexContainer } from '../../Container/style';

function index({themeCb, currentTheme}) {
    const { handleMenuDisplay } = useContext(MenuContext)

    return <SubHeader>
        <FlexContainer gap="36px" align="center">
            <MenuDisplay onClick={e => handleMenuDisplay(true)}>
                <MdNotes/>
            </MenuDisplay>
        </FlexContainer>
        <FlexContainer gap="36px" align="center">
            <ThemeSwitcher cb={themeCb} theme={currentTheme}/>
            <UserHeaderMenu userName="Jose Vitor Gomes dos Santos" userPicture={defaultUser} />
        </FlexContainer>
    </SubHeader>;
}

index.propTypes = {
    themeCb: PropTypes.func.isRequired,
    currentTheme: PropTypes.string.isRequired,
}

export default index;
