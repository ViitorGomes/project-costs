import React from 'react';
import PropTypes from 'prop-types';
import { UserMenu } from './style'
import { P } from '../../../../style/elements/Typoghaphy/style'
import { FlexContainer } from '../../../../Container/style'
import { Link } from 'react-router-dom';
import { MdPermIdentity } from "react-icons/md";
import LogoutButton from '../../../../LogoutButton'

function index({userName}) {

    return (
        <UserMenu>
            <FlexContainer>
                <P>{userName}</P>
            </FlexContainer>
            <FlexContainer>
                <Link to="/settings"><MdPermIdentity/>My profile</Link>
            </FlexContainer>
            <FlexContainer justify="center">
                <LogoutButton />
            </FlexContainer>
        </UserMenu>
    )
}

index.propTypes = {
    userName: PropTypes.string.isRequired
}

export default index;
