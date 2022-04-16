import React, { useCallback, useRef, useContext, useState } from 'react';
import { NewCategoryForm } from './style';
import InputWrapper from '../../../../components/inputs/InputWrapper'
import Button from '../../../../components/buttons/DefaultButton'
import { CategoriesContext } from '../../../../context/categoriesContext';

function index() {
    const categoryNameRef = useRef(null)
    const [ invalidCategoryName, setInvalidCategoryName ] = useState(false)
    const categoryColorRef = useRef(null)
    const { handleCategoryPush } = useContext(CategoriesContext)
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (categoryNameRef.current.value === "") {
            setInvalidCategoryName(true)
            return
        }

        const newCategory = {
            id: Date.now(),
            name: categoryNameRef.current.value,
            color: categoryColorRef.current.value
        }

        handleCategoryPush(newCategory)
        setInvalidCategoryName(false)
        categoryNameRef.current.value = ""
        categoryColorRef.current.value = "#333333"

    }, [])

    return (
        <NewCategoryForm onSubmit={handleSubmit}>
            <input type="color" defaultValue="#333333" ref={categoryColorRef} />
            <InputWrapper 
                type="text" 
                id="categoryName" 
                name="categoryName" 
                inputRef={categoryNameRef} 
                isRequired={true}
                invalid={invalidCategoryName}
                setInvalid={setInvalidCategoryName} 
                autoComplete={false} 
                label="Category name:"
            />
            <Button 
                type="submit" 
                styleType="active" 
                cornerStyle="basic"
            >Create</Button>
        </NewCategoryForm>
    )
}

export default index;
