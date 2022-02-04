import React, { useContext } from 'react';
import { MenuContext } from '../../context/menuContext'
import { ContentContainer } from './style'

function index({children}) {
    const { displayMenu } = useContext(MenuContext)

    return <ContentContainer flow="column" displaingMenu={displayMenu}>
        {children}
    </ContentContainer>;
}

export default index;
