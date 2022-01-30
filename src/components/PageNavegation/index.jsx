import React, { useState } from 'react';
import { MdMenu, MdAttachMoney, MdHouse, MdOutlineGrid4X4, MdAssignment, } from "react-icons/md";
import { PageNavegation } from './style';
import { Link } from 'react-router-dom';

function index() {
    const [ menu, setMenu ] = useState(false)

    return <PageNavegation showingMenu={menu}>
        <MdMenu onClick={e => setMenu(!menu)} />
        <ul>
            <li><Link to='/'><MdHouse/>Home</Link></li>
            <li><Link to='/projects'><MdAssignment/>Projects</Link></li>
            <li><Link to='/spends'><MdAttachMoney/>Spends</Link></li>
            <li><Link to='/networking'><MdOutlineGrid4X4/>Networking</Link></li>
        </ul>
    </PageNavegation>;
}

export default index;
