import { useEffect, useRef } from "react"

export const useClickOut = (handler) => {
    const ref = useRef(null)

    useEffect(() => {

        const checkClick = (event) => {
            if (!ref.current.contains(event.target)) handler()
        }
    
        document.addEventListener("mousedown", checkClick)
    
        return () => document.removeEventListener("mousedown", checkClick)
    })

    return ref
}