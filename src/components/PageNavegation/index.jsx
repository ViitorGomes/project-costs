import React from 'react';
import { MdAttachMoney, MdHouse, MdOutlineGrid4X4, MdAssignment, } from "react-icons/md";
import { PageNavegation } from './style';
import { Link } from 'react-router-dom';

function index() {
    return (
        <PageNavegation>
            <ul>
                <li title="Home"><Link to='/'><MdHouse/>Home</Link></li>
                <li title="Projects"><Link to='/projects'><MdAssignment/>Projects</Link></li>
                <li title="Spends"><Link to='/spends'><MdAttachMoney/>Spends</Link></li>
                <li title="Networking"><Link to='/networking'><MdOutlineGrid4X4/>Networking</Link></li>
            </ul>
        </PageNavegation>
    )
}

export default index;
