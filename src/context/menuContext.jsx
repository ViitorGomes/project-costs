import React, { createContext, useState, useCallback } from 'react';

export const MenuContext = createContext(false)

export function MenuProvider({children}) {
    const [displayMenu, setDisplayMenu] = useState(false)

    const handleMenuDisplay = useCallback(status => {
        setDisplayMenu(status)
    }, [])

    return <MenuContext.Provider value={{
        displayMenu,
        handleMenuDisplay
    }}>
        {children}
    </MenuContext.Provider>
}