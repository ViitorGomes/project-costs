import React, { useState, useCallback } from 'react';
import { UserHeaderMenu, UserPicWrapper } from './style'
import UserMenu from './UserMenu';
import PropTypes from 'prop-types';
import { useClickOut } from '../../hooks/useClickOut'

function index({userName, userPicture}) {
    userName = userName.split(" ")
    userName = [userName[0].substr(0, 10), userName[userName.length - 1].substr(0, 10)].join(" ")

    const [showMenu, setShowMenu] = useState(false)

    const handleClickOut = useCallback(() => {
        setShowMenu(false)
    })

    const userMenuRef = useClickOut(() => {
        handleClickOut()
    })

    return <UserHeaderMenu ref={userMenuRef}>
        <UserPicWrapper userPicture={userPicture} onClick={e => setShowMenu(!showMenu)} />
        {showMenu && <UserMenu userName={userName} />}
    </UserHeaderMenu>;
}

index.propTypes = {
    userName: PropTypes.string.isRequired,
    userPicture: PropTypes.string.isRequired
}

export default index;
