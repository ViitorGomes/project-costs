import React, { createContext, useEffect, useState, useCallback } from "react";

export const MessageContext = createContext()

export function MessageProvider({children}) {

    const [ message, setMessage ] = useState(undefined)

    useEffect(() => {
        console.log('entrou')
        setTimeout(() => {
            setMessage(undefined)
        }, 5000)
    }, [message])

    const handleNewMessage = useCallback((newMessage) => {
        setMessage(newMessage)
    }, [])

    return <MessageContext.Provider value={{
        message,
        handleNewMessage
    }}>
        {children}
    </MessageContext.Provider>
}