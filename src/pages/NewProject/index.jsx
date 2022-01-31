import React, { useState } from 'react';
import { FormContainer } from './style'
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import InputWrapper from '../../components/inputs/InputWrapper'
import SelectWrapper from '../../components/inputs/SelectWrapper'
import TextareaWrapper from '../../components/inputs/TextareaWrapper'
import Button from '../../components/Button'

function index() {
  const [name, setName] = useState('')
  const [budget, setBudget] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
    console.log(budget)
    console.log(category)
    console.log(description)
  }

  const categoryOptions = [
    "Desenvolvimento",
    "Infra",
    "Financeiro"
  ]

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
        label="Project name:" 
        cb={
          {onChange: e => setName(e.target.value)}
        }
      />

      <InputWrapper
        type="text" 
        id="projectBudget" 
        name="projectBudget" 
        value={budget} 
        isRequired={true} 
        autoComplete="off" 
        label="Project budget:"
        flag="$" 
        cb={
          {onChange: e => setBudget(e.target.value)}
        }
      />

      <SelectWrapper 
        id="projectCategory"
        name="projectCategory"
        value={category}
        options={categoryOptions}
        label="Project category"
        cb={{onChange: e => setCategory(e = e.target.value)}}
        isRequired={true}
      />
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
