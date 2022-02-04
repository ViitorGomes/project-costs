import React, {useContext} from 'react';
import { Header } from './style';
import { Link } from 'react-router-dom';
import PageNavegation from '../../PageNavegation';
import logo from '../../../assets/images/cost_logo.png'
import { FlexContainer } from '../../Container/style'
import ConfigButton from '../../ConfigButton';
import LogoutButton from '../../LogoutButton';
import { useClickOut } from '../../../hooks/useClickOut';
import { MenuContext } from '../../../context/menuContext'

function index() {
    
    const { displayMenu, handleMenuDisplay } = useContext(MenuContext)

    const headerRef = useClickOut(() => {
        displayMenu ? handleMenuDisplay(false) : null
    })

    return <Header displaing={displayMenu} ref={headerRef}>
        <FlexContainer flow="column">
            <Link to='/'>
                <img src={logo} alt="Cost logo" />
            </Link>
            <PageNavegation/>
        </FlexContainer>
        <FlexContainer>
            <ConfigButton />
            <LogoutButton/>
        </FlexContainer>
    </Header>;
}

export default index
