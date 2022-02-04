import React, { useState } from 'react';
import { FormContainer } from './style'
import { Heading } from '../../../components/style/elements/Typoghaphy/style';
import InputWrapper from '../../../components/inputs/InputWrapper'
import TextareaWrapper from '../../../components/inputs/TextareaWrapper'
import Button from '../../../components/Button'
import formatValue from '../../../utils/monetaryFormat';
import CategorySelector from '../../../components/ProjectCategories';

function index() {
  const [name, setName] = useState('')
  const [budget, setBudget] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newProject = {
      id: Date.now(),
      name: name,
      budget: budget,
      category: category,
      description: description
    }
  }

  return <FormContainer>
    <Heading level={3}>New Project</Heading>
    <form onSubmit={handleSubmit}>

      <InputWrapper 
        type="text" 
        id="projectName" 
        name="projectName" 
        value={name} 
        isRequired={true} 
        autoComplete="off"
        autoFocus={true} 
        label="Project name:" 
        cb={
          {onChange: e => setName(e.target.value)}
        }
      />

      <InputWrapper
        type="text" 
        id="projectBudget" 
        name="projectBudget" 
        value={formatValue(budget)} 
        isRequired={true} 
        autoComplete="off" 
        label="Project budget:"
        flag="$" 
        cb={
          {onChange: e => setBudget(e.target.value)}
        }
      />

      <CategorySelector />

      <TextareaWrapper
        id="projectDescription"
        name="projectDescription"
        value={description}
        rows="8"
        cols="30"
        label="Project description"
        cb={{onChange: e => setDescription(e.target.value)}}
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
