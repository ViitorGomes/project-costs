import React, { useRef, useState } from 'react';
import { FormContainer } from './style'
import { Heading } from '../../../components/style/elements/Typoghaphy/style';
import InputWrapper from '../../../components/inputs/InputWrapper'
import TextareaWrapper from '../../../components/inputs/TextareaWrapper'
import Button from '../../../components/buttons/DefaultButton'
import formatValue from '../../../utils/monetaryFormat';
import CategorySelector from './ProjectCategories';
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

function index() {
  const nameRef = useRef('')
  const budgetRef = useRef('')
  const descriptionRef = useRef('')
  const [projectCategories, setProjectCategories] = useState([])

  const { handleNewProject, setShowingButton } = useOutletContext()
  

  useEffect(() => {
    setShowingButton(false)

    return () => setShowingButton(true)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const budget = budgetRef.current.value
      .replace(/\./g, '')
      .replace(/\,/g, '.')
    
    const categories = projectCategories.map(category => category.id)

    const newProject = {
      id: Date.now(),
      name: nameRef.current.value,
      budget: Number(budget),
      categories: categories,
      description: descriptionRef.current.value
    }

    handleNewProject(newProject)
    
  }

  return <FormContainer>
    <Heading level={3}>New Project</Heading>
    <form onSubmit={handleSubmit}>

      <InputWrapper 
        type="text" 
        id="projectName" 
        name="projectName"
        inputRef={nameRef} 
        isRequired={true} 
        autoComplete="off"
        autoFocus={true} 
        label="Project name:" 
      />

      <InputWrapper
        type="text" 
        id="projectBudget" 
        name="projectBudget"
        inputRef={budgetRef} 
        isRequired={true} 
        autoComplete="off" 
        label="Project budget:"
        flag="$" 
        cb={
          {onChange: e => e.target.value = formatValue(e.target.value)}
        }
      />

      <CategorySelector selectedCategories={projectCategories} setCategoriesCb={setProjectCategories} />

      <TextareaWrapper
        id="projectDescription"
        name="projectDescription"
        inputRef={descriptionRef}
        rows="8"
        cols="30"
        label="Project description"
        isRequired={true}
      />

      <Button 
        type="submit" 
        styleType="active" 
        cornerStyle="basic"
      >Create</Button>
    </form>
  </FormContainer>;
}

export default index;
