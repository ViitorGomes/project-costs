import React, { createContext, useState } from 'react';

export const MenuContext = createContext({})

export function MenuProvider({children}) {
    const [displayMenu, setDisplayMenu] = useState(false)

    function handleMenuDisplay(status) {
        setDisplayMenu(status)
    }

    return <MenuContext.Provider value={{
        displayMenu,
        handleMenuDisplay
    }}>
        {children}
    </MenuContext.Provider>
}