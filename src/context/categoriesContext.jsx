import React, { useState, useCallback, createContext, useEffect } from "react";

export const CategoriesContext = createContext()

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([])
    const [ loading, setLoading ] = useState(true)

    // categories request
    useEffect(() => {
        setTimeout(() => {
            const options = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
    
            fetch('http://localhost:5000/categories', options)
                .then(response => response.json())
                .then(json => {
                    setCategories(json)
                    setLoading(false)
                })
                .catch(err => console.log(err))

        }, 3000)
    }, []) 

    const handleCategoryPush = useCallback((newCategory) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        }

        fetch('http://localhost:5000/categories', options)
            .then(response => response.json())
            .then(json => setCategories(prev => [...prev, json]))
            .catch(err => console.log(err))
    }, [])

    const handleCategoryDelete = useCallback(async (categoryToDelete) => {
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`http://localhost:5000/categories/${categoryToDelete.id}`, options)
            .then(response => response.json())
            .then(json => setCategories(prev => prev.filter(category => category.id !== categoryToDelete.id)))
            .catch(err => console.log(err))
    }, [])

    return <CategoriesContext.Provider value={{
        categories,
        loading,
        handleCategoryPush,
        handleCategoryDelete
    }}>
        {children}
    </CategoriesContext.Provider>
}