import React, { useState, useCallback, createContext, useEffect } from "react";

export const CategoriesContext = createContext([])

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem("categories")) || [])

    const handleCategoriesPush = useCallback(newCategory => {
        setCategories((prevCategories) => [...prevCategories, newCategory])
    }, [])

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories)) 
    }, [categories])

    return <CategoriesContext.Provider value={{
        categories,
        handleCategoriesPush
    }}>
        {children}
    </CategoriesContext.Provider>
}