import React, { useContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { ProjectForm, RelativeWrapper } from './style'
import InputWrapper from '../inputs/InputWrapper'
import TextareaWrapper from '../inputs/TextareaWrapper'
import formatValue from '../../utils/monetaryFormat'
import DefaultButton from '../buttons/DefaultButton'
import CategoriesInput from './CategoriesInput'
import LengthMark from '../LengthMark'

function index({project, handleProjectSubmit}) {
    const initialState = project ? project : {
        name: '',
        budget: '',
        categories: [],
        description: ''
    }
    const [ invalidName, setInvalidName ] = useState(false)
    const [ invalidBudget, setInvalidBudget ] = useState(false)
    const [ invalidCategories, setInvalidCategories ] = useState(false)
    const [ projectDatas, setProjectDatas ] = useState(initialState)

    // handle submit
    function handleSubmit(e) {
        e.preventDefault()

        if (projectDatas.name === '' || projectDatas.budget === '' || projectDatas.categories.length === 0) {
            if (projectDatas.name === '') {
                setInvalidName(true)
            }

            if (projectDatas.budget === '') {
                setInvalidBudget(true)
            }

            if (projectDatas.categories.length === 0) {
                setInvalidCategories(true)
            }

            return
        }

        handleProjectSubmit(projectDatas)
    }

    // Validation callbacks
    function handleNameValidation(value) {
        if (value !== "") {
          setInvalidName(false)
        }
    }

    function handleBudgetValidation(value) {
        if (value !== "") {
            setInvalidBudget(false)
        }
    }

    // Handle inputs
    function handleNameInput(value) {
        if (value.length <= 44) {
            setProjectDatas(prev => ({...prev, name: value}))
        }
    }

    function handleDescriptionInput(value) {
        if (value.length <= 244) {
            setProjectDatas(prev => ({...prev, description: value}))
        }
    }

    function handleCategoryPush(categoryToPush) {
        setInvalidCategories(false)
        const alreadySelected = projectDatas.categories.some(category => category.id === categoryToPush.id)

        !alreadySelected && setProjectDatas(prev => ({
            ...prev, 
            categories: [...prev.categories, categoryToPush]
        }))
    }

    function handleCategoryDelete(categoryToDelete) {
        setProjectDatas(prev => ({
            ...prev, 
            categories: prev.categories.filter(category => category.id !== categoryToDelete.id)
        }))
    }

    return (
        <ProjectForm onSubmit={handleSubmit}>
            
            <RelativeWrapper>
                <LengthMark 
                    current={projectDatas.name.length}
                    cap={44}
                />
                <InputWrapper 
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectDatas.name}
                    isRequired={true}
                    invalid={invalidName}
                    autoComplete={false}
                    autoFocus={true}
                    label="Project name:"
                    onChange={e => handleNameInput(e.target.value)}
                    onBlur={ e => handleNameValidation(e.target.value)}
                />
            </RelativeWrapper>

            <InputWrapper 
                type="text"
                id="projectBudget"
                name="projectBudget"
                value={formatValue(projectDatas.budget.toString())}
                isRequired={true}
                invalid={invalidBudget}
                autoComplete={false}
                label="Project Budget:"
                onChange={e => setProjectDatas(prev => ({...prev, budget: formatValue(e.target.value)}))}
                onBlur={ e => handleBudgetValidation(e.target.value)}
            />

            <CategoriesInput
                selectedCategories={projectDatas.categories}
                handleCategoryPush={handleCategoryPush}
                handleCategoryDelete={handleCategoryDelete}
                invalid={invalidCategories}
            />
            
            <RelativeWrapper>
                <LengthMark 
                    current={projectDatas.description.length}
                    cap={244}
                />
                <TextareaWrapper 
                    id="projectDescription"
                    name="projectDescription"
                    value={projectDatas.description}
                    label="Description:"
                    onChange={e => handleDescriptionInput(e.target.value)}
                />
            </RelativeWrapper>

            <DefaultButton
                type="submit"
                styleType="active"
                cornerStyle="basic"
            >
                {project ? "Done" : "Create"}
            </DefaultButton>
        </ProjectForm>
    )
}

index.propTypes = {
    project: PropTypes.object,
    handleProjectSubmit: PropTypes.func.isRequired
}

export default index