import React, { useCallback, useRef, useContext } from 'react';
import { NewCategoryForm } from './style';
import InputWrapper from '../../../../components/inputs/InputWrapper'
import Button from '../../../../components/buttons/DefaultButton'
import { CategoriesContext } from '../../../../context/categoriesContext';

function index() {
    const categoryNameRef = useRef(null)
    const categoryColorRef = useRef(null)
    const { handleCategoriesPush } = useContext(CategoriesContext)
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        const categoryName = categoryNameRef.current.value
        const categoryColor = categoryColorRef.current.value

        const newCategory = {
            id: Date.now(),
            name: categoryName,
            color: categoryColor
        }

        handleCategoriesPush(newCategory)
        categoryNameRef.current.value = ""
        categoryColorRef.current.value = "#ffffff"
    }, [])

    return <NewCategoryForm onSubmit={handleSubmit}>
        <InputWrapper type="text" id="categoryName" name="categoryName" inputRef={categoryNameRef} isRequired={true} autoComplete="off" label="Category name:"/>
        <input type="color" defaultValue="#ffffff" ref={categoryColorRef} />
        <Button type="submit" styleType="active" cornerStyle="basic">Create</Button>
    </NewCategoryForm>;
}

export default index;
